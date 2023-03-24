// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
let searchBtn = document.getElementById("submitSearch")
let searchInp = document.getElementById("searchWord")
let img = document.getElementById("img")
let feedbackPara = document.createElement("p")
let imgCont = document.getElementById("imageContainer")
const apiKey = "H4hIBib8Gmpe3pu3Gvix4vb5bvLS79bq";

// Exercise 2 Section
searchBtn.addEventListener("click", imgFetch);

function imgFetch(){
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${searchInp.value}`)
    .then((response) => {
        const result = response.json();
        return result
    })
    .then((object) => {
        console.log(object.data.images.original.url)
        img.src = object.data.images.original.url 
        searchInp.value = ""
        feedbackPara.textContent = ""
    })
    .catch((err) => {
        console.error(err)
        feedbackPara.textContent = err
        imgCont.appendChild(feedbackPara);
        img.src = ""
    })
}
