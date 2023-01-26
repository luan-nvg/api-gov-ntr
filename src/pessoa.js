const express = require('express');
const { request } = require('./app');
const router = express.Router();
const axios = require('axios');
// const app = express();
// const {createProxyMiddleware}  = require('http-proxy-middleware'); 

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Pessoa Express API",
        version: "0.0.2"
    });
});

router.post('/', async function (req, res, next) {
    const data = req.body
    const headers = req.headers
    console.log(headers);
    const response = await axios
    .post(data.url, data.info, {headers:data.headers})
    .then(function (response) {
      return {
        data: 
        response.data,
        status: response.status,
      };
    })
    .catch(function (error) {
      return error;
    });
    res.status(200).send(response);
});
// const apiProxy = createProxyMiddleware ('/', { target: 'https://mtr.meioambiente.mg.gov.br/api/gettoken'});
// app.use('/', router.get('/', apiProxy)); 

module.exports = router; 