
function slide1() {
    document.getElementById('img0').src = "ranking/Emblem_Challenger.png"
    setTimeout("slide2()" , 3000)
}

function slide2() {
    document.getElementById('img0').src = "ranking/Emblem_Diamond.png"
    setTimeout("slide3()", 3000)
}

function slide3() {
    document.getElementById('img0').src = "ranking/Emblem_Gold.png"
    setTimeout("slide4()", 3000)
}

function slide4() {
    document.getElementById('img0').src = "ranking/Emblem_Grandmaster.png"
    setTimeout("slide5()", 3000)
}

function slide5() {
    document.getElementById('img0').src = "ranking/Emblem_Iron.png"
    setTimeout("slide6()", 3000)
}

function slide6() {
    document.getElementById('img0').src = "ranking/Emblem_Master.png"
    setTimeout("slide7()", 3000)
}

function slide7() {
    document.getElementById('img0').src = "ranking/Emblem_Platinum.png"
    setTimeout("slide8()", 3000)
}

function slide8() {
    document.getElementById('img0').src = "ranking/Emblem_Silver.png"
    setTimeout("slide1()", 3000)
}

