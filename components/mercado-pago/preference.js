/*
Mercado Pago Checkbos Pro
Create Preference
*/

const mercadopago = require('mercadopago');
const dotenv = require('dotenv');
const payerData = require('./payer-data');

dotenv.config();
const accessToken = process.env.TOKEN;
const url = `http://${process.env.HOST}:${process.env.HOST}`;

function createPreference() {
  return new Promise((resolve, reject) => {
    const preference = {
      statement_descriptor: settings.statement_descriptor,
      items: data.items,
      payer: payerData,
      back_urls: {
        success: url + '/success',
        failure: url + '/failure',
        pending: url + '/pending',
      },
      auto_return: 'approved',
    };

    mercadopago.configurations.setAccessToken(Accesstoken);

    mercadopago.preferences
      .create(preference)
      .then((response) => {
        resolve(response.body.id);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

module.exports = {
  createPreference,
};
