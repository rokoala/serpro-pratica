import argparse


def parse():
    parser = argparse.ArgumentParser()
    parser.add_argument("-idade", type=int, help="inteiro")
    parser.add_argument("--name", type=str, default="john", help="optional")
    args = parser.parse_args()
    return args


def main():
    print(parse())


if __name__ == "__main__":
    main()
