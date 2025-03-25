// API ENDPOINT : `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}`

let form = document.querySelector("form")
let input = document.querySelector("input")
let errorMsg = document.querySelector(".error-msg")
let loader = document.querySelector(".loader")
let resultDisplay = document.querySelector(".results-display")

form.addEventListener("submit",handleSubmit)
function handleSubmit(e){
e.preventDefault()

if(input.value === ""){
    errorMsg.textContent = "Woops, veuillez saisir quelque chose"
    return
} else {
    errorMsg.textContent = ""
    loader.style.display ="flex"
    resultDisplay.textContent =""
    wikiApiCall(input.value)
}}

async function wikiApiCall(searchInput){
    try{
        const reponse = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}`)
        if(!reponse.ok){
            new Error(`${reponse.status}`)
        }
    
    const data = await reponse.json()
    createCards(data.query.search)
}catch(error){
     errorMsg.textContent = `${error}`
    loader.style.display ="none"

}
}

function createCards (data){
    data.forEach(el=>{
        const url = `https://en.wikipedia.org/?curid=${el.pageid}`
        const card = document.createElement("div")
        card.className="result-item"
        card.innerHTML=`
        <h3 class="result-title">
        <a href=${url} target="_blank">${el.title}</a>
        </h3>
        <a href=${url} class="result-link" target="_blank">${url}</a>
        <span class="result-snippet">${el.snippet}</span>
        <br>
        `
    resultDisplay.appendChild(card)
    })
     loader.style.display ="none"
}