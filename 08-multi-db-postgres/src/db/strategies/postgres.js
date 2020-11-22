const ICrud = require('./interfaces/interfaceCrud');

const Sequelize = require('sequelize');

class Postgres extends ICrud {
    constructor() {
        super();
        this._driver = null;
        this._heroes = null;
    }

    async isConnected() {
        try {
            await this._driver.authenticate();
            return true;
        } catch (error) {
            console.log('Falha: ', error);
            return false;
        }
    }

    async defineModel() {
        this._heroes = this._driver.define('herois', {
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
        this._heroes.sync();   
    }

    async create(item) {
        const { dataValues } = await this._heroes.create(item, {raw: true}); 

        return dataValues;
    }

    async read(item = {}) {
        return await this._heroes.findAll({where: item, raw: true});
    }

    async update(id, item) {
        return this._heroes.update(item, {where: {id: id}});
    }

    async delete(id) {
        const query = id ? { id }:{};
        return this._heroes.destroy({where: query});
    }

     async connect() {
        this._driver = new Sequelize(
            'heroes',
            'fernando',
            'q1w2e3',
            {
                host: 'localhost',
                dialect: 'postgres',
                quoteIdentifiers: false,
                operatorsAliases: false
            }
        );
        await this.defineModel();
    }
}

module.exports = Postgres;