const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

//Fonction pour aller chercher la catégorie dans la liste ci-dessus en fonction de l'IMC calculé

function getCategorie (value){
  for (let categorie of BMIData){
    //la ligne suivante permet de verifier si le bloc de la liste est un "tableau" (plage de valeurs) 
    if (Array.isArray(categorie.range)){
      if (value >= categorie.range[0] && value < categorie.range[1]){
        return categorie
    }} else {if (value >= categorie.range){
      return categorie
    }
}}}

//Recuperer les elements html
let inputTaile = document.getElementById("inputTaille")
let inputPoids = document.getElementById("inputPoids")
let btnCalculImc = document.getElementById("btnCalculImc")
let affichageImc = document.getElementById("affichageImc")
let affichageCategorie = document.getElementById("affichageCategorie")
let erreurMessage = document.getElementById("erreurMessage")

// Réaliser le calcul de l'IMC
btnCalculImc.addEventListener("click", ()=>{
 
    // Si une valeur est vide, alors message d'erreur
  if (inputTaile.value ==="" || inputPoids.value ===""){
    erreurMessage.innerHTML = "Veuillez saisir votre poids et votre taille."
    affichageImc.innerHTML = ""
    affichageCategorie.innerHTML = ""

  }else{
    erreurMessage.innerHTML=""
    let tailleCm = parseFloat(inputTaile.value)
    let poids = parseFloat(inputPoids.value)
    let tailleM = tailleCm /100
    let imc = poids/(tailleM * tailleM)
    let categorie = getCategorie (imc)

// Afficher l'IMC & la categorie
affichageImc.innerHTML = imc.toFixed(2)
affichageCategorie.innerHTML = categorie.name
affichageImc.style.color = categorie.color;
}})

// Annuler le refresh de la page au Submit
let form = document.querySelector("form")
    form.addEventListener("submit", (event) => { 
    event.preventDefault()
  })

// Recuperer les input
