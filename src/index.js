const chave = "&appid=cebcd482eda57fa9a6714c1c2ba91885"
const apiWeather = "https://api.openweathermap.org/data/2.5/weather?q="
const linguagem = "&lang=pt_br"
const unidade = "&units=metric"
const urlImagem = 'https://openweathermap.org/img/wn/'

let cidadePesquisada = document.getElementById('pesquisaCidade')
let btnPesquisar = document.getElementById('btnPesquisar')
let tituloCidade = document.getElementById('cidade')
let temperatura = document.getElementById('temperatura')
let icone = document.getElementById('icone')
let umidade = document.getElementById('umidade')
let descricao = document.getElementById('descricao')


async function buscarCidade(nomeCidade) {
    url = apiWeather + nomeCidade + chave + linguagem + unidade

    const retornoPesquisa = await fetch(url)
    const cidadeInfos = await retornoPesquisa.json()

    return cidadeInfos

}

async function exibirInfo(cidade) {
    let informacoes = await buscarCidade(cidade)

    tituloCidade.innerHTML = 'Tempo em: ' + informacoes.name
    temperatura.innerHTML = informacoes.main.temp + 'ºC'
    umidade.innerHTML = informacoes.main.humidity + '%'
    descricao.innerHTML = informacoes.weather[0].description
    icone.src = urlImagem + informacoes.weather[0].icon + '@2x.png'
}

async function pesquisar() {

    let cidade = cidadePesquisada.value
    exibirInfo(cidade)
}

btnPesquisar.addEventListener('click', pesquisar);


