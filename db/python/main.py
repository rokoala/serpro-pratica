import sqlite3


def sqlite_database():
    return sqlite3.connect("../database/sqlite/database.db")


def create_table(conn):
    # cria um cursor
    cursor = conn.cursor()
    cursor.execute(
        '''
        CREATE TABLE USER (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            idade NUMBER
        )
        ''')
    cursor.execute("CREATE TABLE POST(message TEXT, date TEXT)")


def drop_table(conn):
    cursor = conn.cursor()
    try:
        cursor.execute("DROP TABLE USER")
        cursor.execute("DROP TABLE POST")
    except sqlite3.Error as error:
        print(error)


def insert_data(conn):
    cursor = conn.cursor()
    try:
        cursor.execute("""
        INSERT INTO USER(name,idade) VALUES(?,?)
        """, ('rodrigo', 34))

        cursor.executemany("""
        INSERT INTO USER(name,idade) VALUES(?,?)
        """, (('mario', 99), ('larissa', 29)))
        conn.commit()
    except sqlite3.Error as error:
        print(f'Erro ao inserir data: {error}')


def get_all_user(conn):
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM USER")
    return cursor.fetchall()


def update_user(conn, id, user):
    cursor = conn.cursor()
    cursor.execute("UPDATE USER SET name=?, idade=? WHERE id=?",
                   (user["name"], user["idade"], id))
    conn.commit()


def main():
    conn = sqlite_database()
    drop_table(conn)
    create_table(conn)
    insert_data(conn)
    print(get_all_user(conn))
    update_user(conn, 1, {"name": 'Jose', "idade": 55})
    print(get_all_user(conn))
    conn.close()


if __name__ == "__main__":
    main()
