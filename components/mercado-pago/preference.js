/*
Mercado Pago Checkbos Pro
Create Preference
*/

const mercadopago = require('mercadopago');
const dotenv = require('dotenv');
const payerData = require('./payer-data');

dotenv.config();
const accessToken = process.env.TOKEN;
const url = `http://${process.env.HOST}:${process.env.PORT}`;

/*
mercadopago.configure({
    platform_id: 'PLATFORM_ID',
    integrator_id: 'INTEGRATOR_ID',
    corporation_id: 'CORPORATION_ID'
});
*/

function createPreference(items) {
  return new Promise((resolve, reject) => {
    const preference = {
      items: items,
      payer: payerData,
      //notification_url: url + '/notifications',
      payment_methods: {
        excluded_payment_methods: [
          {
            id: 'amex',
          },
        ],
        excluded_payment_types: [
          {
            id: 'atm',
          },
        ],
        installments: 6,
      },
      external_reference: "stupacode@gmail.com",
      back_urls: {
        success: url + '/success',
        failure: url + '/failure',
        pending: url + '/pending',
      },
      auto_return: 'approved',
    };

    //mercadopago.configurations.setAccessToken(accessToken);   // is used in .configure
    mercadopago.configure({
      access_token: accessToken,
      integrator_id: 'dev_24c65fb163bf11ea96500242ac130004',
    });

    mercadopago.preferences
      .create(preference)
      .then((response) => {
        const mpResponse = {
          init_point: response.body.init_point,
          id: response.body.id
        };
        resolve(mpResponse);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

module.exports = {
  createPreference,
};
