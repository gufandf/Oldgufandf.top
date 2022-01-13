function sideBarClicked(){
    B = document.getElementsByClassName("sideBarButton")[0]
    S = document.getElementsByClassName("sideBar")[0]
    if (S.id == "out"){
        S.id = "into"
        B.id = "unRotation"
    }else{
        S.id = "out"
        B.id = "Rotation"
        // S.style.left="0px"
    }
}

function areaChange(changeTo){
    AREA = document.getElementsByClassName("area");
    for (i = 0; i < AREA.length; i++) {
        AREA[i].style.display="none";
    }
    
    document.getElementById(changeTo).style.opacity=0;
    document.getElementById(changeTo).style.display="flex";
    B = document.getElementsByClassName("sideBarButton")[0]
    S = document.getElementsByClassName("sideBar")[0]
    S.id = "into"
    B.id = "unRotation"
    var pos=0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos ==  100) {
             clearInterval(id);
        } else {
             pos++;
             document.getElementById(changeTo).style.opacity=pos/100;
        }
    }
}