var axios = require('axios');
const router = require ('express').Router();


var getEmotions = function(trackData){
    
    axios.post(
        'https://apiv2.indico.io/emotion',
        {
            'api_key': process.env.EMOTION_API_KEY,
            'data': trackdata.entry
        }
    ).then(function (data) { 
        console.log(data);
        trackdata.score = data;
        console.log(trackdata);
    });
};
    
module.exports = {getEmotions};
