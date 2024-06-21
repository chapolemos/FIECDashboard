# Dashboard FIEC 

Esse projeto é a reprodução de um dashboard disponibilizado em Power BI feito em React.

O projeto simula o pedido de um cliente para uma aplicação front-end feita para a exibição de dados do FIEC sobre diferentes estados e regiões do país. O objetivo é fazer uma versão web adaptada baseada no Power BI que exiba os dados corretamente e permita ao usuário visualizar as informações.

## Como executar o projeto
Navegue para a pasta da aplicação.
```
cd fiec-dashboard
```

Execute o comando utilizando o Docker.
```
docker compose up -d
```
A aplicação então ficará disponível na porta localhost:8080.

## Observações 
Os arquivos de código possuem um bloco de comentários no início de cada um para explicar a função e o objetivo de cada arquivo com mais detalhes.

## Responsividade 
Diversos componentes possuem variações pra tamanhos de monitor médio e grande nos seus className do Tailwind. A aplicação foi projetada para ser utilizável em um monitor 1366x768, porém possui bem mais espaço de respiro e legibilidade num monitor 1920x1080.

## SEO 
Incluí meta tags de html, robots.txt e um sitemap.xml para questões de SEO no projeto. Ainda que esse projeto fosse uma SPA rodada localmente, como era a simulação de um projeto de um cliente, poderia ser relevante para o projeto do mesmo ser mais facilmente encontrável por meio de search engines.

## Acessibilidade
O projeto conta com aria-labels em seus diferentes itens para o uso de leitores de tela, já que nem todo leitor de tela é compatível com o uso do elemento "title". Dessa maneira, usuários com dificuldades visuais poderiam ter mais informação ao se acessar o site.

## Escalabilidade e Manutenibilidade
Essa aplicação foi construída com diversos componentes feitos para serem reutilizáveis e adaptáveis às necessidades do cliente. Além disso, com o uso de ferramentas com o Tailwind, a manutenção do front fica mais rápida e eficiente, acelerando os ciclos de desenvolvimento.

O objeto feito para conter a massa de dados local poderia facilmente ser transformado em uma interface para receber objetos de dados processados de um back-end (que infelizmente não tive tempo de fazer para esse projeto). O objeto foi construído de maneira a evitar iterações em tempo de O(n²) e reduzir o tempo de processamento no front-end. Com os dados sendo recebido no formato correto à partir do back, isso faria a execução da aplicação mais rápida do lado do usuário.

# Bibliotecas Utilizadas

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width="120" height="120" style="margin: 10px;">
  <img src="https://camo.githubusercontent.com/2e1efd50b61f26c56e82929d735dce115937350e280abac98641c79d765da27c/68747470733a2f2f766974656a732e6465762f6c6f676f2e737667" alt="Vite" width="120" height="120" style="margin: 10px;">
  <img src="https://raw.githubusercontent.com/d3/d3-logo/master/d3.png" alt="d3.js" width="120" height="120" style="margin: 10px;">
  <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Tailwind CSS" width="120" height="120" style="margin: 10px;">
</p>

## React

Sendo um projeto em React, essa foi a biblioteca mais importante do projeto. O React é uma biblioteca que permite uma construção mais eficiente de interfaces por meio da componentização e gerenciamento de estados. 

Nesse projeto pude tanto usar do React pra construir meus próprios componentes como importar de bibliotecas para complementar a interface, fazendo uso de ícones, material-UI pra checkboxes, e outros.

[Link pra Biblioteca React](https://reactjs.org/)

## Vite 

O Vite foi usado para criar o projeto inicial, compilá-lo, e continuar renderizando à medida que o desenvolvimento era feito. Optei pelo Vite pois alternativas como o Create React APP já são consideradas obsoletas por muitos desenvolvedores, além de o Vite ser extremamente rápido na compilação, o que acelera o desenvolvimento. 

[Link para a biblioteca Vite](https://vitejs.dev/)


## D3.js
Biblioteca de criação de gráficos para exibição de dados, incluindo mapas, com o auxílio de arquivos .topojson ou .geojson. 

Nesse projeto, utilizei a biblioteca pra implementar um gráfico de radar, um gráfico de barras, e um mapa coroplético do brasil. 

A utilização da biblioteca foi feita com a utilização de dados alimentados para as propriedades de cada componente de maneira a gerar o gráfico em tela. Os dados foram instanciados localmente num objeto typescript e alimentados por meio de código.

[Link para a biblioteca D3JS](https://d3js.org/)


### D3-Tip

Essa biblioteca permite a criação de tooltips com o d3.js. 

Com ela, é possível criar um texto que mostra valores ao se passar pelos estados no mapa coroplético, e customizá-lo com CSS para uma exibição dos dados de maneira adicional para o usuário.

[Link para a biblioteca D3-Tip](https://www.npmjs.com/package/d3-tip)


## Tailwind.css

O Tailwind foi usado nesse projeto pra agilizar e facilitar a edição dos componentes no front end. Com ele, é possível adicionar classes customizadas css pra cada componente sem ter que lidar com um arquivo css enorme (como no caso de CSS base, ou sem um Processor), o que torna o código muito mais mantenível. 

[Link para a biblioteca Tailwind.css](https://tailwindcss.com)

## PostCSS + Autoprefixer

PostCSS e Autoprefixer foram utilizados pra usar o Tailwind.css no projeto para fazer a estilização. O PostCSS compila a sintaxe do tailwind em código CSS puro, evitando que o desenvolvedor precise redigir um arquivo .css e podendo estilizar os componentes em seu className. 

O autoprefixer adiciona automaticamente os prefixos de fornecedor, facilitando o desenvolvimento em diferentes navegadores. 


[Link para a biblioteca PostCSS](https://www.npmjs.com/package/postcss)

[Link para a biblioteca Autoprefixer](https://www.npmjs.com/package/autoprefixer)

## React Router

O React Router foi usado para substituir o uso de useState para a exibição do conteúdo. Por meio de um router com URLs e páginas, seria possível possuir uma página de maior qualidade, e um sitemap, mesmo que seja uma aplicação SPA. Caso o projeto entregue ao cliente fosse uma aplicação Web, seria interessante o uso do router, e por isso o fiz nesse projeto.

[Link para a biblioteca React Router](https://reactrouter.com/en/main)


## FontAwesome 

O FontAwesome foi usado para carregar ícones que tivessem semântica análoga com os do dashboard original. A biblioteca, mesmo em sua versão gratuita, permite que o desenvolvedor aplique vários ícones no projeto e tenha uma série de propriedades pra facilitar sua customização e edição.

[Link para a biblioteca FontAwesome](https://docs.fontawesome.com/apis/javascript/icon-library)

## Créditos

Arquivo Geojson usado pro mapa do d3js: https://simplemaps.com/gis/country/br

Massa de dados utilizados para a aplicação: https://www.observatorio.ind.br/inteligencia-competitiva
