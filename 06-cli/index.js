const commander = require('commander');
const Commander = require('commander');
const database = require('./database');
const Database = require('./database');
const Heroi = require('./heroi');

async function main() {
    Commander
        .version('v 1.0')
        .option('-n, --nome [value]','Nome do Heroi')
        .option('-p, --poder [value]','Poder do Heroi')
        .option('-i, --id [value]','ID do Heroi')
        .option('-c, --cadastrar',"Cadastrar um heroi")
        .option('-l, --listar','Listar um heroi')
        .option('-r, --remover [value]','Remover heroi pelo ID')
        .option('-a, --atualizar [value]', 'Atualizar um heroi pelo ID')
        .parse(process.argv);

    const heroi = new Heroi(commander);
    try {
        if(Commander.cadastrar) {
            const resultado = await database.cadastrar(heroi);
            if(!resultado) {
                console.error('Heroi não foi cadastrado');
                return;
            } 
            console.log('Heroi cadastrado com sucesso...'); 
        }

        if(commander.listar) {
            const resultado = await database.listar();
            console.log(resultado);
            return;
        }
        
        if(commander.remover) {
            const resultado = await database.remover(heroi.id);
            if(!resultado) {
                console.error('Não foi possível remover o Heroi...');
                return;
            }
            console.log('Heroi removido com sucesso!');
        }

        if(Commander.atualizar) {
            const idParaAtualizar = parseInt(Commander.atualizar);
            delete heroi.id;

            //remover todas as chaves que estiverem com undefined/null
            const dado = JSON.stringify(heroi);
            const heroiAtualizar = JSON.parse(dado);

            const resultado = await Database.atualizar(idParaAtualizar, heroiAtualizar);

            if(!resultado) {
                console.error('Não foi possivel atualizar o heroi');
                return;
            }
            console.log('Heroi atualizado com sucesso !');
        }
    } catch (error) { 
        console.error('Ocorreu um erro: ', error);
    }

}

main();