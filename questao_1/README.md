Um time de desenvolvimento em Python 3 elaborou uma classe genérica para consumir recursos de fontes externas diversas, como arquivos, bancos de dados ou dispositivos de hardware. O código dessa classe é o que segue:

class FonteDeDados:

def __init__(self, endereco):

raise NotImplementedError()

def proximoDado():

raise NotImplementedError()

def possuiDados():

raise NotImplementedError()

Em que:

__init__: Construtor da classe. Recebe como parâmetro o endereço do recurso a ser acessado (como o caminho do banco de dados, ou o nome do arquivo a ser acessado).
proximoDado: Método que lê a menor unidade de dado que pode ser lido da fonte de dados. Caso não existam dados a serem lidos, esse método deve retornar “None”.
possuiDados: Método com retorno booleano que indica se a fonte de dados ainda possui dados a serem lidos.
Estenda a definição dessa classe para criar a classe “FonteArquivo”, capaz de ler dados de um arquivo do sistema de arquivos local. Ao finalizar a leitura dos dados, o arquivo deve ser fechado adequadamente. Faça com que essa classe não produza exceções, exceto em situações intratáveis, como falta de memória ou falhas no acesso ao recurso requisitado (arquivo não encontrado, acesso negado, recurso indisponível etc.).

O código desenvolvido será avaliado de acordo com os seguintes critérios:

a) Estruturação da classe solicitada;

b) Funcionamento do método construtor;

c) Funcionamento do método proximoDado;

d) Funcionamento do método possuiDados.

Outros campos e métodos podem ser inclusos, caso necessário. Não é necessário inserir blocos de comentário no código. Erros de sintaxe serão considerados deméritos e descontados.
