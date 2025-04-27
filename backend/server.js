const express = require("express"); //express

const app = express(); // app to setup routes
const logger = require("./middleware/logger.js");
const dotenv = require("dotenv"); // to load environment variables
dotenv.config();
const bodyParser = require("body-parser"); // body-parser to parse json data
const cors = require("cors"); // to allow frontend requuest
const Connectdb = require("./config/db");
app.use(logger); // Top pe bhai!
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json()); // or app.use(bodyParser.json())

Connectdb(); // connect to db mongoose
const userRoutes = require("./routes/userRoute");
const studentRoute = require("./routes/studentRoute");
const bookRoute = require("./routes/bookRoute.js");
const registerRouter = require("./routes/registerRouter.js");
const loginRoute=require("./routes/loginRoute.js");
const logout=require("./controllers/logoutController.js")
const borrowRoute=require("./routes/borrowRoute.js")
const authmiddleware=require("./middleware/authmiddleware.js");
app.use("/student",authmiddleware, studentRoute);
app.use("/book",authmiddleware,bookRoute);
app.use("/register", registerRouter);
app.use("/login",loginRoute);
app.use("/borrow",borrowRoute);
// app.get("/logout",logout);
//app.use('/user',userRoutes);
app.use(cors());
app.use(express.static("public")); // Serving static images

app.listen(process.env.PORT, () => {
  // basic commands to listen at port
  console.log(`server is running at ${process.env.PORT}`);
});
// app.get('/',(req,res)=>{
//     res.status(200).json({ message: 'VishwajeetManhas' });

// });

app.use(express.static("public"));
