const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const UserModel = require('./model/User');


const app = express();
app.use(express.json());
app.use(cors({
    origin: ['https://localhost:27017'],
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use(cookieParser());

mongoose.connect('mongodb://localhost:27017/auth-vik');

// mongoose.connect('mongodb://127.0.0.1:27017/test')


app.post('/register', (req, res) => {
    const {fullName, email, password} = req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
        UserModel.create({fullName, email, password: hash})
        .then(user => res.json({status: "Success"}))
        .catch(err => res.json(err))

    }).catch(err => res.json(err))
})


app.post('/login', (req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then((user) => {
        if(user){
            bcrypt.compare(password, user.password, (err, response) => {
                if (response) {
                    const token = jwt.sign({email: user.email, role: user.role},
                        "jwt-secret-key", {expiresIn: '1d'})
                    res.cookie('token', token)
                    return res.json("Success")
                }else {
                    return res.json ("The password is incorrect")
                }
            })
        }else {
            return res.json ("No record existed")
        }
    })
})

app.listen(3001, () => {
    console.log("Server is running")
})
