const Celebrity = require("../models/Celebrity.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here


//* GET "/celebrities/create" => Renderiza la vista con el formulario para añadir nuevas celebrities

router.get("/create", (req, res, next)=>{

  res.render("celebrities/new-celebrity.hbs")


})

//* POST "/celebrities/create" => Recibe información del usuario para crear una nueva celebridad y añadirla a la base de datos

router.post("/create", (req, res, next)=>{
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase

  })
  .then(()=>{
   console.log("Nueva celebridad añadida")
   res.redirect("/celebrities/celebrities")
   })
  .catch((error)=>{
    next(error)
  })

})


//* GET "/celebrities/celebrities" => Renderiza la vista con la lista de celebrities

router.get("/celebrities", (req, res, next)=>{
    Celebrity.find()
    .then((allCelebrities) =>{
      res.render("celebrities/celebrities.hbs",{
        allCelebrities: allCelebrities
      })
    })
    .catch((error)=>{
        next(error)
    })
})








module.exports = router;