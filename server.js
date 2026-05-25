const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.static(__dirname));

app.get("/video-info", async (req, res) => {

try{

const url = req.query.url;

const options = {
method: 'GET',

url: 'https://cloud-api-hub-youtube-downloader.p.rapidapi.com/video',

params: {
url: url
},

headers: {

'x-rapidapi-key':
'0b9cfec458mshca72184e720a039p1e896cjsne402a93f51bc',

'x-rapidapi-host':
'cloud-api-hub-youtube-downloader.p.rapidapi.com'

}

};

const response = await axios.request(options);

const data = response.data;

res.json({

status:true,

title:data.title,

thumbnail:data.thumbnail,

channel:data.author,

views:data.views,

download:data.formats[0].url

});

}catch(err){

res.json({
status:false,
message:"Video Fetch Error"
});

}

});

app.listen(3000, ()=>{
console.log("Server Running on http://localhost:3000");
});