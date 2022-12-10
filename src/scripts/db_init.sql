CREATE TABLE ioTable (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL UNIQUE,
    value FLOAT NOT NULL DEFAULT 0,
    type VARCHAR(40)
);