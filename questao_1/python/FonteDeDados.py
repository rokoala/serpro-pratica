class FonteDeDados:

    def __init__(self, endereco):
        print("hello from source")
        """
        Construtor da classe.
        Recebe como parâmetro o endereço do recurso a ser acessado
        (como o caminho do banco de dados,
        ou o nome do arquivo a ser acessado).
        """
        raise NotImplementedError()

    def proximoDado():
        """
        Método que lê a menor unidade de dado
        que pode ser lido da fonte de dados.
        Caso não existam dados a serem lidos, esse método deve retornar “None”.
        """
        raise NotImplementedError()

    def possuiDados():
        """
        Método com retorno booleano que indica se a fonte de dados ainda possui
        dados a serem lidos.
        """
        raise NotImplementedError()
