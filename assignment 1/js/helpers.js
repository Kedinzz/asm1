function getElmById(span){
    return document.getElementById(span);
}

function getElmByClass(span){
    return document.getElementsByClassName(span);
}

function updateUsername(span){
    let lstElmUsername = getElmByClass('username');
    console.log("elm username", lstElmUsername);

    let length = lstElmUsername.length;
    for(let i = 0; i < length; i++){
        lstElmUsername[i].innerHTML = span;
    }
}