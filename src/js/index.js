/*
quando clicar no pokemon da listagem temos que esconder o cartão do pokemon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem
pra isso vamos precisar trabalhar com dois elementos

1- listagem
2- cartão do pokemon

CHECK V - Precisamos criar duas variaveis no js pra trabalhar com os elementos da tela

- Vamos precisar trabalhar com um evento de click feito pelo usuario na listagem de pokemons
- Remover a classe aberto só do cartão que esta aberto
- Ao clickar em pokemon da listagem
pegamos o id desse pokemon pra saber qual cartão mostrar
- Remover a classe ativo que marca o pokemon selecionado
- Adicionar a classe ativo no item da lista selecionado
*/

const listaSelecaoPokemons = document.querySelectorAll('.pokemon-icone')
//escolhendo a classe do HTML

listaSelecaoPokemons.forEach(pokemon => {
    
        //Vamos precisar trabalhar com um evento de click feito pelo usuario na listagem de pokemons
        pokemon.addEventListener('click', () => {
            //- Remover a classe aberto só do cartão que esta aberto
            const cartaoPokemonAberto = document.querySelector('.aberto')
            cartaoPokemonAberto.classList.remove('aberto')

            console.log(cartaoPokemonAberto)

            //ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartão mostrar

            const idPokemonSelecionado = pokemon.attributes.id.value

            const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
            const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
            cartaoPokemonParaAbrir.classList.add('aberto')
            
            //remover a classe ativo que marca

            const pokemonAtivoNaListagem = document.querySelector('.ativo')
            pokemonAtivoNaListagem.classList.remove ('ativo')

            const pokemonSelecionadoNaListagem = document.getElementById (idPokemonSelecionado)
            
            pokemonSelecionadoNaListagem.classList.add('ativo')




        })
    })