## Estrutura do Projeto (Next.js):

```bash 
- Campo e clube de futebol

- A ideia do desafio está em criar uma página no front-end que mostra as informações de um clube de futebol e que o usuário consiga customizar o clube com os jogadores que quiser. Não precisa ser um clube nacional, pode até ser seleções mesmo, por exemplo, seleção brasileira, argentina e etc.

- Na tela principal o usuário consegue ver os times (não precisa colocar muitos de início) e assim que ele clica em um time, abre um campo de futebol mostrando os jogadores daquele time na posição de cada um no campo. Assim que o usuário clica na foto desse jogador, abre uma mini aba de informações logo acima da foto dele que mostra informações do jogador, com descrição dele, posição, quanto tempo está no time e quais os outros 3 recentes clubes que ele jogou.

- O usuário tem que conseguir procurar jogadores e adicionar eles para um clube, mas ele não pode adicionar jogadores em uma posição do campo que não faz parte da do jogador, por exemplo, ele não pode adicionar um goleiro como atacante e vice-versa. Além disso, o usuário pode conseguir adicionar pessoas para o banco de reserva e customizar em que tempo ele vai entrar no jogo.

- Quando você vai pesquisar um jogador, cada jogador tem um card que mostra as informações dele e o card pode funcionar da mesma forma que em jogos de futebol, que a cor do card muda de acordo com as estatísticas do jogador, por exemplo, e se ele for no geral 90+ fica amarelo (cor ouro), caso seja, abaixo de 60, vermelho e entre outros aí, pode ficar à vontade para customizar da forma que quiser e também, caso queira, adicionar essa cor de card e estatísticas na visualização das informações do usuário no campo de futebol. Exemplo dessa funcao em imagem: Clique para ver

- Além disso tudo, pode ter uma tela de comparação de jogadores, que compara as estatísticas de um jogador com as de outro e mostra quem teoricamente "venceu nas estatísticas", esse desafio é livre, então, caso queira adicionar mais coisas, fique à vontade :

- Caso voce precise de dados para os jogadores, pode pesquisar por uma API na internet, mas recomendamos que voce use essa como base: (https://www.api-football.com)
```


### Team Page - Football API Integration

1. Descrição

- Este projeto é uma página dinâmica que exibe informações sobre um time de futebol, incluindo seus jogadores, utilizando a API Football (https://www.api-football.com/documentation-v3). 
- Os usuários podem buscar jogadores e adicioná-los ao time.

2. Tecnologias Utilizadas

- Next.js: Framework React para renderização no servidor e otimização da aplicação.

- TypeScript: Tipagem estática para maior segurança e produtividade.

- Tailwind CSS: Framework CSS para estilização rápida e responsiva.

- API Football: Para obter informações sobre times e jogadores.

- Node: Versão >= 18.0.

3. Instalação e Execução

- Clone o repositório:

```bash
git clone https://github.com/reinaldoper/football.git
```

- Acesse o diretório do projeto:

```bash
cd football
```

- Instale as dependências:

```bash
npm install
```

- Configure a chave da API Football no arquivo .env:

```bash
NEXT_PUBLIC_API_FOOTBALL_KEY=SUACHAVEAQUI
```

- Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

- Acesse http://localhost:3000/.



```bash
├── src/
│   ├── app/
│   │   ├── (main)/
│   │   │   ├── page.tsx       
│   │   ├── team/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx   
│   │   ├── compare/
│   │   │   └── page.tsx       
│   ├── components/
│   │   ├── Field.tsx         
│   │   ├── PlayerCard.tsx     
│   │   ├── ComparisonTool.tsx 
│   │   ├── SearchPlayer.tsx   
│   ├── lib/
│   │   └── api.ts 
│   │   └── types.ts           
```

