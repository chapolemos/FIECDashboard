# Dashboard FIEC 

Esse projeto é a reprodução de um dashboard disponibilizado em Power BI feito em React.

O repositório conta com as pastas para o front-end do projeto (fiec-dashboard) e o back-end (fiec-backend).


# Bibliotecas Utilizadas

<div style="display: flex; justify-content: center;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" style="width: 120px; height: 120px; margin: 10px;">
  <img src="https://camo.githubusercontent.com/2e1efd50b61f26c56e82929d735dce115937350e280abac98641c79d765da27c/68747470733a2f2f766974656a732e6465762f6c6f676f2e737667" alt="Vite" style="width: 120px; height: 120px; margin: 10px;">
  <img src="https://raw.githubusercontent.com/d3/d3-logo/master/d3.png" alt="d3.js" style="width: 120px; height: 120px; margin: 10px;">
  <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Tailwind CSS" style="width: 120px; height: 120px; margin: 10px;">
</div>

## React

Sendo um projeto em React, essa foi a biblioteca mais importante do projeto. O React é uma biblioteca que permite uma construção mais eficiente de interfaces por meio da componentização e gerenciamento de estados. 

Nesse projeto pude tanto usar do React pra construir meus próprios componentes como importar de bibliotecas para complementar a interface, fazendo uso de ícones, material-UI pra checkboxes, e outros.

## Vite 

O Vite foi usado para criar o projeto inicial, compilá-lo, e continuar renderizando à medida que o desenvolvimento era feito. Optei pelo Vite pois alternativas como o Create React APP já são consideradas obsoletas por muitos desenvolvedores, além de o Vite ser extremamente rápido na compilação, o que acelera o desenvolvimento. 

## D3.js
Biblioteca de criação de gráficos para exibição de dados, incluindo mapas, com o auxílio de arquivos .topojson ou .geojson. 

Nesse projeto, utilizei a biblioteca pra implementar um gráfico de radar, um gráfico de barras, e um mapa coroplético do brasil. 

A utilização da biblioteca foi feita com a utilização de dados alimentados para as propriedades de cada componente de maneira a gerar o gráfico em tela. Os dados foram instanciados localmente num objeto typescript e alimentados por meio de código.

### D3-TIP

Essa biblioteca permite a criação de tooltips com o d3.js. 

Com ela, é possível criar um texto que mostra valores ao se passar pelos estados no mapa coroplético, e customizá-lo com CSS para uma exibição dos dados de maneira adicional para o usuário.

## Tailwind.css

O Tailwind foi usado nesse projeto pra agilizar e facilitar a edição dos componentes no front end. Com ele, é possível adicionar classes customizadas css pra cada componente sem ter que lidar com um arquivo css enorme (como no caso de CSS base, ou sem um Processor), o que torna o código muito mais mantenível. 

## PostCSS + Autoprefixer

PostCSS e Autoprefixer foram utilizados pra usar o Tailwind.css no projeto para fazer a estilização. O PostCSS compila a sintaxe do tailwind em código CSS puro, evitando que o desenvolvedor precise redigir um arquivo .css e podendo estilizar os componentes em seu className. 

O autoprefixer adiciona automaticamente os prefixos de fornecedor, facilitando o desenvolvimento em diferentes navegadores. 

## FontAwesome 

O FontAwesome foi usado para carregar ícones que tivessem semântica análoga com os do dashboard original. A biblioteca, mesmo em sua versão gratuita, permite que o desenvolvedor aplique vários ícones no projeto e tenha uma série de propriedades pra facilitar sua customização e edição.


## Créditos

Arquivo Geojson usado pro mapa do d3js: https://simplemaps.com/gis/country/br

Massa de dados utilizados para a aplicação: https://www.observatorio.ind.br/inteligencia-competitiva