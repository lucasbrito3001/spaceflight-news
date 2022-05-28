# Projeto Front-end - Space Flight News

## O projeto consiste em uma listagens de notícias sobre voos espaciais, que são obtidos consumindo a seguinte API: https://api.spaceflightnewsapi.net/v3/documentation. Cada requisição feita para o API nos retorna 10 notícias, que podem substituir ou incrementar a lista atual, depende da ação feita (filtrar substitui, carregar mais incrementa).

---

### Lista de tecnologias usadas no projetores
    - Vue 2.6.11
    - Bootstrap 4.6.1
    - BootstrapVue 2.22.0
    - axios 0.27.2

### Setup e instalação do projeto

#### Instalação de dependências e levantamento do projeto
- instale as dependências do projeto com o comando **_npm install_**
- para rodar o projeto na sua máquina corra o comando **_npm run serve_**

#### Instruções de como usar o sistema
- Ao entrar no sistema, uma requisição para a API vai ser feita automaticamente, trazendo assim 10 notícias.
- Depois disso você tem 3 opções
  - Limpar a lista e carregar novas notícias filtrando por título
  - Limpar a lista e carregar novas notícias ordenando da mais nova para a mais antiga ou da mais antiga para mais nova
  - Carregar mais notícias e incrementar na lista atual fazendo uma nova requisição usando os filtros setados no momento
- Cada item da lista tem um botão "Ver mais" que abre um modal obtendo as informações da notícia e um botão que te redireciona para o site link original da notícia
- Apertando em limpar filtros, você vai remover todos os filtros, limpar a lista atual e fazer um nova requisição para a API obtendo novos registros

> This is a challenge by Coodesh