setInterval(() => {
    var spantop = document.querySelector("#spantop")
    var spanbottom = document.querySelector("#spanbottom")
    var number = document.querySelector("#Number")
    var valor = Math.floor(Math.random() * 3) + 1
    var valorNumber = Math.floor(Math.random() * 9) + 1


    if (valor == 2) {
        spantop.classList.add("fab", "fa-viacoin")
        spanbottom.classList.add("fab", "fa-viacoin")
        number.innerHTML = valorNumber
        spantop.classList.remove("fa-ups", "fas", "fa-heart")
        spanbottom.classList.remove("fa-ups", "fas", "fa-heart")
        spanbottom.style.color = ""
        spantop.style.color = ""

    } else if (valor == 3) {
        spantop.classList.add("fab", "fa-ups")
        spanbottom.classList.add("fab", "fa-ups")
        number.innerHTML = valorNumber
        spantop.classList.remove("fa-viacoin", "fas", "fa-heart")
        spanbottom.classList.remove("fa-viacoin", "fas", "fa-heart")
        spanbottom.style.color = ""
        spantop.style.color = ""

    } else if (valor == 1) {
        spantop.classList.add("fas", "fa-heart")
        spantop.style.color = "red"
        spanbottom.classList.add("fas", "fa-heart")
        number.innerHTML = valorNumber
        spanbottom.style.color = "red"
        spantop.classList.remove("fa-viacoin", "fab", "fa-ups")
        spanbottom.classList.remove("fa-viacoin", "fab", "fa-ups")


    }
}, 2000);