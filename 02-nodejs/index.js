/**
 * Objetivos
 * 0 - Obter um usuário
 * 1 - Obter o número de telefone de um usuário pelo seu Id
 * 2 - Obter o endereço do usuário pelo seu Id
 */

function obterUsuario() {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function () {
      return resolve({
        id: 1,
        nome: "Aladin",
        dataNascimento: new Date(),
      });
    }, 1000);
  });
}

function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: "988752339",
      ddd: 91,
    });
  }, 2000);
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
  .then(function (resultado) {
    console.log("resultado ", resultado);
  })
  .catch(function (error) {
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
