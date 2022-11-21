import { db } from '../db.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';


export const vregister = (req, res) => {
    //Check exisiting user
    const q = "Select * from vendor where v_email=?"
    db.query(q, [req.body.v_email], (err, data) => {
        if (err) return res.json(err);
        if (data.length) {
            alert("User Already exist");
            return res.status(409).json("User Already exist");
    }
        //Hash the Password and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.v_pass, salt);

        const q = "Insert into vendor (`v_name`,`v_contact`,`v_email`,`v_address`,`v_pass`) values(?)"
        const values = [
            req.body.v_name,
            req.body.v_contact,
            req.body.v_email,
            req.body.v_address,
            hash,
        ]
        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            if (data) {
                const vendorName=req.body.v_name;
                console.log(vendorName)
                const mail = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 587,
                    secure: false,
                    auth: {
                        user: "vendorconf7@gmail.com",
                        pass: "jbgbeaxytqnawmfr"
                    }
                });
                mail.sendMail({
                    from: 'vendorconf7@gmail.com',
                    to: req.body.v_email,
                    subject: "Vendor Confirmation",
                    html:"<p>Hi "+vendorName+"</p><p>Thank you for signing up for Emart Vendor</p><p>To get you started, please <a>click here</a> to log in to your account for the first time.</p> <p>If you didn't register, please ignore this message.</p><p>Regards,<br/>The Emart team</p>"
                },(err,data)=>{
                    if(err) throw err
                    if(data) res.send('User Created!! Confirm Through Email to Register')
                })
            }
            // if (data) return res.status(200).json("User Created");
        })
    })

}

export const cregister = (req, res) => {
    //Check exisiting user
    const q = "Select * from customer where c_email=?"
    db.query(q, [req.body.c_email], (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json("User Already exist");
        //Hash the Password and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.c_password, salt);

        const q = "Insert into customer (`c_name`,`c_contact`,`c_email`,`c_address`,`c_password`) values(?)"
        const values = [
            req.body.c_name,
            req.body.c_contact,
            req.body.c_email,
            req.body.c_address,
            hash,
        ]
        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            if (data) return res.status(200).json("User Created");
        })
    })

}

export const vlogin = (req, res) => {
    //Check user
    const q = "select * from vendor where v_email =?";
    db.query(q, [req.body.v_email], (err, data) => {
        if (err) return res.json(err)
        if (data.length === 0) return res.status(404).json("User not found");

        // check password
        const isPasswordCorrect = bcrypt.compareSync(req.body.v_pass, data[0].v_pass)
        if (!isPasswordCorrect) return res.status(400).json("Wrong Email or Password")
        const token = jwt.sign({ v_id: data[0].v_id }, "jwtkey");
        const { v_pass, ...other } = data[0]

        res.cookie("access_token", token, { httpOnly: true }).status(200).json(other)

    })

}

export const clogin = (req, res) => {
    //Check user
    const q = "select * from customer where c_email =?";
    db.query(q, [req.body.c_email], (err, data) => {
        if (err) return res.json(err)
        if (data.length === 0) return res.status(404).json("User not found");

        // check password
        const isPasswordCorrect = bcrypt.compareSync(req.body.c_password, data[0].c_password)
        if (!isPasswordCorrect) return res.status(400).json("Wrong Email or Password")
        const token = jwt.sign({ c_id: data[0].c_id }, "jwtkeyClient");
        const { c_pass, ...other } = data[0]

        res.cookie("access_tokenC", token, { httpOnly: true }).status(200).json(other)

    })

}

export const forgetpassword = (req, res) => {
    //Check user
    const q = "select * from customer where c_email =?";
    db.query(q, [req.body.c_email], (err, data) => {
        if (err) return res.json(err)
        if (data.length === 0) return res.status(404).json("User not found");



        
        // check password
        const isPasswordCorrect = bcrypt.compareSync(req.body.c_password, data[0].c_password)
        if (!isPasswordCorrect) return res.status(400).json("Wrong Email or Password")
        const token = jwt.sign({ c_id: data[0].c_id }, "jwtkeyClient");
        const { c_pass, ...other } = data[0]

        res.cookie("access_tokenC", token, { httpOnly: true }).status(200).json(other)

    })

}

export const vlogout = (req, res) => {
    res.clearCookie("access_token", {
        sameSite: "none",
        secure: true
    }).status(200).json("Logged Out")

}
export const clogout = (req, res) => {
    res.clearCookie("access_tokenC", {
        sameSite: "none",
        secure: true
    }).status(200).json("Logged Out")

}