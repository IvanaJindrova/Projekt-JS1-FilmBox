//1. + 2.úkol -> porozumění projektu -> porozuměno

//3.úkol
const menuTlacitko = document.querySelector("#menu-tlacitko")
const menuPolozky = document.querySelector("#menu-polozky")


menuTlacitko.addEventListener("click", () => {
    if(!menuPolozky.classList.contains("show")) {
        menuPolozky.classList.add("show")
    } else {
        menuPolozky.classList.remove("show")
    }
})


//4.úkol - v souboru seznam.js + BONUS - přidání Hunger Games 

