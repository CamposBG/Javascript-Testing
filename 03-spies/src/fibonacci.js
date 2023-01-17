class Fibonacci {
  *execute(input, current = 0, next = 1) {
    if (input === 0) {
      return 0;
    }
    //  como se fosse um return, retornando valores sobre demanda quando precisar. retorna o valor corrente
    yield current;

    // delega função(uma execução) mas nao retorna valor. No caso chama a func recursiva
    yield* this.execute(input - 1, next, current + next);
  }
}

module.exports = Fibonacci;
