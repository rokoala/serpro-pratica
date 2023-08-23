file_path = 'input.txt'
out_path = 'output.txt'


class MessageWriter(object):
    def __init__(self, file_name):
        self.file_name = file_name

    def __enter__(self):
        self.file = open(self.file_name, 'w')
        return self.file

    def __exit__(self, *args):
        self.file.close()


def readFile(path):
    with open(path, 'r') as file:
        # for line in file:
        content = file.read()
    return content


def readFile2(path):
    file = open(path, 'r')
    content = file.read()
    file.close()
    return content


def writeFile(path, data):
    with open(path, 'w') as file:
        file.write(data)


def main():
    readData = readFile(file_path)
    readData2 = readFile2(file_path)
    writeFile(out_path, readData)
    writeFile(f"2_{out_path}", readData2)
    with MessageWriter("test.txt") as xfile:
        xfile.write("hello world")
    print(help(open))


if __name__ == "__main__":
    main()
