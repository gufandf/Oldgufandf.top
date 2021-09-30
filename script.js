function buttonClick(ths,display){
    document.getElementById("choose").id="unchoose";
    ths.id="choose";
    for (i = 0; i < document.getElementsByClassName("html").length; i++) { 
        document.getElementsByClassName("html")[i].style.display="none";
    }
    document.getElementById(display).style.opacity=0;
    document.getElementById(display).style.display="flex";
    var pos=0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos ==  100) {
             clearInterval(id);
        } else {
             pos++; 
             document.getElementById(display).style.opacity=pos/100;
        }
    }
    
    // console.log(document.getElementsByClassName("html"));
    // console.log(document.getElementsByClassName("html").type);
}

