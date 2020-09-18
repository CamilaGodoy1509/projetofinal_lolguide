// ----------------------------------------------------------------------------------------

let xhr = new XMLHttpRequest();
var selecao = document.getElementById('name')
let url = `https://ddragon.leagueoflegends.com/cdn/10.18.1/data/pt_BR/champion.json`;

xhr.open("GET", url,false);

xhr.onreadystatechange = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
        let dadosJSONText = xhr.responseText
        let obj = JSON.parse(dadosJSONText)

        for (let prop in obj.data) {

            selecao.innerHTML += "<option value=" + prop + ">" + prop + "</option>"

        }

    }
}

xhr.send()

// ----------------------------------------------------------------------------------------
function championSelected() {
    let xhr = new XMLHttpRequest();
    var champion = document.getElementById('name').value
    let show = document.getElementById('show')
    let show2 = document.getElementById('show').innerHTML = " "

    let url = `https://ddragon.leagueoflegends.com/cdn/10.18.1/data/pt_BR/champion/${champion}.json`;

    xhr.open("GET", url,false);

    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            let dadosJSONText = xhr.responseText
            let obj = JSON.parse(dadosJSONText)
            let feitico = document.getElementById('spell')
            let feitico2 = document.getElementById('spell').innerHTML = " "
            let frase = document.getElementById('frase')


            for (let prop in obj.data) {
                show.innerHTML +=

                    "<div>" +
                    "<center>" + "<h3>" + obj.data[prop].id + "</h3>" + "</center>" + "<br>" +
                    "<center>" + `<img src='http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg' onload='${img1()}'
                    id='slide' width='300px'>` + "</center>" + "<br>" +
                    "<p align='justify'>" + obj.data[prop].lore + "</p>" + "<br>" +
                    "</div>"

                $("#show").append(`<audio id='boom' >"<source src="/sound/${champion}.wav" type="audio/mpeg">
                </audio>` + "<button  onclick='teste()'>" + "<img src='https://www.flaticon.com/svg/static/icons/svg/254/254434.svg' id='play'>" + "Ouça a frase desse campeão" + "</button>")


                for (let i = 0; i < obj.data[prop].spells.length; i++) {

                    feitico.innerHTML += "<div id='div5'>" +
                        "<center>" + "<h3>" + obj.data[prop].spells[i].name + "</h3>" + "</center>" + "<br>" +
                        "<center>" + "<img src='http://ddragon.leagueoflegends.com/cdn/10.18.1/img/spell/" + obj.data[prop].spells[i].id + ".png' id='img-spell'>" + "</center>" + "<br>"

                        +
                        "<p align='justify'>" + obj.data[prop].spells[i].description + "</p>"

                    "</div>"

                }


            }
        }


    }

    xhr.send()

// ----------------------------------------------------------------------------------------

    function img1() {

        setTimeout(function () {
            document.getElementById('slide').src = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_1.jpg`
            img2()
        }, 3000);
    }

    function img2() {

        setTimeout(function () {
            document.getElementById('slide').src = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_2.jpg`
            img3()
        }, 3000);

    }

    function img3() {

        setTimeout(function () {
            document.getElementById('slide').src = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_3.jpg`
            img1()
        }, 3000);

    }


}

function teste() {

    var audio = document.getElementById("boom")

    audio.play()
}

// ----------------------------------------------------------------------------------------

function level() {
    let xhr = new XMLHttpRequest();
    var champion = document.getElementById('name').value

    let url = `http://ddragon.leagueoflegends.com/cdn/10.18.1/data/pt_BR/champion/${champion}.json`;

    xhr.open("GET", url);

    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            let dadosJSONText = xhr.responseText
            let obj = JSON.parse(dadosJSONText)
            let div = document.getElementById('div-level')
            let level = document.getElementById('level')
            let div2 = document.getElementById('div-level').innerHTML = " "



            for (let prop in obj.data) {
                let hp = obj.data[prop].stats.hp
                let atk = obj.data[prop].stats.attackdamage
                let ar = obj.data[prop].stats.armor
                let crit = obj.data[prop].stats.crit
                let hprenger = obj.data[prop].stats.hpregen
                let mp = obj.data[prop].stats.mp
                let sb = obj.data[prop].stats.spellblock
                let mprenger = obj.data[prop].stats.mpregen

                let hplevel = obj.data[prop].stats.hpperlevel
                let atklevel = obj.data[prop].stats.attackdamageperlevel
                let arlevel = obj.data[prop].stats.armorperlevel
                let critlevel = obj.data[prop].stats.critperlevel
                let hprglevel = obj.data[prop].stats.hpregenperlevel
                let mplevel = obj.data[prop].stats.mpperlevel
                let spelllevel = obj.data[prop].stats.spellblockperlevel
                let mprengenlevel = obj.data[prop].stats.mpregenperlevel


                if (level.value == 1) {
                    div.innerHTML = "<div>" +
                        "<h3 align='center'>" + "Level" + "</h3>" +
                        "HP: " + hp + "<br>" +
                        "Attack damage: " + atk + "<br>" +
                        "Armor: " + ar + "<br>" +
                        "Crit: " + crit + "<br>" +
                        "HP regen: " + hprenger + "<br>" +
                        "MP: " + mp + "<br>" +
                        "Spell block: " + sb + "<br>" +
                        "MP regen: " + mprenger + "<br>"
                }

                if (level.value == 2) {
                    div.innerHTML = "<div>" +
                        "<h3 align='center'>" + "Level" + "</h3>" +
                        "HP: " + Math.round(hp + hplevel) + "<br>" +
                        "Attack damage: " + Math.round(atk + atklevel) + "<br>" +
                        "Armor: " + Math.round(ar + arlevel) + "<br>" +
                        "Crit: " + Math.round(crit + critlevel) + "<br>" +
                        "HP regen: " + Math.round(hprenger + hprglevel) + "<br>" +
                        "MP: " + Math.round(mp + mplevel) + "<br>" +
                        "Spell block: " + Math.round(sb + spelllevel) + "<br>" +
                        "MP regen: " + (mprenger + mprengenlevel) + "<br>"
                }

                if (level.value == 3) {
                    div.innerHTML = "<div>" +
                        "<h3 align='center'>" + "Level" + "</h3>" +
                        "HP: " + Math.round(hp + hplevel * 2) + "<br>" +
                        "Attack damage: " + Math.round(atk + atklevel * 2) + "<br>" +
                        "Armor: " + Math.round(ar + arlevel * 2) + "<br>" +
                        "Crit: " + Math.round(crit + critlevel * 2) + "<br>" +
                        "HP regen: " + Math.round(hprenger + hprglevel * 2) + "<br>" +
                        "MP: " + Math.round(mp + mplevel * 2) + "<br>" +
                        "Spell block: " + Math.round(sb + spelllevel * 2) + "<br>" +
                        "MP regen: " + (mprenger + mprengenlevel * 2) + "<br>"
                }

                if (level.value == 4) {
                    div.innerHTML = "<div>" +
                        "<h3 align='center'>" + "Level" + "</h3>" +
                        "HP: " + Math.round(hp + hplevel * 3) + "<br>" +
                        "Attack damage: " + Math.round(atk + atklevel * 3) + "<br>" +
                        "Armor: " + Math.round(ar + arlevel * 3) + "<br>" +
                        "Crit: " + Math.round(crit + critlevel * 3) + "<br>" +
                        "HP regen: " + Math.round(hprenger + hprglevel * 3) + "<br>" +
                        "MP: " + Math.round(mp + mplevel * 3) + "<br>" +
                        "Spell block: " + Math.round(sb + spelllevel * 3) + "<br>" +
                        "MP regen: " + (mprenger + mprengenlevel * 3) + "<br>"
                }

                if (level.value == 5) {
                    div.innerHTML = "<div>" +
                        "<h3 align='center'>" + "Level" + "</h3>" +
                        "HP: " + Math.round(hp + hplevel * 4) + "<br>" +
                        "Attack damage: " + Math.round(atk + atklevel * 4) + "<br>" +
                        "Armor: " + Math.round(ar + arlevel * 4) + "<br>" +
                        "Crit: " + Math.round(crit + critlevel * 4) + "<br>" +
                        "HP regen: " + Math.round(hprenger + hprglevel * 4) + "<br>" +
                        "MP: " + Math.round(mp + mplevel * 4) + "<br>" +
                        "Spell block: " + Math.round(sb + spelllevel * 4) + "<br>" +
                        "MP regen: " + (mprenger + mprengenlevel * 4) + "<br>"
                }

                if (level.value == 6) {
                    div.innerHTML = "<div>" +
                        "<h3 align='center'>" + "Level" + "</h3>" +
                        "HP: " + Math.round(hp + hplevel * 5) + "<br>" +
                        "Attack damage: " + Math.round(atk + atklevel * 5) + "<br>" +
                        "Armor: " + Math.round(ar + arlevel * 5) + "<br>" +
                        "Crit: " + Math.round(crit + critlevel * 5) + "<br>" +
                        "HP regen: " + Math.round(hprenger + hprglevel * 5) + "<br>" +
                        "MP: " + Math.round(mp + mplevel * 5) + "<br>" +
                        "Spell block: " + Math.round(sb + spelllevel * 5) + "<br>" +
                        "MP regen: " + (mprenger + mprengenlevel * 5) + "<br>"
                }

                if (level.value == 7) {
                    div.innerHTML = "<div>" +
                        "<h3 align='center'>" + "Level" + "</h3>" +
                        "HP: " + Math.round(hp + hplevel * 6) + "<br>" +
                        "Attack damage: " + Math.round(atk + atklevel * 6) + "<br>" +
                        "Armor: " + Math.round(ar + arlevel * 6) + "<br>" +
                        "Crit: " + Math.round(crit + critlevel * 6) + "<br>" +
                        "HP regen: " + Math.round(hprenger + hprglevel * 6) + "<br>" +
                        "MP: " + Math.round(mp + mplevel * 6) + "<br>" +
                        "Spell block: " + Math.round(sb + spelllevel * 6) + "<br>" +
                        "MP regen: " + (mprenger + mprengenlevel * 6) + "<br>"
                }

                if (level.value == 8) {
                    div.innerHTML = "<div>" +
                        "<h3 align='center'>" + "Level" + "</h3>" +
                        "HP: " + Math.round(hp + hplevel * 7) + "<br>" +
                        "Attack damage: " + Math.round(atk + atklevel * 7) + "<br>" +
                        "Armor: " + Math.round(ar + arlevel * 7) + "<br>" +
                        "Crit: " + Math.round(crit + critlevel * 7) + "<br>" +
                        "HP regen: " + Math.round(hprenger + hprglevel * 7) + "<br>" +
                        "MP: " + Math.round(mp + mplevel * 7) + "<br>" +
                        "Spell block: " + Math.round(sb + spelllevel * 7) + "<br>" +
                        "MP regen: " + (mprenger + mprengenlevel * 7) + "<br>"
                }

                if (level.value == 9) {
                    div.innerHTML = "<div>" +
                        "<h3 align='center'>" + "Level" + "</h3>" +
                        "HP: " + Math.round(hp + hplevel * 8) + "<br>" +
                        "Attack damage: " + Math.round(atk + atklevel * 8) + "<br>" +
                        "Armor: " + Math.round(ar + arlevel * 8) + "<br>" +
                        "Crit: " + Math.round(crit + critlevel * 8) + "<br>" +
                        "HP regen: " + Math.round(hprenger + hprglevel * 8) + "<br>" +
                        "MP: " + Math.round(mp + mplevel * 8) + "<br>" +
                        "Spell block: " + Math.round(sb + spelllevel * 8) + "<br>" +
                        "MP regen: " + (mprenger + mprengenlevel * 8) + "<br>"
                }

                if (level.value == 10) {
                    div.innerHTML = "<div>" +
                        "<h3 align='center'>" + "Level" + "</h3>" +
                        "HP: " + Math.round(hp + hplevel * 9) + "<br>" +
                        "Attack damage: " + Math.round(atk + atklevel * 9) + "<br>" +
                        "Armor: " + Math.round(ar + arlevel * 9) + "<br>" +
                        "Crit: " + Math.round(crit + critlevel * 9) + "<br>" +
                        "HP regen: " + Math.round(hprenger + hprglevel * 9) + "<br>" +
                        "MP: " + Math.round(mp + mplevel * 9) + "<br>" +
                        "Spell block: " + Math.round(sb + spelllevel * 9) + "<br>" +
                        "MP regen: " + (mprenger + mprengenlevel * 9) + "<br>"
                }

                if (level.value == 11) {
                    div.innerHTML = "<div>" +
                        "<h3 align='center'>" + "Level" + "</h3>" +
                        "HP: " + Math.round(hp + hplevel * 10) + "<br>" +
                        "Attack damage: " + Math.round(atk + atklevel * 10) + "<br>" +
                        "Armor: " + Math.round(ar + arlevel * 10) + "<br>" +
                        "Crit: " + Math.round(crit + critlevel * 10) + "<br>" +
                        "HP regen: " + Math.round(hprenger + hprglevel * 10) + "<br>" +
                        "MP: " + Math.round(mp + mplevel * 10) + "<br>" +
                        "Spell block: " + Math.round(sb + spelllevel * 10) + "<br>" +
                        "MP regen: " + (mprenger + mprengenlevel * 10) + "<br>"
                }

                if (level.value == 12) {
                    div.innerHTML = "<div>" +
                        "<h3 align='center'>" + "Level" + "</h3>" +
                        "HP: " + Math.round(hp + hplevel * 11) + "<br>" +
                        "Attack damage: " + Math.round(atk + atklevel * 11) + "<br>" +
                        "Armor: " + Math.round(ar + arlevel * 11) + "<br>" +
                        "Crit: " + Math.round(crit + critlevel * 11) + "<br>" +
                        "HP regen: " + Math.round(hprenger + hprglevel * 11) + "<br>" +
                        "MP: " + Math.round(mp + mplevel * 11) + "<br>" +
                        "Spell block: " + Math.round(sb + spelllevel * 11) + "<br>" +
                        "MP regen: " + (mprenger + mprengenlevel * 11) + "<br>"
                }

                if (level.value == 13) {
                    div.innerHTML = "<div>" +
                        "<h3 align='center'>" + "Level" + "</h3>" +
                        "HP: " + Math.round(hp + hplevel * 12) + "<br>" +
                        "Attack damage: " + Math.round(atk + atklevel * 12) + "<br>" +
                        "Armor: " + Math.round(ar + arlevel * 12) + "<br>" +
                        "Crit: " + Math.round(crit + critlevel * 12) + "<br>" +
                        "HP regen: " + Math.round(hprenger + hprglevel * 12) + "<br>" +
                        "MP: " + Math.round(mp + mplevel * 12) + "<br>" +
                        "Spell block: " + Math.round(sb + spelllevel * 12) + "<br>" +
                        "MP regen: " + (mprenger + mprengenlevel * 12) + "<br>"
                }

                if (level.value == 14) {
                    div.innerHTML = "<div>" +
                        "<h3 align='center'>" + "Level" + "</h3>" +
                        "HP: " + Math.round(hp + hplevel * 13) + "<br>" +
                        "Attack damage: " + Math.round(atk + atklevel * 13) + "<br>" +
                        "Armor: " + Math.round(ar + arlevel * 13) + "<br>" +
                        "Crit: " + Math.round(crit + critlevel * 13) + "<br>" +
                        "HP regen: " + Math.round(hprenger + hprglevel * 13) + "<br>" +
                        "MP: " + Math.round(mp + mplevel * 13) + "<br>" +
                        "Spell block: " + Math.round(sb + spelllevel * 13) + "<br>" +
                        "MP regen: " + (mprenger + mprengenlevel * 13) + "<br>"
                }

                if (level.value == 15) {
                    div.innerHTML = "<div>" +
                        "<h3 align='center'>" + "Level" + "</h3>" +
                        "HP: " + Math.round(hp + hplevel * 14) + "<br>" +
                        "Attack damage: " + Math.round(atk + atklevel * 14) + "<br>" +
                        "Armor: " + Math.round(ar + arlevel * 14) + "<br>" +
                        "Crit: " + Math.round(crit + critlevel * 14) + "<br>" +
                        "HP regen: " + Math.round(hprenger + hprglevel * 14) + "<br>" +
                        "MP: " + Math.round(mp + mplevel * 14) + "<br>" +
                        "Spell block: " + Math.round(sb + spelllevel * 14) + "<br>" +
                        "MP regen: " + (mprenger + mprengenlevel * 14) + "<br>"
                }

                if (level.value == 16) {
                    div.innerHTML = "<div>" +
                        "<h3 align='center'>" + "Level" + "</h3>" +
                        "HP: " + Math.round(hp + hplevel * 15) + "<br>" +
                        "Attack damage: " + Math.round(atk + atklevel * 15) + "<br>" +
                        "Armor: " + Math.round(ar + arlevel * 15) + "<br>" +
                        "Crit: " + Math.round(crit + critlevel * 15) + "<br>" +
                        "HP regen: " + Math.round(hprenger + hprglevel * 15) + "<br>" +
                        "MP: " + Math.round(mp + mplevel * 15) + "<br>" +
                        "Spell block: " + Math.round(sb + spelllevel * 15) + "<br>" +
                        "MP regen: " + (mprenger + mprengenlevel * 15) + "<br>"
                }

                if (level.value == 17) {
                    div.innerHTML = "<div>" +
                        "<h3 align='center'>" + "Level" + "</h3>" +
                        "HP: " + Math.round(hp + hplevel * 16) + "<br>" +
                        "Attack damage: " + Math.round(atk + atklevel * 16) + "<br>" +
                        "Armor: " + Math.round(ar + arlevel * 16) + "<br>" +
                        "Crit: " + Math.round(crit + critlevel * 16) + "<br>" +
                        "HP regen: " + Math.round(hprenger + hprglevel * 16) + "<br>" +
                        "MP: " + Math.round(mp + mplevel * 16) + "<br>" +
                        "Spell block: " + Math.round(sb + spelllevel * 16) + "<br>" +
                        "MP regen: " + (mprenger + mprengenlevel * 16) + "<br>"
                }

                if (level.value == 18) {
                    div.innerHTML = "<div>" +
                        "<h3 align='center'>" + "Level" + "</h3>" +
                        "HP: " + Math.round(hp + hplevel * 17) + "<br>" +
                        "Attack damage: " + Math.round(atk + atklevel * 17) + "<br>" +
                        "Armor: " + Math.round(ar + arlevel * 17) + "<br>" +
                        "Crit: " + Math.round(crit + critlevel * 17) + "<br>" +
                        "HP regen: " + Math.round(hprenger + hprglevel * 17) + "<br>" +
                        "MP: " + Math.round(mp + mplevel * 17) + "<br>" +
                        "Spell block: " + Math.round(sb + spelllevel * 17) + "<br>" +
                        "MP regen: " + (mprenger + mprengenlevel * 17) + "<br>"
                }

            }
        }

    }

    xhr.send()

}