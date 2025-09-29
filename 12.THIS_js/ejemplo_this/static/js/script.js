function TurnOff(element){
    if (element.innerText == "Login"){
        element.innerText = "Logout";
    } else{
        element.innerText = "Login";
    }
}

function Hide(element){
    element.remove();
}


let like_1 = 13
let like_2 = 37

function Like(element){
    like_1++;
    document.getElementById('like_container1').textContent = like_1 + " Like(s)";
}

function Like_2(element){
    like_2++;
    document.getElementById('like_container2').textContent = like_2 + " Like(s)";
}