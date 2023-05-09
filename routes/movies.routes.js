const Movie = require("../models/Movie.model.js");

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
    //  res.redirect("/movies/list") // No creada todavía
     })
    .catch((error)=>{
      next(error)
    })
  
  })






module.exports = router;