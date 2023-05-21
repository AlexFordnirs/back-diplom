const express = require('express');
const mongoose = require('mongoose');
const testRoutes = require('./routes/test-routes');
const userRoutes = require('./routes/user-routes');
const adminRoutes = require('./routes/admin-routes');
const adminMaterials = require('./routes/material-routes');
require('dotenv').config()
const app = express();
app.use(express.json());

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
app.use(adminMaterials);