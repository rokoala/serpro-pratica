from FonteDeDados import FonteDeDados


class FonteArquivo(FonteDeDados):
    def __init__(self, endereco):
        self.index = 0
        try:
            with open(endereco, 'r') as file:
                self.content = file.read().split(" ")
        except FileNotFoundError as err:
            print(f"Arquivo não encontrado, erro:{err}")
        except MemoryError as err:
            print(f"Quantidade de memória insuficiente, erro: {err}")

    def possuiDados(self):
        return self.index < len(self.content)

    def proximoDado(self):
        data = self.content[self.index]
        self.index += 1
        return data


def main():
    try:
        loader = FonteArquivo("db22.txt")
        loader.possuiDados()
        while loader.possuiDados():
            print(f"data: {loader.proximoDado()}")
    except Exception as err:
        print(f"Ocorreu erro: {err}")


if __name__ == "__main__":
    main()
