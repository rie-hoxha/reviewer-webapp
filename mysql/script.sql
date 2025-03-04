CREATE TABLE user (
    email VARCHAR(60) PRIMARY KEY,
    username VARCHAR(32) UNIQUE,
    password VARCHAR(32),
    date_joined DATE
);

CREATE TABLE category (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    description TEXT,  /* questionable, review it later */
    PRIMARY KEY(id)  
);

CREATE TABLE product_post (
    post_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100),
    price DECIMAL(10, 2),
    description TEXT,
    brand VARCHAR(50),
    date_posted DATE,
    user_email VARCHAR(60),
    category_id INT,
    PRIMARY KEY(post_id),
    FOREIGN KEY (category_id) REFERENCES category (id),
    FOREIGN KEY (user_email) REFERENCES user (email) ON DELETE CASCADE
);

CREATE TABLE review (
    review_id INT NOT NULL AUTO_INCREMENT,
    rating INT,
    comments TEXT,
    date DATE,
    post_id INT, -- Foreign key referencing product_post table
    user_email VARCHAR(60),
    PRIMARY KEY(review_id),
    FOREIGN KEY (post_id) REFERENCES product_post(post_id),
    FOREIGN KEY (user_email) REFERENCES user (email) ON DELETE CASCADE
);

CREATE TABLE images (
    image_id INT NOT NULL AUTO_INCREMENT,
    image_url VARCHAR(2083), -- Adjust the length as needed
    timestamp TIMESTAMP,
    post_id INT, -- Foreign key referencing product_post table
    PRIMARY KEY(image_id),
    FOREIGN KEY (post_id) REFERENCES product_post(post_id)
);

CREATE TABLE user_follows (
    user_1_email VARCHAR(60),
    user_2_email VARCHAR(60),
    date_followed DATE,
    PRIMARY KEY (user_1_email, user_2_email),
    FOREIGN KEY (user_1_email) REFERENCES user(email),
    FOREIGN KEY (user_2_email) REFERENCES user(email)
);
