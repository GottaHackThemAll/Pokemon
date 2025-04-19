DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER NOT NULL,
    cuisineType TEXT NOT NULL,
    cuisineLevel INTEGER NOT NULL,
    timeCreated TEXT NOT NULL,
    title TEXT NOT NULL,
    likeCount INTEGER NOT NULL,
    body TEXT NOT NULL,
    foodImage BINARY NOT NULL
)