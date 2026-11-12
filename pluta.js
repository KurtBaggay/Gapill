
let coni = document.querySelector("#coni");
let mediaScreen = matchMedia("(max-width: 700px)");

function Q(send){
    let nav = document.querySelector("nav");
    let anc = document.querySelectorAll("nav a");
    let wallpaper1 = document.getElementById("wallpaper1");
    if(send.matches){
        document.querySelector("header h1").style.fontSize = "2.5em";
        nav.children[0].style.textAlign = "center";
        nav.nextElementSibling.style.display = "inline-block";
        nav.style.height = "0";
        nav.style.display = "none";

        anc.forEach((tag)=>{
            tag.style.display = "block";
            tag.style.fontSize = "1.4em";
            tag.style.borderLeft = "none";
            tag.style.borderTop = " 2px solid rgb(58, 99, 143)";

        });

        wallpaper1.style.textAlign = "center"
    }

    else {
        document.querySelector("header h1").style.fontSize = "3em";
        nav.children[0].style.textAlign = "right";
        nav.nextElementSibling.style.display = "none";
        nav.style.height = "auto";
        nav.style.display = "block";

        anc.forEach((tag)=>{
            tag.style.display = "inline-block";
            tag.style.fontSize = "1em";
            tag.style.borderLeft = " 2px solid rgb(58, 99, 143)";
            tag.style.borderTop = "none";

        });

        wallpaper1.style.textAlign = "left";
    }
}

mediaScreen.addEventListener("change",Q);

Q(mediaScreen);

onscroll = ()=>{
    let p = document.documentElement.scrollTop;
    let h = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    document.getElementById("scrollie").style.width =  parseInt((p / h) * 100) +"%";
}

document.onmousemove = (FE)=>{
    coni.style.top = FE.clientY + document.documentElement.scrollTop + "px";
    coni.style.left = FE.clientX + document.documentElement.scrollLeft + "px";

    document.onscroll = ()=>{
    coni.style.top = FE.clientY + document.documentElement.scrollTop + "px";
    coni.style.left = FE.clientX + document.documentElement.scrollLeft + "px";
    }
}

document.onmouseenter = ()=>{
    coni.style.display = "inline";
}

document.onmouseleave = ()=>{
    coni.style.display = "none";
}

document.ondrag = ()=> coni.style.display = "none";

document.ondragend = (FE)=>{
    coni.style.top = FE.clientY + document.documentElement.scrollTop + "px";
    coni.style.left = FE.clientX + document.documentElement.scrollLeft + "px";
    coni.style.display = "inline";
}

document.querySelectorAll("nav a").forEach((tag)=>{
    tag.addEventListener("mouseover",(FE)=> {
        FE.target.style.textDecoration = "underline";
        FE.target.style.color = "rgb(5, 207, 96)";
    });
    tag.addEventListener("mouseout",(FE)=> {
        FE.target.style.textDecoration = "none";
        FE.target.style.color = "whitesmoke";
    });
})


function pull(N){
    if(N.style.display === "none"){
        N.style.display = "block";
        N.style.height = "auto";
    }
    else{
        N.style.display = "none";
        N.style.height = "0";
    }
}