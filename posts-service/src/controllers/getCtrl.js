

let status = 200;

const getCtrl = (req, res) => {

  res.status(status).send({
    message: "Olá, bem vindo ao App do Blas!",
    status
  });
};


module.exports = getCtrl