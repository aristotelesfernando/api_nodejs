const { obterPessoas } = require('./service');

async function main() {
    try {
        const {
            results
        } = await obterPessoas('a');

        const familiaLars = results.filter(function(item) {
            /**
                por padrão precisa retornar um booleano
                para informar se deve manter ou remover da lista
                false > remove da lista
                true > mantem

                não encontrou é igual a -1
                encontrou retorna a posição no array
            */
            const result = item.name.toLowerCase().indexOf('lars') !== -1;
            return result;
        });

        const names = familiaLars.map((pessoa) => pessoa.name);
        console.log(names);
        
    } catch (error) {
        console.error('Ocorreu um erro: ', error);
    }
}

main();