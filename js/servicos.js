/* document.querySelectorAll(".btn-card").forEach(botao=>{

    botao.addEventListener("click",function(e){

        e.preventDefault();

        const destino = this.getAttribute("href");

        const secao = document.querySelector(destino);

        if(secao){

            secao.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});

document.querySelectorAll(".btn-card").forEach(botao=>{

    botao.addEventListener("click",function(e){

        e.preventDefault();

        const destino=this.getAttribute("href");

        document.querySelectorAll(".detalhes-servico").forEach(secao=>{

            secao.style.display="none";

        });

        const secao=document.querySelector(destino);

        if(secao){

            secao.style.display="block";
            secao.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});
 */

function abrirModal(servico){

    document.getElementById(
        "modal-" + servico
    ).style.display = "block";

    document.body.style.overflow = "hidden";

}

function fecharModal(servico){

    document.getElementById(
        "modal-" + servico
    ).style.display = "none";

    document.body.style.overflow = "auto";

}

// fechar clicando fora do modal

window.onclick = function(event){

    if(event.target.classList.contains("modal")){

        event.target.style.display = "none";

        document.body.style.overflow = "auto";

    }

}

