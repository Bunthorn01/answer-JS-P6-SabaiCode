const fs = require('fs');

function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function writeFileAsync(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, 'utf8', err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

readFileAsync('input.txt')
  .then(data => {
    console.log('File content:', data);
    return data.toUpperCase();
  })
  .then(uppercasedData => {
    console.log('Upper cased content:', uppercasedData);
    return writeFileAsync('output.txt', uppercasedData);
  })
  .then(() => {
    console.log('Write operation completed successfully');
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });
