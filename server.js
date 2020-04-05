require("dotenv").config();

const express = require("express");
const { join } = require("path");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();
const exphbs = require("express-handlebars");
const db = require("./models");
const Handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess
} = require("@handlebars/allow-prototype-access");
const htmlRouter = require("./routes/html-routes");
// const apiroutes = require("./routes/api-routes");

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan("dev"));
app.use(helmet());
app.use(express.static(join(__dirname, "public")));

app.get("/auth_config.json", (req, res) => {
  res.sendFile(join(__dirname, "auth_config.json"));
});

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(Handlebars)
  })
);
app.set("view engine", "handlebars");

// app.get("/*", (_, res) => {
//   res.sendFile(join(__dirname, "index.html"));
// });

process.on("SIGINT", function() {
  process.exit();
});

// app.use(apiroutes);
app.use(htmlRouter);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
  

module.exports = app;