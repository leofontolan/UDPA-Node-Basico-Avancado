require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
    app.emit("ready");
  })
  .catch((err) => console.log(err));

const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

const routes = require("./routes");
const path = require("path");

const helmet = require("helmet");
//const csrf = require("csurf");

const { middlewareGlobal, checkCsfrError } = require('./src/middleware/middleware');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));
app.use(helmet());

const sessionOptions = session({
  secret: "khfdfjldsnfnfdifidasfidasofuisdoafjdnkfheuiasmdfsd",
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
  httpOnly: true,
});

app.use(sessionOptions);
app.use(flash());

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

//CSRF
//app.use(csrf)


//MIDDLEWARE
app.use(middlewareGlobal);
app.use(checkCsfrError);
app.use(routes);

app.on("ready", () => {
  app.listen(3000, () => {
    console.log("Server started on port 3000");
  });
});
