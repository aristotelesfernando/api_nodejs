const { DatabaseError } = require("sequelize/types")

docker ps

docker exec -it 42b861733e19 mongo -u fernando -p 123456 --authenticationDatabase heroes


show dbs

use heroes

show collections

db.heroes.insert({
    nome: 'Flash',
    poder: 'Velocidade',
    dataNascimento: '1998-01-01'
})

db.heroes.find()

for(let i = 0; i <= 100000; i++) { db.heroes.insert({ nome:`Clone-${i}`, poder:`Poder-${i}`, dataAniversario:'1985-01-01'})}

db.heroes.insert({
        nome:´Clone-${i}´, 
        poder:´Poder-${i}´,
        dataAniversario:'1985-01-01'}
    )