// Converta a execução da Promise abaixo para async/await seguindo o formado abaixo
// login("12345")
//     .then((value) => console.log(value))
//     .catch((error) => console.log(error))
//     .finally(() => console.log("Volte sempre!"));

const login = (senha) => {
   return new Promise((resolve, reject) => {
      if (senha === "12345") {
         resolve("Login efetuado com sucesso!");
      } else {
         reject("Senha incorreta.");
      }
   });
};

const doLogin = async (senha) => {

   try {
      const value = await login(senha);
      console.log(value);
   } catch (error) {
      console.log(error);
   } finally {
      console.log("Volte sempre");
   }

}

//Chama a função
doLogin();