CREATE DATABASE generaldbs;
USE generaldbs;

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    document VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE Products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    company TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    amount INT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


INSERT INTO Users
	(name, email, password, document, phone, address)
	VALUES
	('user1','user1@email.com','senha123','zzzz-zzz','0800 000 000', '123'),
	('user2','user2@email.com','senha123','zzzz-zzz','0800 000 000', '123'),
	('user3','user3@email.com','senha123','zzzz-zzz','0800 000 000', '123');


INSERT INTO Products
	(name, description, company, price, amount)
	VALUES
	('product1','description1','company1',10.00,4),
	('product2','description2','company2',10.00,4),
	('product3','description3','company3',10.00,4),
	('product4','description4','company4',10.00,4),
	('product5','description5','company5',10.00,4);