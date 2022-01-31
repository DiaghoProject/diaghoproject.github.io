//  Coordonnées Y  pour trigger le changement d'onglet actif
let chap1 = document.getElementById("overview").getBoundingClientRect().top + window.scrollY - 120
let chap2 = document.getElementById("screenshots").getBoundingClientRect().top + window.scrollY - 140
let chap3 = document.getElementById("roadmap").getBoundingClientRect().top + window.scrollY - 120
let chap4 = document.getElementById("contact").getBoundingClientRect().top + window.scrollY - 120
let chap5 = document.getElementById("sponsors").getBoundingClientRect().top + window.scrollY - 130

let screenWidth = screen.width
window.addEventListener("resize", () => {
  screenWidth = screen.width
  chap1 = document.getElementById("overview").getBoundingClientRect().top + window.scrollY - 120
  chap2 = document.getElementById("screenshots").getBoundingClientRect().top + window.scrollY - 140
  chap3 = document.getElementById("roadmap").getBoundingClientRect().top + window.scrollY - 120
  chap4 = document.getElementById("contact").getBoundingClientRect().top + window.scrollY - 120
  chap5 = document.getElementById("sponsors").getBoundingClientRect().top + window.scrollY - 130
})

// Décalage horizontal pour centrer l'onglet actif dans la navbar sticky
let xOffset = (screen.width - 180) / 2

//  Onglet actif dans la navbar
window.addEventListener("scroll", () => {
  if (window.scrollY < chap1) {
    document.querySelector(".active-link")?.classList.remove("active-link")
  } else if (window.scrollY > chap1 && window.scrollY < chap2) {
    toggleActiveLink("chap1")
  } else if (window.scrollY > chap2 && window.scrollY < chap3) {
    toggleActiveLink("chap2")
  } else if (window.scrollY > chap3 && window.scrollY < chap4) {
    toggleActiveLink("chap3")
  } else if (window.scrollY > chap4 && window.scrollY < chap5) {
    toggleActiveLink("chap4")
  } else if (window.scrollY > chap5) {
    toggleActiveLink("chap5")
  }
})

function toggleActiveLink(x) {
  if (!document.getElementById(x).classList.contains("active-link")) {
    document.querySelector(".active-link")?.classList.remove("active-link")
    document.getElementById(x).classList.add("active-link")
    document.getElementById("navbar").scrollLeft = document.getElementById(x).offsetLeft - xOffset
  }
}