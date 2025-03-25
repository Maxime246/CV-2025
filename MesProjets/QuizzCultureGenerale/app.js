const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

let btnValider = document.getElementById("btnValider")
let reponse = {}
let score = 0
let zoneResultat = document.getElementById("zoneResultats")
let divQuestion  = {}
let allRadios = document.querySelectorAll("input[type=radio]")
let preResultat = document.getElementById("preZoneResult")
let postResultat = document.getElementById("postZoneResult")
let btnReset = document.getElementById("reset")


function supprimerCouleur(event){
    const questionNumber = event.target.name.replace('q','')
    const divQuestion = document.getElementById(`divq${questionNumber}`)
    divQuestion.classList.remove("bonneReponse","mauvaiseReponse")
}

allRadios.forEach((radio)=>{
    radio.addEventListener('change',supprimerCouleur)
})

btnValider.addEventListener("click", ()=>{
    try{
        score = 0;
    for(let i=0; i<responses.length;i++){
        reponse = document.querySelector(`input[name="q${i + 1}"]:checked`)
        if(reponse.value===responses[i]){
            score++
            //Ajout des couleurs en fonction de la réponse 
        divQuestion=document.getElementById(`divq${i+1}`)
        if(divQuestion.classList.contains("mauvaiseReponse")){
            divQuestion.classList.remove("mauvaiseReponse")}
        if(!divQuestion.classList.contains("bonneReponse"))
        divQuestion.classList.add("bonneReponse")
        const radios = divQuestion.querySelectorAll("input[type='radio']");
                radios.forEach(radio => {
                    radio.disabled = true; });
    }else{
        divQuestion=document.getElementById(`divq${i+1}`)
        if(divQuestion.classList.contains("bonneReponse")){
            divQuestion.classList.remove("bonneReponse")}
        if(!divQuestion.classList.contains("mauvaiseReponse"))
        divQuestion.classList.add("mauvaiseReponse")
    }}

//Zone de resultats
zoneResultat.innerHTML = "Votre score est de : " + score+ "/" +responses.length
if(score <= 1){
    preResultat.innerHTML = emojis[3] + "Peut mieux faire..." + emojis[3]
     postResultat.innerHTML = "Essayez une autre réponse dans les cases rouges puis validez à nouveau."
}
if(score <=3){
    preResultat.innerHTML = emojis[2] + "Encore un petit effort" + emojis[2]
     postResultat.innerHTML = "Essayez une autre réponse dans les cases rouges puis validez à nouveau."
}
if (score === 4){
    preResultat.innerHTML = emojis[0] + "Bien joué !" + emojis[0]
    postResultat.innerHTML = "Essayez une autre réponse dans les cases rouges puis validez à nouveau."  }

if (score === 5){
    preResultat.innerHTML = emojis[1] + "C'est parfait !!" + emojis[1] 
    postResultat.innerHTML = "Quelle culture !" }


}catch{
    zoneResultat.innerHTML = "Veuillez répondre à toutes les questions !"
}})

btnReset.addEventListener("click",()=>{
    for(let i=0; i<responses.length;i++){
        divQuestion=document.getElementById(`divq${i+1}`)
        if(divQuestion.classList.contains("mauvaiseReponse")){
            divQuestion.classList.remove("mauvaiseReponse")}
        if(divQuestion.classList.contains("bonneReponse"))
        divQuestion.classList.remove("bonneReponse")
        const radios = divQuestion.querySelectorAll("input[type='radio']");
                radios.forEach(radio => {
                    radio.disabled = false;
                    radio.checked = false});

}
preResultat.innerHTML = ""
postResultat.innerHTML = "" 
zoneResultat.innerHTML ="Cliquez sur valider pour voir les résultats"

})

//Annuler le refresh
let form = document.querySelector("form")
    form.addEventListener("submit", (event) => { 
    event.preventDefault()
  })