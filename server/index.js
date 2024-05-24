const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

// mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.listen(3001, () => {
    console.log("Server is running")
})
