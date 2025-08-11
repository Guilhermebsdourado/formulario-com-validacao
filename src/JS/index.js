function mostrarMensagem() {
    const elemento = document.querySelectorAll(".boxs, .box2");
    const obs = document.querySelectorAll(".obs");

    elemento.forEach((campo, index)=>{
        
        if (campo.value.trim() === "") {
            obs[index].classList.add("negado");
            campo.classList.add("borderRed");
            campo.classList.remove("borderVerde");     
        }else {
            obs[index].classList.remove("negado");
            campo.classList.remove("borderRed");
            campo.classList.add("borderVerde");
        }
    });
}


