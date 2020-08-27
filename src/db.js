import sqlite3 from "better-sqlite3";

export const DB = new sqlite3("./nrdb.sqlite");

const schema = `
CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS posts(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    posted_date DATE DEFAULT CURRENT_TIMESTAMP,
    updated_date DATE DEFAULT CURRENT_TIMESTAMP
);

`;

DB.exec(schema);
