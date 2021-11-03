CREATE TABLE students (
    name VARCHAR(10),
    admissionYear INT,
    major VARCHAR(20),
    majorNum INT,
    individualNum INT,
    phoneNum VARCHAR(14),
    homeAddress VARCHAR(80),
    credit INT DEFAULT 0,
    gpa DECIMAL(3, 2),
    isAttend TINYINT(1) DEFAULT 1
);