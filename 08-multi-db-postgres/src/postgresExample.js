// npm install sequelize

// npm install pg-hstore pg

const Sequelize = require('sequelize');
const driver = new Sequelize(
    'heroes',
    'fernando',
    'q1w2e3',
    {
        host: 'localhost',
        dialect: 'postgres',
        quoteIdentifiers: false,
        operatorsAliases: false
    }
)

async function main() {
    const herois = driver.define('herois', {
        id: {
            type: Sequelize.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING,
            required: true
        },
        poder: {
            type: Sequelize.STRING,
            required: true         
        }
    }, {
        tableName: 'tb_herois',
        freezeTableName: false,
        timestamps: false
    });
    await herois.sync();

    // criando um novo item
    // await herois.create({
    //     nome: 'Homem-Aranha',
    //     poder: 'teia de aranha'
    // });

    const result = await herois.findAll(
        {
            raw: true,
            attributes:['nome','poder']
        }
    );
    console.log('Resultado:', result);
}

main();