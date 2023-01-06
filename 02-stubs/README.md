# Stubs

Usado para substituir algum comportamento do sistema por objetos estáticos, onde criamos mocks para cada cenário específico.

Imagina que temos que fazer uma requisição para nosso serviço de CEP, e o sistema possui varias regras de negócios que dependem do resultado da API de CEP. Mas por algum motivo a API de CEP sai do ar, e todos os nossos testes param de funcionar. Usando stubs substituímos o comportamento da função, podemos definir algo como: Quando essa função tentar acessar a API de CEP, ao invés de ir para internet e fazer a requisição para a API de CEP ele olha para o objeto mockado naquele cenário em contexto.

<aside>
💡 Nossos testes não devem depender de serviços externos de internet. Se você precisa testar algo na aplicação que demande dependências, teste a logica, a entrada dos dados e a saída das funções. A parte do processamento partimos do princípio que o sistema terceiro funcione corretamente.
</aside>

## Exemplo / projeto

Nesse exemplo criei um serviço que chama outra APIs e substitui esse comportamento dele. Eu consumi uma API que traz as iformações dos planetas do Star Wars, mas interceptei ele para nao ir para a requisição nao ser feita, e no lugar ele devolve dados mockados.

Dessa forma, necesse cenário, nossos testes de unidade mapeiam a saída sem depender de internet ou de serviços de terceiros. Elas focam no output e processamento logico do seu código ao invés da api em questão.
