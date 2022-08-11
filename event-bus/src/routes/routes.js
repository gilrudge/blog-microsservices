const express = require('express');
const router = express.Router();
const axios = require('axios');

let status = 200;

router.get('/', (req, res) => {
  res.status(status).send({
    message: "Olá, bem vindo ao event bus!",
    status
  });
});

router.post('/events', (req, res) => {

  const event = req.body

  axios.post('http://localhost:4000/events', event)
    .then(() => {
      console.log(event.data);
      console.log('evento enviado para ms 4000');
    })
    .catch(console.log);
  
  axios.post('http://localhost:4001/events', event)
    .then(() => {
      console.log(event.data);
      console.log('evento enviado para ms 4001');
    })
    .catch(console.log);

  axios.post('http://localhost:4002/events', event)
    .then(() => {
      console.log(event.data);
      console.log('evento enviado para ms 4002');
    })
    .catch(console.log);

    res.json(event)
});

module.exports = router


// {
//   "type": "PostCreated",
//   "data": {
//     "id": "1",
//     "title": "Meu Primeiro Post",
//     "comments": []
//   }
// }