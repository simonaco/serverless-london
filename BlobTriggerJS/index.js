const request = require('request');
module.exports = function(context, myBlob) {
  context.log('Function execution start');
  const options = {
    url: 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize',
    headers: {
      'Content-Type': 'application/octet-stream',
      'Ocp-Apim-Subscription-Key': process.env.ACCESS_KEY
    },
    method: 'POST',
    body: myBlob
  };
  request(options, (err, result) => {
    if (err) {
      context.log('Error' + err);
      context.done();
      return;
    } else {
      context.log('Hello serverless london!! this is interesting');
      context.log(result.body);
      context.done();
    }
  });
};
