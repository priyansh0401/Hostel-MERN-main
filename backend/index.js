const express = require('express')
const connectDB = require('./utils/conn')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000
connectDB();

app.use(cors());

// app.use(cors({
//   credentials: true,
//   origin: "https://hostel-mern-main-client.vercel.app/",
// }));




// app.use(cors({
//   origin: ["*"], // Allow all origins (default when no options are passed)
// }));

// Access-Control-Allow-Origin: *


app.use(express.json({ extended: false }));

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/student', require('./routes/studentRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/complaint', require('./routes/complaintRoutes'));
app.use('/api/invoice', require('./routes/invoiceRoutes'));
app.use('/api/messoff', require('./routes/messoffRoutes'));
app.use('/api/request', require('./routes/requestRoutes'));
app.use('/api/attendance', require('./routes/attendanceRoutes'));
app.use('/api/suggestion', require('./routes/suggestionRoutes'));



app.get("/",(req,res) => {
  res.status(200).send("Hello!!!!");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;


// connectDB().then(() => {
//   app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
//   });
// }).catch(err => {
//   console.error('Database connection failed:', err);
// });
