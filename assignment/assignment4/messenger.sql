CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    userID VARCHAR(20),
    userPW VARCHAR(20),
    nickname VARCHAR(20),
    profileLink VARCHAR(80),
    profileMessage VARCHAR(80),
    isSecession TINYINT(1) DEFAULT 0,
    joinDate DATE,
    PRIMARY KEY(id)
);

CREATE TABLE channels (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(20),
    createUser INT,
    channelLink VARCHAR(80),
    maxNum INT,
    isSecession TINYINT(1) DEFAULT 0,
    createDate DATE,
    PRIMARY KEY(id),
    FOREIGN KEY(createUser)
    REFERENCES `users`(`id`)
);

CREATE TABLE chats (
    id INT NOT NULL AUTO_INCREMENT,
    content TEXT,
    writer INT,
    channel INT,
    createDate DATE,
    PRIMARY KEY(id),
    FOREIGN KEY(writer)
    REFERENCES `users`(`id`),
    FOREIGN KEY(channel)
    REFERENCES `channels`(`id`)
);

CREATE TABLE follows (
    id INT NOT NULL AUTO_INCREMENT,
    follower INT,
    followee INT,
    followDate DATE,
    PRIMARY KEY(id),
    FOREIGN KEY(follower)
    REFERENCES `users`(`id`),
    FOREIGN KEY(followee)
    REFERENCES `users`(`id`)
);

CREATE TABLE blocks (
    id INT NOT NULL AUTO_INCREMENT,
    blockUser INT,
    blockedUser INT,
    blockDate DATE,
    PRIMARY KEY(id),
    FOREIGN KEY(blockUser)
    REFERENCES `users`(`id`),
    FOREIGN KEY(blockedUser)
    REFERENCES `users`(`id`)
);