const { error } = require("./src/constants");
const File = require("./src/file");
const { rejects, deepStrictEqual } = require("assert");

(async () => {
  {
    const filePath = "./mocks/emptyFile-invalid.csv";
    // quando retornar um arquivo invalido o erro deve ser deste tipo
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    // rejects -> espera que volte uma promisse rejeitada de dentro, e especificamos qual o erro esperado.
    await rejects(result, rejection);
  }
  {
    const filePath = "./mocks/fourItems-invalid.csv";
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }
  {
    const filePath = "./mocks/threeItems-valid.csv";
    const result = await File.csvToJson(filePath);
    const expected = [
      {
        name: "Vigo Mortensen",
        id: 123,
        profession: "Actor",
        birthDay: 1970,
      },
      {
        name: "Elijah Wood",
        id: 124,
        profession: "Ring bearer",
        birthDay: 1990,
      },
      {
        name: "Ian MacKallen",
        id: 125,
        profession: "Advisor",
        birthDay: 1945,
      },
    ];

    //verifica o valor e a referencia se o resultadoa tual é igual ao esperado.
    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
  }
})();
