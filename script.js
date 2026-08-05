// ================= Mobile Menu =================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");


if(menuBtn){

    menuBtn.onclick = ()=>{

        nav.classList.toggle("active");

    };

}


// Close Menu After Click

document.querySelectorAll("nav a").forEach(link=>{

    link.onclick = ()=>{

        nav.classList.remove("active");

    };

});




// ================= Active Menu Highlight =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");


window.addEventListener("scroll",()=>{


    let current = "";


    sections.forEach(section=>{


        let sectionTop = section.offsetTop - 150;

        let sectionHeight = section.clientHeight;


        if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight){

            current = section.getAttribute("id");

        }


    });



    navLinks.forEach(link=>{


        link.classList.remove("active");


        if(link.getAttribute("href") === "#"+current){

            link.classList.add("active");

        }


    });


});





// ================= Testimonial Auto Slide =================


const testimonialContainer = document.querySelector(
".testimonials-container"
);


let slidePosition = 0;


function autoSlide(){


    const card = document.querySelector(
    ".testimonial-card"
    );


    if(!card || !testimonialContainer) return;



    let width = card.offsetWidth + 30;


    slidePosition += width;



    if(slidePosition >= testimonialContainer.scrollWidth - testimonialContainer.clientWidth){


        slidePosition = 0;


    }



    testimonialContainer.scrollTo({

        left:slidePosition,

        behavior:"smooth"

    });


}



setInterval(autoSlide,3000);








// ================= Scroll Animation =================


const revealItems = document.querySelectorAll(
"section, .service-card, .portfolio-card, .testimonial-card"
);



function reveal(){


    revealItems.forEach(item=>{


        let height = window.innerHeight;

        let position = item.getBoundingClientRect().top;



        if(position < height - 100){

            item.classList.add("show");

        }


    });


}



window.addEventListener("scroll",reveal);

reveal();







// ================= Typing Effect =================


const typing = document.querySelector(".typing");


if(typing){


const words = [

    "Web Designer",
    "Frontend Developer",
    "UI Designer"

];


let index = 0;
let char = 0;
let remove = false;



function typeEffect(){


    let text = words[index];


    if(!remove){


        typing.textContent =
        text.substring(0,char++);



        if(char > text.length){


            remove = true;

            setTimeout(typeEffect,1000);

            return;

        }



    }else{


        typing.textContent =
        text.substring(0,char--);



        if(char < 0){


            remove = false;

            index++;


            if(index >= words.length){

                index = 0;

            }


        }


    }



    setTimeout(typeEffect,100);

}



typeEffect();


}







// ================= Back To Top Button =================


const topButton = document.querySelector("#topBtn");


if(topButton){


window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        topButton.style.display="block";


    }else{


        topButton.style.display="none";


    }


});



topButton.onclick = ()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


};


}






const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){
    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});



const menu = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menu.onclick = () => {
    navbar.classList.toggle("active");
};


const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function(){

    navbar.classList.toggle("active");

});





