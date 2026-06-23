const senhafixa = "123";

const middlewareSenha = (req, res, next) => {
    const { senha } = req.headers;

    if (senha !== senhafixa) {
        return res.status(401).json({messagem: "Senha Incorreta!"});
    }

    next();
}

module.exports = {
    middlewareSenha
};