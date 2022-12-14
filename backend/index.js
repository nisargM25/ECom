import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import multer from 'multer';
import cookieParser from 'cookie-parser';
import productRoutes from './routes/products.js'
import authRoutes from './routes/auth.js'

const app = express();
const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "root",
        database: "ecom"
    }
)

app.use(express.json())
app.use(cors())
app.use(cookieParser())


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../frontend/public/upload')
    },
    filename: function (req, file, cb) {
      
      cb(null, Date.now()+file.originalname)
    }
  })
const upload = multer({ storage })
app.post('/uploads', upload.single('p_image'), function (req, res) {
    const file=req.file;
    res.json(file.filename)
  })


app.use("/api/product",productRoutes)
app.use("/api/auth",authRoutes)


//Aniket
app.get("/api/products", (req, res) => {
  db.query("SELECT*FROM product", (err, rows) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
});

//for getting item by product id
app.get("/api/products/:p_id", (req, res) => {
  const pid = req.params.p_id;
  const query = `SELECT*FROM product WHERE p_id =${pid}`;
  db.query(query, (err, rows) => {
    if (!err) {
      console.log(rows);
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//Add to Cart api
app.post("/api/cart_product/", (req, res) => {
  // console.log(req.body);
  // const data = req.body;
  const query = "Insert into cart(`c_id`,`p_id`) VAlUES (?) ";
  const data = [  
    req.body.c_id,
    req.body.p_id]
  db.query(query, [data], (err, rows) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//for added data in cart get api
app.get("/api/cart_product/cartscreen", (req, res) => {
  const query =
    "SELECT product.p_id, cart.cart_id, product.p_name,product.p_image,product.p_price FROM cart  INNER JOIN product ON cart.p_id=product.p_id";
  db.query(query, (err, rows, fields) => {
    if (!err) {
      console.log(rows);
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//delete api for remove cart
app.delete("/api/cart_product/cartscreen/:cart_id", (req, res) => {
  const cid = req.params.cart_id;

  db.query(`DELETE from cart where cart_id = ${cid}`, (err, rows) => {
    if (!err) {
      //console.log(rows);
      res.send("deleted successfully.");
    } else {
      console.log(err);
    }
  });
});


app.listen(8800, () => {
    console.log("Connected to Backend")
})