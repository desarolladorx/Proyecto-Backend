
const filterMiddleware = async (req, res, next) => {
    const personaje = req.body;
    if (personaje.edad > 9)  return next(); 
        res.status(400).json({message: 'El personaje es demasiado pequeño'})
   
}

module.exports = filterMiddleware;