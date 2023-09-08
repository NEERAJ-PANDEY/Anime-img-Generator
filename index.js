const btnEl = document.getElementById("btn"); // select the button element from the DOM
const animeImgEl = document.querySelector(".anime-img"); // select the anime image element from the DOM

btnEl.addEventListener("click", async function () {
  try {
    btnEl.disabled = true; // disable the button
    btnEl.innerText = "Loading..."; // change the button text to loading
    const response = await fetch("https://catboys.com/api/img"); // fetch the image from the API
    const data = await response.json(); // convert the response to JSON
    animeImgEl.src = data.url; // set the image source to the image URL
    btnEl.disabled = false; // enable the button
    btnEl.innerText = "Get new image"; // change the button text to get new image
  } catch (error) {
    console.log(error); // log the error to the console
    btnEl.disabled = false; // enable the button 
    btnEl.innerText = "Get new image"; // change the button text to get new image
  }
});