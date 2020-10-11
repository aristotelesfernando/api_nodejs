const service = require('./service_socker');

Array.prototype.meuMap = function(callback) {
    const novoArrayMapeado = [];
    for(let i = 0; i <= this.length; i++) {
        const resultado = callback(this[i], i);
        novoArrayMapeado.push(resultado);
    }

    return novoArrayMapeado;
}

async function main() {
    try {
        const results = await service.obterTimes('a');
        //const nameTeams = [];
        
        // results.teams.forEach(function (item) {
        //     nameTeams.push(item.strAlternate);
        // });

        // const nameTeams = results.teams.map(function(times) {
        //     return times.strAlternate;
        // });

        //const nameTeams = results.teams.map((times) => times.strAlternate);

        const nameTeams = results.teams.meuMap(function(times, indice) {
            return times.teams.strAlternate;
        });

        console.log('Nome do Time:', nameTeams);
    } catch (error) {
        console.error('Deu Ruim: ', error);
    }
}

main();