
  DROP DATABASE ECOMMERCE;
CREATE DATABASE ECOMMERCE;

USE ECOMMERCE;


CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL,
    role VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);



CREATE TABLE products (
   id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255),
    description TEXT,
    price FLOAT ,
    image BLOB ,
    INDEX(id),
    manufacture_country VARCHAR(255),
    is_deleted TINYINT DEFAULT 0 ,
    PRIMARY KEY (id)
);

CREATE TABLE Categories  (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255),
    description TEXT,
    brand_id INT,
    img VARCHAR(255),
    PRIMARY KEY(id)

);


CREATE TABLE Customers (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255),
    email TEXT ,
    password VARCHAR(255),
    shipping_address TEXT,
    INDEX(id),
    country VARCHAR(255),
    city VARCHAR(255),
    role VARCHAR(255),
    billing_address TEXT,
    role_id INT ,
    userLoginTime VARCHAR(255),
     FOREIGN KEY (role_id) REFERENCES roles(id),
   PRIMARY KEY(id)
);



CREATE TABLE cart (
    id INT NOT NULL AUTO_INCREMENT NOT NULL,
    product_id INT,
   
    customer_id INT,
    order_id INT,
    sub_total INT DEFAULT 0,
    quantity INT ,
    FOREIGN KEY (product_id) REFERENCES products (id),
    FOREIGN KEY (customer_id) REFERENCES Customers(id),
    FOREIGN KEY (customer_id) REFERENCES Customers(id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);










CREATE TABLE orders(
id INT AUTO_INCREMENT NOT NULL,
customer_id  INT,
cart_id INT,
order_date DATE,
shipping_status VARCHAR(255),
email VARCHAR(255),
INDEX(id),
PRIMARY KEY(id),
FOREIGN KEY(customer_id) REFERENCES Customers(id),
FOREIGN KEY (cart_id) REFERENCES cart(id)
);


CREATE TABLE product_orders(
    product_id INT ,
    order_id INT,
    PRIMARY KEY (product_id,order_id),
    INDEX (product_id),
    INDEX (order_id),
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (order_id) REFERENCES orders(id)
);





CREATE TABLE product_customer(
    product_id int,
    customer_id int,
    PRIMARY KEY (product_id,customer_id),
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (customer_id) REFERENCES Customers(id)
);

CREATE TABLE Reviews(
    id INT AUTO_INCREMENT NOT NULL,
    customer_id INT,
    product_id INT,
    rating INT ,
    review_text TEXT,
    PRIMARY KEY(id),
    FOREIGN KEY (product_id) REFERENCES products(id),
     FOREIGN KEY (customer_id) REFERENCES Customers(id)
);

CREATE TABLE Coupons(
   id INT AUTO_INCREMENT NOT NULL,
    coupon_code VARCHAR(255) ,
    discount_percentage INT ,
    expiration_date DATE ,
    PRIMARY KEY(id)
);



CREATE TABLE feedback (
    id INT NOT NULL AUTO_INCREMENT NOT NULL,
    product_id INT,
    customer_id INT,
    feedback VARCHAR(255),
    FOREIGN KEY (product_id) REFERENCES products(id),
     FOREIGN KEY ( customer_id) REFERENCES Customers(id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE brands (
    id INT NOT NULL AUTO_INCREMENT NOT NULL,
    product_id INT,
    cart_id INT,
    brand VARCHAR(255) UNIQUE,
    image VARCHAR(255),
    -- is_deleted TINYINT DEFAULT 0 ,
    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES products(id),
     FOREIGN KEY (cart_id) REFERENCES cart(id)
);




CREATE TABLE permissions (
    id INT AUTO_INCREMENT NOT NULL,
    permission VARCHAR(255) NOT NULL,
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE product_categories (
    product_id INT,
    category_id INT,
    PRIMARY KEY (product_id, category_id),
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE product_cart (
    id INT ,
    product_id INT,
    cart_id INT,
    PRIMARY KEY (product_id,cart_id),
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (cart_id) REFERENCES cart(id)
);

CREATE TABLE role_permission(
    role_id INT,
    permission_id INT,
    -- PRIMARY KEY (role_id,permission_id),
    FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY (permission_id) REFERENCES permissions(id)
);


CREATE TABLE category_brands (
    category_id INT ,
    brand_id INT,
    PRIMARY KEY (category_id, brand_id),
    FOREIGN KEY (category_id) REFERENCES categories(id),
    FOREIGN KEY (brand_id) REFERENCES brands(id)
);