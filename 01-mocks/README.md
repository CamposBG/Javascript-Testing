# Mocks

Nesse exemplo utilizei mocks para criar diversos cenários e validar uma função que converte um arquivo csv em JSON.

## Conceito:

Usados principalmente em testes de unidades. Com os testes testamos nossas funções do ponto A para o ponto B, mas se precisarmos testar do ponto A para o ponto C, usamos os moks. Nós criamos objetos que partem do princípio que o teste A está funcionando, guardamos os resultados dele num objeto fixo, para que possamos testar de B para C, sem depender do A.

Testar diferentes cenários e evitar os testes repetitivos ou de alta dependencia.

Ex. Precisamos criar uma função que converte um csv em JSON, e para isso temos algumas regras de negócio para validar, ex. se o arquivo está vazio, verificar o contudo, verificar se está no formato correto e se possui as propriedades desejadas. Para cada uma das operações criamos um mock diferente, para testar o comportamento, assim os testes ficam desacoplados e mais inteligentes.

## Premissa de teste:

- Quando testar ?
- O que testar?

<aside>
💡 Entender os cenários e validações que serão feitas antes de começar a codar.
</aside>
