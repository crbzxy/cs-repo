CREATE TABLE companies (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    name VARCHAR(255)  NOT NULL,
    creationDate DATE NOT NULL,
    companyType VARCHAR(255) NOT NULL,
    description VARCHAR(1020)  NOT NULL
);
