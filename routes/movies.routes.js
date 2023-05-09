const Movie = require("../models/Movie.model.js");
const Celebrity = require("../models/Celebrity.model.js")

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here

//* GET "/movies/create" => Renderiza la vista con el formulario para añadir películas

router.get("/create", (req, res, next)=>{
Celebrity.find()
.then((allCelebrities)=>{
    res.render("movies/new-movie.hbs", {
        allCelebrities: allCelebrities
    })
})
  .catch((error)=>{
    next(error)
  })

})


//* POST "/movies/create" => Recibe la información del usuario para crear una nueva película en la base de datos

router.post("/create", (req, res, next)=>{
    Movie.create({
     title: req.body.title,
     genre: req.body.genre,
     plot: req.body.plot,
     cast: req.body.cast

    })
    .then(()=>{
     console.log("Nueva película añadida")
    res.redirect("/movies/movies") 
     })
    .catch((error)=>{
      next(error)
    })
  
  })

//* GET "/movies/movies" => Renderiza la vista con la lista de todas las películas

router.get("/movies", (req, res, next)=>{
    Movie.find()
    .then((allMovies)=>{
        res.render("movies/movies.hbs", {
            allMovies: allMovies
        })
    })
    .catch((error)=>{
        next(error)
    })
})



//* GET "/movies/:id" => Renderiza la vista individual de una película con sus detalles

router.get("/:id", (req, res, next)=>{

    Movie.findById(req.params.id)
    .populate("cast")
    .then((oneMovie) => {
        res.render("movies/movie-details.hbs", {
          oneMovie: oneMovie
        })
    })
    .catch((error) => {
        next(error)
    })
})




module.exports = router;