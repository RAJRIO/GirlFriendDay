// Floating Hearts Animation ❤️

function createHeart(){

    const heart = document.createElement("span");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
    (Math.random() * 3 + 5) + "s";

    heart.style.fontSize =
    (Math.random() * 20 + 15) + "px";


    document.querySelector(".hearts")
    ?.appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },8000);

}


setInterval(createHeart,300);





// Typing Love Message 💌

const message =
"Forever with you, Varasala Ramya ❤️";


let index = 0;


function typingEffect(){

    const element =
    document.querySelector(".typing");


    if(element && index < message.length){

        element.innerHTML += message.charAt(index);

        index++;

        setTimeout(typingEffect,100);

    }

}


window.onload = typingEffect;





// Confetti Celebration 🎆

function celebrate(){


    const box =
    document.getElementById("confetti");


    if(!box) return;



    for(let i=0;i<100;i++){


        const piece =
        document.createElement("span");


        piece.style.left =
        Math.random()*100+"vw";


        piece.style.background =
        randomColor();



        piece.style.animationDuration =
        (Math.random()*2+2)+"s";



        box.appendChild(piece);



        setTimeout(()=>{

            piece.remove();

        },3000);


    }


}




function randomColor(){


    const colors=[

        "#ff1744",
        "#ffeb3b",
        "#00e676",
        "#2979ff",
        "#e040fb"

    ];


    return colors[
        Math.floor(Math.random()*colors.length)
    ];

}