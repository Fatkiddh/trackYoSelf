const axios = require('axios');

module.exports = {
analyzeEmotion: function(trackData) {
  let finalPayload = trackData;

  axios.post(
    'https://apiv2.indico.io/emotion',
    JSON.stringify({
      'api_key': process.env.INDICO_API_KEY,
      'data': finalPayload.entry
    })
  ).then(function (res) {
    console.log(res.data.results);
    finalPayload.score = res.data.results;
    console.log(finalPayload);
  })
    .then() {
    return finalPayload;
  }
};
}