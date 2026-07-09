
const links = document.querySelectorAll("nav a");

    links.forEach(link=>{
        link.addEventListener("click",(e)=>{
            e.preventDefault();
            const id = link.getAttribute("href");
            document.querySelector(id).scrollIntoView({
                behavior:"smooth"
            });
        });
    });

    /*==============================
ROLAGEM SUAVE
==============================*/

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const id = this.getAttribute('href');

        document.querySelector(id).scrollIntoView({

            behavior:'smooth'

        });

    });

});


/*==============================
HEADER
==============================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.classList.add("active");

    }else{

        header.classList.remove("active");

    }

});


/*==============================
BOTÃO VOLTAR AO TOPO
==============================*/

const voltar = document.getElementById("voltarTopo");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        voltar.classList.add("show");

    }else{

        voltar.classList.remove("show");

    }

});

voltar.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*==============================
MENU MOBILE
==============================*/

const menu = document.querySelector(".menu-mobile");

const nav = document.querySelector("nav");

menu.addEventListener("click",()=>{

    nav.classList.toggle("open");

});


/*==============================
FECHAR MENU
==============================*/

document.querySelectorAll("nav a").forEach(item=>{

    item.addEventListener("click",()=>{

        nav.classList.remove("open");

    });

});
