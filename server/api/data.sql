DROP table if EXISTS deck;
DROP table if EXISTS players;
DROP table if EXISTS activity;

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    balance INT NOT NULL, 
    wins INT NOT NULL
);

CREATE TABLE deck (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    suit VARCHAR(50) NOT NULL,
    value VARCHAR(50) NOT NULL
);

CREATE TABLE activity(
    id SERIAL PRIMARY KEY, 
    username VARCHAR(50) NOT NULL, 
    password VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    balance INT NOT NULL,
    wins INT NOT NULL
);
INSERT INTO players (username, password, email, balance, wins) VALUES 
    ('theDealer', 'password', 'dealer@gmail.com', 1000, 10),
    ('Michael_Jordan', 'bulls', 'jumpman23@gmail.com', 10000, 20);

INSERT INTO deck (name, suit, value) VALUES
    ('Ace of Spades', 'Spades', 11),
    ('Two of Spades', 'Spades', 2),
    ('Three of Spades', 'Spades', 3),
    ('Four of Spades', 'Spades', 4),
    ('Five of Spades', 'Spades', 5),
    ('Six of Spades', 'Spades', 6),
    ('Seven of Spades', 'Spades', 7),
    ('Eight of Spades', 'Spades', 8),
    ('Nine of Spades', 'Spades', 9),
    ('Ten of Spades', 'Spades', 10),
    ('Jack of Spades', 'Spades', 10),
    ('Queen of Spades', 'Spades', 10),
    ('King of Spades', 'Spades', 10),
    ('Ace of Hearts', 'Hearts', 11),
    ('Two of Hearts', 'Hearts', 2),
    ('Three of Hearts', 'Hearts', 3),
    ('Four of Hearts', 'Hearts', 4),
    ('Five of Hearts', 'Hearts', 5),
    ('Six of Hearts', 'Hearts', 6),
    ('Seven of Hearts', 'Hearts', 7),
    ('Eight of Hearts', 'Hearts', 8),
    ('Nine of Hearts', 'Hearts', 9),
    ('Ten of Hearts', 'Hearts', 10),
    ('Jack of Hearts', 'Hearts', 10),
    ('Queen of Hearts', 'Hearts', 10),
    ('King of Hearts', 'Hearts', 10),
    ('Ace of Clubs', 'Clubs', 11),
    ('Two of Clubs', 'Clubs', 2),
    ('Three of Clubs', 'Clubs', 3),
    ('Four of Clubs', 'Clubs', 4),
    ('Five of Clubs', 'Clubs', 5),
    ('Six of Clubs', 'Clubs', 6),
    ('Seven of Clubs', 'Clubs', 7),
    ('Eight of Clubs', 'Clubs', 8),
    ('Nine of Clubs', 'Clubs', 9),
    ('Ten of Clubs', 'Clubs', 10),
    ('Jack of Clubs', 'Clubs', 10),
    ('Queen of Clubs', 'Clubs', 10),
    ('King of Clubs', 'Clubs', 10),
    ('Ace of Diamonds', 'Diamonds', 11),
    ('Two of Diamonds', 'Diamonds', 2),
    ('Three of Diamonds', 'Diamonds', 3),
    ('Four of Diamonds', 'Diamonds', 4),
    ('Five of Diamonds', 'Diamonds', 5),
    ('Six of Diamonds', 'Diamonds', 6),
    ('Seven of Diamonds', 'Diamonds', 7),
    ('Eight of Diamonds', 'Diamonds', 8),
    ('Nine of Diamonds', 'Diamonds', 9),
    ('Ten of Diamonds', 'Diamonds', 10),
    ('Jack of Diamonds', 'Diamonds', 10),
    ('Queen of Diamonds', 'Diamonds', 10),
    ('King of Diamonds', 'Diamonds', 10);
    



