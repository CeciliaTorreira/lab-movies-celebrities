const router = require("express").Router();


//* REQUIRE AMBOS ARCHIVOS DE RUTAS DE CELEBRITIES Y MOVIES


const celebritiesRouter = require("./celebrities.routes.js")
router.use("/celebrities", celebritiesRouter)


const moviesRouter = require("./movies.routes.js")
router.use("/movies", moviesRouter)


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
