$(function () {
    gombok()
    $("#konzolra").on("click", konzolra)
})
const szamok = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let bevittSzamok = [];
let db = 0

function gombok() {
    szamok.sort(() => (Math.random() > .5) ? 1 : -1);
    for (let index = 0; index < szamok.length; index++) {
        $("#pinpanel").append(`<div class="gomb" id="${szamok[index]}"><p>${szamok[index]}</p></div>`)
    }

    //$("#utolso").append(`<div class="gomb" id="${szamok[9]}"><p>${szamok[9]}</p></div>`)

    $("#ujra").on("click", ujra)

    $(".gomb").on("click", function () {
        //console.log(this.id);
        $("#bevitel").append(this.id)
        db++

        if (db == 4) {
            $(".gomb").off("click")
            $(".gomb").css("opacity", "50%")
            $(".gomb").css("cursor", "auto")

        }

    })

    $("#kozepre").on("click", check)

}

function konzolra() {
    console.log("konzol");
    console.log(szamok[0], szamok[1], szamok[2]);
    console.log(szamok[3], szamok[4], szamok[5]);
    console.log(szamok[6], szamok[7], szamok[8]);
    console.log(szamok[9]);
}

function ujra() {
    $("#pinpanel").html("")
    $("#bevitel").html("")
    db = 0
    gombok()
}

function check() {
    //$("#kozepre").checked
    let x = document.getElementById("kozepre").checked;
    //console.log(x);
    if (x) {
        $("#pinpanel").css("justify-content", "center")
    } else {
        $("#pinpanel").css("justify-content", "flex-start")
    }
}
