const service = require('./service_socker');

async function main() {
    try {
        const results = await service.obterTimes('a');
        const nameTeams = [];
        
        results.teams.forEach(function (item) {
            nameTeams.push(item.strAlternate);
        });

        console.log(nameTeams);
    } catch (error) {
        console.error('Deu Ruim: ', error);
    }
}

main();