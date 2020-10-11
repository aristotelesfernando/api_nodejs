const service = require('./service');

async function main() {
    try {
        const results = await service.obterPessoas('a');
        const names = [];
        
        results.forEach(function (item) {
            names.push(item.name);
        });

        cpnsole.log(names);
    } catch (error) {
        console.error('Deu Ruim: ', error);
    }
}

main();