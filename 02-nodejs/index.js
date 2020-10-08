/**
 * Objetivos
 * 0 - Obter um usuário
 * 1 - Obter o número de telefone de um usuário pelo seu Id
 * 2 - Obter o endereço do usuário pelo seu Id
 */

//importando um módulo interno do node
const util = require("util");
// automatizando a função que usa callback para promise
const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario() {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function () {
      //return reject(new Error("Deu ruim de verdade"));
      return resolve({
        id: 1,
        nome: "Aladin",
        dataNascimento: new Date(),
      });
    }, 1000);
  });
}

function obterTelefone(idUsuario) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        telefone: "988752339",
        ddd: 91,
      });
    }, 2000);
  });
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "conselheiro furtado",
      numero: 3409,
    });
  }, 2000);
}

const usuarioPromise = obterUsuario();
//para manipular o sucesso usamos .THEN
usuarioPromise
  .then(function (usuario) {
    return obterTelefone(usuario.id).then(function resolverTelefone(result) {
      return {
        usuario: {
          nome: usuario.nome,
          id: usuario.id,
        },
        telefone: result,
      };
    });
  })
  .then(function (resultado) {
    const endereco = obterEnderecoAsync(resultado.usuario.id);
    return endereco.then(function resolverEndereco(result) {
      return {
        usuario: resultado.usuario,
        telefone: resultado.telefone,
        endereco: result,
      };
    });
  })
  .then(function (resultado) {
    console.log(`
        Nome: ${resultado.usuario.nome}
        Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
        Telefone: (${resultado.telefone.ddd})${resultado.telefone.telefone}
    `);
  })
  .catch(function (error) {
    //catch função para tratar erro
    console.error("Deu ruim ", error);
  });

// function resolverUsuario(erro, usuario) {
//     console.log('usuario ', usuario);
// }

// obterUsuario(function resolverUsuario(error, usuario) {
//     if (error) {
//         console.error("Deu Ruim em Usuario ", error);
//         return;
//     }

//     obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
//         if (error1) {
//             console.error("Deu Ruim em Telefone ", error1);
//             return;
//         }

//         obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
//             if (error2) {
//                 console.error("Deu Ruim em Endereço ", error2);
//                 return;
//             }

//             console.log(`
//                 Nome: ${usuario.nome},
//                 Endereco: ${endereco.rua},${endereco.numero},
//                 Telefone: (${telefone.ddd})${telefone.telefone}
//             `);
//         });
//     });
// });
