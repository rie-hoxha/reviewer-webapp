import express, {urlencoded, json} from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv'
import mysqlServices from './services/mysql/services.js'

dotenv.config()
const app = express();

// Using MySql services by default
let services = mysqlServices
app.use(urlencoded({ extended: true }))
app.use(json())


const port = 8080;

// Middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, User_id");
  next();
});



app.get('/users', async (req, res) => {
  try {
    const users = await services.getUsers();
    res.status(200).send({ message: 'Success', data: users });
  } catch (err) {
    console.error('Error retrieving users:', err);
    res.status(500).send({ error: 'Internal server error' });
  }
});


// // Temporary storage for posts
// let posts = [];

// app.get('/api/categories', async (req, res) => {
//   // res.json(defaultCategories);
//   try {
//     const data = await services.getCategories();
//     res.status(200).send({
//       message: 'Success', data
//     });
//   } catch (err) {
//     res.status(500).send({ error: err });
//   }
// });

// Route to handle post creation

// Route to handle product post creation
app.post('/api/posts', async (req, res) => {
    const newPost = req.body;
  
    try {
      // await create_post(newPost)
      // Insert a new product post into the MySQL database
      // const [result] = await pool.execute(
      //   'INSERT INTO product_post (name, price, description, brand, date_posted) VALUES (?, ?, ?, ?, ?)',
      //   [newPost.title, newPost.price, newPost.description, newPost.brand, new Date()]
      // );
  
      // const postId = result.insertId;
  
      // Insert image URL into the images table
      // await pool.execute('INSERT INTO images (image_url, timestamp) VALUES (?, ?)', [newPost.image, new Date()]);
  
      // Additional logic for handling other data (reviews, etc.) goes here
  
      // res.status(201).json({ postId });
    } catch (error) {
      console.error('Error creating product post:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
