import mysql from 'mysql2/promise';
import { defaultCategories } from "../../data/categories.js";
import {faker} from '@faker-js/faker'


// Connection to the database
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT
});

async function executeQuery(query, params) {
  try {
    const [results] = await pool.query(query, params);
    return results;
  } catch (error) {
    throw error;
  }
}


async function resetDatabase() {
//   await db.executeQuery("DELETE FROM user");
//   await db.executeQuery("ALTER TABLE user AUTO_INCREMENT=1");
//   await db.executeQuery("DELETE FROM product_post");
//   await db.executeQuery("ALTER TABLE product_post AUTO_INCREMENT=1");
//   await db.executeQuery("DELETE FROM review");
//   await db.executeQuery("ALTER TABLE review AUTO_INCREMENT=1");
//   await db.executeQuery("DELETE FROM category");
//   await db.executeQuery("ALTER TABLE category AUTO_INCREMENT=1");
}

async function fillDatabase() {
  // Prune database before inserting
  await resetDatabase();

//Creating users
const users = Array.from({ length: 100 }, () => [
  faker.internet.email(),
  faker.internet.username(),
  faker.internet.password(),
  faker.date.recent()
]);

console.log(users, 'users');

await executeQuery(
  "INSERT INTO user (email, username, password, date_joined) VALUES ?",
  [users]
);
console.log('Inserted users');

  // Creating Category
  // const categories = defaultCategories.map((c) => [
  //   c.name,
  //   c.description,
  //   // faker.image.urlLoremFlickr(),
  // ]);

  // await db.executeQuery(
  //   "INSERT INTO category (name, description) VALUES ?",
  //   [categories]
  // );

  // console.log('Inserted categories')

  // // Creating Posts and Reviews
  // for (let id = 1; id <= categories.length; id++) {
  //   const numberOfPostsInCategory = getRandomInt(3, 15);

  //   for (let i = 1; i <= numberOfPostsInCategory; i++) {
  //     const randomIndex = getRandomInt(1, 100); // Adjust the range based on the actual number of users

  //     const userEmail = users[randomIndex].email

  //     // Create a product post
  //     const product_post = {
  //       name: faker.lorem.words(),
  //       price: faker.commerce.price(),
  //       description: faker.lorem.paragraph(),
  //       brand: faker.lorem.words(),
  //       date_posted: faker.date.recent(),
  //       userEmail,
  //       categoryId: id,
  //     };

  //     // Insert the product post into the database
  //     const postQuery =
  //       "INSERT INTO product_post (name, price, description, brand, date_posted, userId, category_id) VALUES (?, ?, ?, ?, ?, ?, ?)";
  //     const postParams = [
  //       product_post.name,
  //       product_post.price,
  //       product_post.description,
  //       product_post.brand,
  //       product_post.date_posted,
  //       product_post.userId,
  //       product_post.categoryId,
  //     ];
  //     const [postRecords] = await db.executeQuery(postQuery, postParams);
  //     const { postId } = postRecords;

  //     // Create a review for the product post
  //     const review = {
  //       rating: getRandomInt(1, 5), // Assuming ratings are integers from 1 to 5
  //       comments: faker.lorem.sentence(),
  //       date_created: faker.date.recent(),
  //       postId,
  //       userId,
  //     };

  //     // Insert the review into the database
  //     const reviewQuery =
  //       "INSERT INTO review (rating, comments, date, post_id, user_id) VALUES (?, ?, ?, ?, ?)";
  //     const reviewParams = [
  //       review.rating,
  //       review.comments,
  //       review.date_created,
  //       review.postId,
  //       review.userId,
  //     ];

  //     // const [records] = await db.executeQuery('SELECT LAST_INSERT_ID() as reviewId From review;');
  //     const [records] = await db.executeQuery(reviewQuery, reviewParams);
  //     const { reviewId } = records;

  //     // Insert images for the post
  //     const numberOfImages = getRandomInt(1, 5);
  //     const imageUrls = Array.from({ length: numberOfImages }, () =>
  //       faker.image.imageUrl()
  //     );

  //     for (const imageUrl of imageUrls) {
  //       const imageQuery =
  //         "INSERT INTO images (image_url, timestamp, post_id) VALUES (?, ?, ?)";
  //       const imageParams = [imageUrl, new Date(), postId];
  //       await db.executeQuery(imageQuery, imageParams);
  //     }

  //     // Create user follows relationships
  //     const userFollowsQuery = "INSERT INTO user_follows (user_1_id, user_2_id, date_followed) VALUES (?, ?, ?)";
  //     const userFollowsParams = [
  //       userId,
  //       getRandomInt(1, 100),
  //       faker.date.recent(),
  //     ];
  //     await db.executeQuery(userFollowsQuery, userFollowsParams);
  //   }
  // }

  return "Database filled!";
}

async function getUsers() {
  return await executeQuery('SELECT * FROM user');
}

async function getCategories() {
  // const msg = await fillDatabase()
  // console.log(msg)
  // return await executeQuery('SELECT * FROM category');
}

// product post
async function getProduct_post(post_id){
  // const post => merr nje post (nga post id) bashke me imazhet (ne front i ke dummy)
  // const reviews =? bej nje query qe lexon vetem nga tabela review where postId =? ( await db.executeQuery('SELECT * FROM review wher post_id = ?', post_id);)

  // return { post, avgRating }

}

async function getFriends (){

}

async function getProfileInfo () {

}

async function create_post (newPost) {
 return 'Success'
}


export default {
  getUsers,
  getCategories,
}