


const getCtrl = (req, res) => {

  res 
    .status(200)
    .send({
      message: "Olá, welcome to the Comments MS!",
      status: 200
    })
  };

  module.exports = getCtrl
