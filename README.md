# E-commerce Reviewer Webapp 

## Overview
This project is a web application for managing product listings and reviews, implementing both MongoDB and MySQL databases for different aspects of the system. The architecture consists of a Node.js/Express backend and a React frontend.
This e-commerce system implements a hybrid database approach, utilizing both MongoDB's flexible document storage and MySQL's robust relational capabilities. 


## Backend Architecture
### Core Server
Node.js & Express: Implements the API endpoints for:
- User authentication and management
- Product post operations
- Review handling
- Category management
- Report generation for user activity

### Dual Database Implementation
1. **MongoDB Implementation**
   - Used for document-based data storage with optimized indexing:
     - **User Collection**
       ```javascript
       {
         username: String,  // indexed
         email: String,     // indexed
         password: String   // indexed
       }
       ```
       - Purpose: User authentication and profile management

     - **Category Collection**
       ```javascript
       {
         name: String  // indexed
       }
       ```
       - Purpose: Product categorization

     - **Product Post Collection**
       ```javascript
       {
         user: {
           email: String  // indexed
         },
         // product details
       }
       ```
       - Purpose: Product listing management

     - **Review Collection**
       ```javascript
       {
         user: {
           email: String  // indexed
         },
         product_post: {
           post_id: String  // indexed
         }
         // review content
       }
       ```
       - Purpose: Review system management

2. **MySQL Implementation**
   - Used for structured relational data storage:
     - **Tables Structure**
       ```sql
       CREATE TABLE users (
           id INT PRIMARY KEY AUTO_INCREMENT,
           username VARCHAR(255),
           email VARCHAR(255) UNIQUE,
           password VARCHAR(255)
       );

       CREATE TABLE categories (
           id INT PRIMARY KEY AUTO_INCREMENT,
           name VARCHAR(255) UNIQUE
       );

       CREATE TABLE product_posts (
           id INT PRIMARY KEY AUTO_INCREMENT,
           user_id INT,
           category_id INT,
           FOREIGN KEY (user_id) REFERENCES users(id),
           FOREIGN KEY (category_id) REFERENCES categories(id)
       );

       CREATE TABLE reviews (
           id INT PRIMARY KEY AUTO_INCREMENT,
           user_id INT,
           product_post_id INT,
           FOREIGN KEY (user_id) REFERENCES users(id),
           FOREIGN KEY (product_post_id) REFERENCES product_posts(id)
       );
       ```

### Backend Setup
- **Development mode**
  ```bash
  npm run start-dev
  ```

- **Production mode**
  ```bash
  npm start
  ```

## Frontend Implementation
### Key Features
- User authentication interface
- Product posting and management
- Review system
- Category browsing
- User activity tracking


### Frontend Setup
```bash
npm start
```

## Performance Optimizations
### MongoDB Query Optimization
- **User Operations**
  - Indexed fields for username, email, and password
  - Optimized authentication queries

- **Category Operations**
  - Name index for fast category lookups
  - Efficient category listing

- **Product Management**
  - User email indexing for quick product retrieval
  - Optimized user-specific queries

- **Review System**
  - Dual indexing on user email and product post ID
  - Efficient review retrieval

### MySQL Query Optimization
- **Relational Integrity**
  - Foreign key constraints for data consistency
  - Indexed primary and foreign keys

- **Join Operations**
  - Optimized for multi-table queries
  - Efficient data relationship management

## Report Generation
The system leverages both databases for comprehensive reporting:
- **MongoDB**: Quick access to user activity data through indexes
- **MySQL**: Structured reporting through JOIN operations

## Data Consistency
- Cross-database synchronization mechanisms
- Data integrity checks across both databases
- Consistent user identification across platforms

## Security Considerations
- Password field indexing for authentication
- Email uniqueness enforcement in both databases
- Secure cross-database reference management


