import React from 'react';
import { Button } from 'reactstrap';
import Header from './components/header/header';
import Body from './components/body/body';
import Main from './components/main/main';
import Card from './components/card/card';
import Card2 from './components/card2/card2';
import Card3 from './components/card3/card3';
import Card4 from './components/card4/card4';
import Card5 from './components/card5/card5';
import Footer from './components/footer/footer';
import './App.css';


  function App (props) {
    return (
      <div className="div">
          <Header></Header> 
          <Body></Body>
          <Main nome="Remnant From th Ashes" tituloSobre="Sobre o game" sobreGame="Remnant: From the Ashes é um jogo de tiro de sobrevivência 
          em terceira pessoa ambientado em um mundo pós-apocalíptico dominado por criaturas monstruosas. Como um dos últimos remanescentes da 
          humanidade, você partirá sozinho ou ao lado de dois outros jogadores para enfrentar hordas de inimigos mortais e chefes épicos e 
          tentar abrir uma base, reconstruir e, em seguida, retomar o que foi perdido."></Main>
          <Card></Card>
          <Main nome="Darksiders III" tituloSobre="Sobre o game" sobreGame="Retorne a uma Terra apocalíptica em Darksiders III, um jogo 
          de ação e aventura cheio de pancadaria, onde os jogadores assumem o papel de FURY em sua missão de caçar e eliminar os Sete Pecados 
          Capitais. A mais imprevisível e enigmática dos Quatro Cavaleiros, FURY deve triunfar onde muitos falharam e trazer equilíbrio às 
          forças que assolam a Terra."></Main>
          <Card2></Card2>
          <Main nome="Castlevania: Lords of Shadow 2" tituloSobre="Sobre o game" sobreGame="Drácula, enfraquecido e ansiando libertar-se 
          da imortalidade, deve recuperar seus poderes e derrotar Satã. Uma aventura épica ambientada em um vasto mundo moderno!Acordado 
          após séculos de repouso, enfraquecido e ansiando libertar-se das amarras da imortalidade, Drácula deve recuperar seus poderes e 
          fazer um pacto com a Morte para derrotar Satã e ganhar o descanso eterno. O sangue significará tudo nesta dramática batalha final 
          entre o bem e o mal, na qual Drácula enfrenta seu nêmesis e a incessante busca por vingança de seus descendentes. Jogue como Drácula 
          e descubra o destino do ‘Senhor das Sombras’!"></Main>
          <Card3></Card3>
          <Main nome="Castlevania: Lords of Shadow" tituloSobre="Sobre o game" sobreGame="Castlevania: Lords of Shadow – Ultimate Edition é 
           sombria e vívida recriação da mitologia de Castlevania. É o fim dos dias e a tomada da Terra por poderes malévolos. A aliança com 
           os céus foi ameaçada por uma força sombria e malévola - os misteriosos Senhores das Trevas. Nesta Terra devastada, as almas dos 
           mortos vagam sem conseguir encontrar paz, enquanto criaturas demoníacas espalham caos e morte entre os vivos.Gabriel Belmont é um 
           membro da Irmandade da Luz, um grupo de elite de cavaleiros sagrados que protegem e defendem os inocentes contra o sobrenatural. 
           Sua amada esposa foi brutalmente assassinada pelas forças demoníacas das trevas e sua alma aprisionada pela eternidade. Ao 
           encontrar-se entre os mundos da vida e da morte, ela percebe o terrível risco eminente e guia Gabriel ao seu destino e à esperança 
           de salvação para o mundo.Gabriel deve encontrar os misteriosos Senhores das Trevas para reunir as peças de uma relíquia chamada 
           “Máscara de Deus”, que pode purificar o mundo e tem o poder de trazer os mortos de volta à vida. Ao longo da jornada de Gabriel, 
           os jogadores atravessarão mais de 50 fases desenvolvidas de forma incrível em 3D, enfrentarão mais de 45 inimigos e derrotarão 
           enormes adversários em tempo real com habilidades, poderes e agilidade."></Main>
           <Card4></Card4>
           <Main nome="STAR WARS™ Battlefront™ II" tituloSobre="Sobre o game" sobreGame="Seja o herói na mais incrível experiência de batalha de 
           Star Wars™ com Star Wars™ Battlefront™ II: Celebration Edition! Obtenha o Star Wars Battlefront II e a coleção completa de conteúdos 
           de personalização que podem ser comprados no jogo desde o lançamento até - e incluindo - os itens inspirados em Star Wars™: A ASCENSÃO 
           SKYWALKER™*."></Main>
           <Card5></Card5>
          <Footer></Footer>
          {/* <Button color="danger">Danger!</Button> */}
      </div>
    );
  };


export default App;
