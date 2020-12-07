## ------------- PostgreSQL

docker run --name postgres -e POSTGRES_USER=fernando -e POSTGRES_PASSWORD=q1w2e3 -e POSTGRES_DB=heroes -p 5432:5432 -d postgres

docker ps

docker exec -it /bin/bash

docker run --name adminer -p 8080:8080 --link postgres:postgres -d adminer

## ------------- MONGODB

docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=q1w2e3 -d mongo:4

docker run --name mongoclient -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient

docker exec -it mongodb mongo --host localhost -u admin -p q1w2e3 --authenticationDatabase admin --eval "db.getSiblingDB('heroes').createUser({user:'fernando', pwd: '123456', roles: [{role: 'readWrite', db: 'heroes'}]})"

db.heroes.find().sort({nome: -1})
db.heroes.find().limit(10).sort({nome: 1})
db.heroes.find().limit(10)
db.heroes.find({},{poder:1, \_id:0})

db.heroes.update({\_id:ObjectId("5fbc49990d9b0cd32e6d9689")}, {nome:'Flash Reverso'})
