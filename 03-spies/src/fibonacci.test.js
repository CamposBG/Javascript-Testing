const Fibonacci = require("./fibonacci");
const sinon = require("sinon");
const assert = require("assert");
const { deepStrictEqual } = require("assert");

// Fibonacci: o próximo valor corresponde à soma dos dois anteriores
(async () => {
  //valida n de execuções
  {
    const fibonacci = new Fibonacci();
    //spy analiza o comportamtento de uma função (args: 1 nome da func, 2 intancia que quer analizar)
    const spy = sinon.spy(fibonacci, fibonacci.execute.name);

    // generators retornam iterator que tem .next()
    // existem 3 formas de ler os dados
    // usando as funções next, for await, e rest/spread

    // for await = trabalha com iteradores assincronos
    for await (const i of fibonacci.execute(3)) {
    }

    // nosso algoritimo vai sempre comceçar do zero!
    const expectedCallCount = 4;

    // comparar quantidades de vezes que foi chamado com o esperado
    assert.deepStrictEqual(spy.callCount, expectedCallCount);
  }

  // valida logica
  {
    const fibonacci = new Fibonacci();
    const spy = sinon.spy(fibonacci, fibonacci.execute.name);

    //outra forma de pegar os valores de generators. espera os executes e pega os valores, joga na variavel result para vermos
    const [...results] = fibonacci.execute(5);
    // [0] input = 5, current = 0, next = 1
    // [1] input = 4, current = 1, next = 1
    // [2] input = 3, current = 1, next = 2
    // [3] input = 2, current = 2, next = 3
    // [4] input = 1, current = 3, next = 5
    // [5] input = 0 -> PARA

    //pegar a chamada 2
    const { args } = spy.getCall(2);
    const expectedResults = [0, 1, 1, 2, 3];
    const expectedParams = Object.values({
      input: 3,
      current: 1,
      next: 2,
    });

    assert.deepStrictEqual(args, expectedParams);
    assert.deepStrictEqual(results, expectedResults);
  }
})();
