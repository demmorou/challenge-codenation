const axios = require("axios");
const fs = require("fs");
const sha1 = require("sha1");
const FormData = require("form-data");
const cesar = require("./cesar");
require("dotenv/config");

const main = async () => {
  const responseGet = await axios.get(process.env.TOKEN_URL);

  const { data } = responseGet;
  data.decifrado = cesar(data.cifrado, data.numero_casas);
  data.resumo_criptografico = sha1(data.decifrado);

  const request = new FormData();

  fs.writeFileSync("answer.json", JSON.stringify(data));
  request.append("answer", fs.createReadStream("answer.json"));

  const responsePost = await axios.post(process.env.UPLOAD_URL, request, {
    headers: request.getHeaders(),
  });

  console.log(responsePost);
};

main();
