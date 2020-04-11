require("dotenv").config();

const express = require("express");
const { join } = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const flash = require("connect-flash");
const userInViews = require("./config/middleware/userInViews");
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
const exphbs = require("express-handlebars");
const db = require("./models");
const Handlebars = require("handlebars");

const apiRoutes = require("./routes/api-routes");



const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const htmlRouter = require("./routes/html-routes");
// const apiroutes = require("./routes/api-routes");
// Configure Passport to use Auth0
const strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.APP_SESSION_SECRET,
    callbackURL:
      process.env.AUTH0_CALLBACK_URL || "http://localhost:8080/callback",
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
    console.log(accessToken, refreshToken, extraParams, profile, done);
    // callback get route
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  }
);

const PORT = process.env.PORT || 8080;
// using the variable above to access the Auth0 authentication to dev tenant.
passport.use(strategy);

// You can use this section to keep a smaller payload
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    helpers: {
      ifEquals: function (a, b, options) {
        if (a === b) {
          return options.fn(this);
        }
        return options.inverse(this);
      }
    }
  })
);
app.set("view engine", "handlebars");

app.use(logger("dev"));
app.use(cookieParser());

// config express-session
var sess = {
  secret: "random buncha shit",
  cookie: {},
  resave: false,
  saveUninitialized: true,
};

if (app.get("env") === "production") {
  // If you are using a hosting provider which uses a proxy (eg. Heroku),
  // comment in the following app.set configuration command
  
  // Trust first proxy, to prevent "Unable to verify authorization request state."
  // errors with passport-auth0.
  // Ref: https://github.com/auth0/passport-auth0/issues/70#issuecomment-480771614
  // Ref: https://www.npmjs.com/package/express-session#cookiesecure
  app.set("trust proxy", 1);

  sess.cookie.secure = true; // serve secure cookies, requires https
}

app.use(session(sess));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(join(__dirname, "public")));

app.use(flash());

// Handle auth failure error messages
app.use(function (req, res, next) {
  if (req && req.query && req.query.error) {
    req.flash("error", req.query.error);
  }
  if (req && req.query && req.query.error_description) {
    req.flash("error_description", req.query.error_description);
  }
  next();
});

app.use(userInViews());
app.use("/", authRouter);
app.use("/", usersRouter);

app.use(apiRoutes);
app.use(htmlRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Development error handler
// Will print stacktrace
if (app.get("env") === "development") {
  // eslint-disable-next-line no-unused-vars
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err,
    });
  });
}

db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});

module.exports = app;
