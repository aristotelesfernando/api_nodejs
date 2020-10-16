const {
    deepEqual,
    ok
} = require('assert');

const database = require('./database');

const DEFAULT_ITEM_CADASTRAR = {nome:'Flash', poder:'speed', id: 1};

describe('Suite de manipulação de herois', () => {

    it('deve pesquisar um herio pesquisando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR;

        const [resultado] = await database.listar(expected.id);

        //ok(resultado, expected);
        deepEqual(resultado, expected);

    });

    // it('deve cadastrar um heroi, usando arquivos', async () => {
    //     const expected = DEFAULT_ITEM_CADASTRAR;

    //     ok(null, expected);
    // });
});

