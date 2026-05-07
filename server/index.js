const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const UserModel = require('./schema/User');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello from the MERN Server!" });
});

//Create New Plane Spotting Entry
app.post('/api/newplane', async (req, res) => {
  try {
    console.log(req.body);

    const user = new UserModel({
      planetype: req.body.planetype,
      location: req.body.location,
      date: req.body.date,
    });

    await user.save();

    res.status(201).json({
      message: "Plane spotting entry saved!",
      data: user,
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: err.message,
    });
  }
});

//Database Connection
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.log("DB Connection Error:", err);
  });


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();
// const UserModel = require('./user');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // The "Hello World" Route
// app.get('/api/hello', (req, res) => {
//   res.json({ message: "Hello from the MERN Server!" });
// });

// app.post('/api/newplane', (req, res) => {
//   console.log(req.body.body)

//   let user = new UserModel({
//     planetype: req.body.body.planetype,
//     location: req.body.body.location,
//     date: Date.parse(req.body.body.date),
//     })
    

//   res.send("finished")
// })

// // Database Connection
// const PORT = process.env.PORT || 5000;

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB Connected");
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   })
//   .catch(err => console.log("DB Connection Error:", err));
