

const chequearCredenciales = async (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(401).send({ message: "No se ingresó un email o contraseña válido" })
    }
    next()
}

const verificarToken = (req, res, next) => {
    const token = req.header("Authorization")
    if (token == undefined) {
        console.log("el token no existe")
        throw { code: 404, message: "No se encontró token" }
    }
    next()
}


module.exports = { chequearCredenciales, verificarToken }