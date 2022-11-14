import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import multer from 'multer';
import cookieParser from 'cookie-parser';
import productRoutes from './routes/products.js'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'

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
app.use("/api/users",userRoutes)
app.use("/api/auth",authRoutes)



app.put("/updateProduct/:id",(req, res) => {
    const pid = parseInt(req.params.id);
    const q = "Update product set `p_name`=?,`p_desc`=?,`p_price`=?,`p_image`=? where p_id=?";
    const values = [
        
        req.body.p_name,
        req.body.p_desc,
        req.body.p_price,
        req.body.cat_id,
        req.body.p_image
    ]
    db.query(q, [...values,pid] , (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json("Product has been Updated successfully!")
    })
})


//Aniket
app.get("/api/products", (req, res) => {
  db.query("SELECT*FROM product", (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
});

//for getting item by product id
app.get("/api/products/:p_id", (req, res) => {
  const pid = req.params.p_id;
  const query = `SELECT*FROM product WHERE p_id =${pid}`;
  db.query(query, (err, rows, fields) => {
    if (!err) {
      console.log(rows);
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//post api
app.post("/api/products/", (req, res) => {
  console.log("post api is working");
  const data = req.body;
  const query = "Insert into cart(`cart_id`,`c_id`,`p_id`) VAlUES (?) ";
  db.query(query, data, (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});


app.listen(8800, () => {
    console.log("Connected to Backend")
})