const express = require('express');
const mongoose = require('mongoose');
const testRoutes = require('./routes/test-routes');
const userRoutes = require('./routes/user-routes');
const adminRoutes = require('./routes/admin-routes');
const app = express();
require('dotenv').config();
app.use(express.json());

const PORT = 3000;
const URL = "mongodb+srv://shabrat2015:3obxL7gSeClOPK8Y@cluster0.28zan3b.mongodb.net/english_tests?retryWrites=true&w=majority";


mongoose
    .connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => console.log('Connected to MongoDB'))
    .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(process.env.PORT, (err) => {
    err ? console.log(err) : console.log(`listening port ${process.env.PORT}`);
});

app.use(testRoutes);
app.use(userRoutes);
app.use(adminRoutes);