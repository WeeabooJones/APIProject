let searchButton = document.querySelector("#search")

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})


//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
  let userInput = document.querySelector("#input").value
  let response = await fetch(`https://api.jikan.moe/v3/search/anime?q=${userInput}&page=1`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}


//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){
  document.querySelector("#content").innerHTML = `

<div class="card" style="width: 18rem;">  
<img src="${data.results[0].image_url}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${data.results[0].title}</p>
<p class="card-text">${data.results[0].synopsis}</p>
   <button type="button" class="btn btn-outline-primary"><a href="${data.results[0].url}" class="cbutton">Click Here</a></button> 
  </div>
</div>

<div class="card" style="width: 18rem;">
<img src="${data.results[1].image_url}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${data.results[1].title}</p>
    <p class="card-text">${data.results[1].synopsis}</p>
<button type="button" class="btn btn-outline-primary"><a href="${data.results[1].url}" class="cbutton">Click Here</a></button> 
  </div>
</div>

<div class="card" style="width: 18rem;">
<img src="${data.results[2].image_url}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${data.results[2].title}</p>
<p class="card-text">${data.results[2].synopsis}</p>
<button type="button" class="btn btn-outline-primary"><a href="${data.results[2].url}" class="cbutton">Click Here</a></button> 
  </div>
</div>

<div class="card" style="width: 18rem;">
<img src="${data.results[3].image_url}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${data.results[3].title}</p>
<p class="card-text">${data.results[3].synopsis}</p>
<button type="button" class="btn btn-outline-primary"><a href="${data.results[3].url}" class="cbutton">Click Here</a></button> 
  </div>
</div>

<div class="card" style="width: 18rem;">
<img src="${data.results[4].image_url}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${data.results[4].title}</p>
<p class="card-text">${data.results[4].synopsis}</p>
<button type="button" class="btn btn-outline-primary"><a href="${data.results[4].url}" class="cbutton">Click Here</a></button> 
  </div>
</div>

<div class="card" style="width: 18rem;">
<img src="${data.results[5].image_url}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${data.results[5].title}</p>
<p class="card-text">${data.results[5].synopsis}</p>
<button type="button" class="btn btn-outline-primary"><a href="${data.results[5].url}" class="cbutton">Click Here</a></button> 
  </div>
</div>

<div class="card" style="width: 18rem;">
<img src="${data.results[6].image_url}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${data.results[6].title}</p>
<p class="card-text">${data.results[6].synopsis}</p>
<button type="button" class="btn btn-outline-primary"><a href="${data.results[6].url}" class="cbutton">Click Here</a></button> 
  </div>
</div>

<div class="card" style="width: 18rem;">
<img src="${data.results[7].image_url}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${data.results[7].title}</p>
<p class="card-text">${data.results[7].synopsis}</p>
<button type="button" class="btn btn-outline-primary"><a href="${data.results[7].url}" class="cbutton">Click Here</a></button> 
  </div>
</div>


`

}

