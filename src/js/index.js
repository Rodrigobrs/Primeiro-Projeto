const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

listaSelecaoPokedevs.forEach(pokedev=>{
    pokedev.addEventListener("click", () => {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado; 
    const carataoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    carataoPokedevParaAbrir.classList.add("aberto") 
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo")
    const pokedevSelecionadoNalistagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNalistagem.classList.add("ativo");
    })
})