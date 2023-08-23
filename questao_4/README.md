Analise o código JavaScript da função XPTO exibido a seguir.

function XPTO(valor, lista){
    var i =0;
    var posicao = -1;
   for( i=0; i< list.length;i++){
           if (lista[i] == valor){
          posicao = i
            }
   }
return posicao
}


A função percorre um array contendo números inteiros e retorna a posição de um determinado número. Se esse número não é encontrado no array, a função retorna o valor -1. O número procurado e o array são fornecidos como parâmetros. Note que o código, como apresentado, executa tantos ciclos quantos forem os elementos na lista.

Por exemplo,

XPTO (11, [2, 1, 3, 4, 7, 8, 10, 12]) retornaria -1, e percorreria 8 ciclos.

XPTO (13, [1, 2, 3, 5, 8, 13, 21]) retornaria 5, e percorreria 7 ciclos.

XPTO (1, [1, 2]) retornaria 0, e percorreria 2 ciclos.

Pede-se

Considerando que o array fornecido jamais contém números repetidos, e que seus elementos estão sempre dispostos em ordem crescente, apresente uma nova versão do código dessa função de modo que o tempo de processamento (ou número de ciclos) diminua tanto quanto possível.

Note que a solução apresentada:

a) deve manter a assinatura original e a especificação da função original;

b) não pode utilizar funções/métodos de busca auxiliares;

c) não pode criar/utilizar índices/tabelas auxiliares;

c) deve manter a sintaxe JavaScript;

d) não deve conter comentários.

Serão avaliados:

a) a conformidade com a assinatura e a especificação original;

b) a correção da versão apresentada;

c) o grau de redução do tempo de processamento obtida.
