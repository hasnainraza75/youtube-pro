async function fetchVideo(){

let url = document.getElementById("url").value;

document.getElementById("loader").innerHTML =
"<h3 style='margin-top:20px'>Loading Video...</h3>";

try{

let response = await fetch(
`/video-info?url=${encodeURIComponent(url)}`
);

let data = await response.json();

if(data.status == false){

document.getElementById("loader").innerHTML =
data.message;

return;

}

document.getElementById("loader").innerHTML = "";

document.getElementById("result").innerHTML = `

<div class="video-card">

<img src="${data.thumbnail}">

<h2>${data.title}</h2>

<p>Channel : ${data.channel}</p>

<p>Views : ${data.views}</p>

<video controls>
<source src="${data.download}">
</video>

<a class="download-btn"
href="${data.download}"
target="_blank">
Download Video
</a>

</div>

`;

}catch(err){

document.getElementById("loader").innerHTML =
"Server Error";

}

}