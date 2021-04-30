const fs = require('fs');

function saveNotification(data) {
  return new Promise((resolve, reject) => {
    const dataJson = JSON.stringify(data) + '\r\n';

    try {
      fs.appendFile('notifications.json', dataJson, (err) => {
        if (err) throw err;
        console.log('Data appended to file!', dataJson);
      });
      resolve(dataJson);
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });
}

module.exports = saveNotification;
