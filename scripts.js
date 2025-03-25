const openParcours = document.getElementById("row2box1")
const closeParcours = document.getElementById("closeParcours")
const parcoursPopup = document.getElementById("parcours")

openParcours.addEventListener("click", () => {
    parcoursPopup.classList.add("open")
    parcoursPopup.querySelector('.innertext').scrollTop = 0
})

closeParcours.addEventListener("click", () => {
    parcoursPopup.classList.remove("open")
})

const openExpPro = document.getElementById("row2box2")
const closeExpPro = document.getElementById("closeExpPro")
const expProPopup = document.getElementById("expPro")

openExpPro.addEventListener("click", () => {
    expProPopup.classList.add("open")
    expProPopup.querySelector('.innertext').scrollTop = 0
})

closeExpPro.addEventListener("click", () => {
    expProPopup.classList.remove("open")
})

const openProjet = document.getElementById("row2box3")
const closeProjet = document.getElementById("closeProjet")
const projetPopup = document.getElementById("projet")

openProjet.addEventListener("click", () => {
    projetPopup.classList.add("open")
    projetPopup.querySelector('.innertext').scrollTop = 0
})

closeProjet.addEventListener("click", () => {
    projetPopup.classList.remove("open")
})

const openLoisir = document.getElementById("row1box2")
const closeLoisir = document.getElementById("closeLoisir")
const loisirPopup = document.getElementById("loisir")

openLoisir.addEventListener("click", () => {
    loisirPopup.classList.add("open")
    loisirPopup.querySelector('.innertext').scrollTop = 0
})

closeLoisir.addEventListener("click", () => {
    loisirPopup.classList.remove("open")
})

