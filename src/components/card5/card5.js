import React from 'react';
import './card5.css';
import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody, Container
  } from 'reactstrap';
import imgRE01 from '../body/imagens/BATLE-01.jpg';
import imgRE02 from '../body/imagens/BATLE02.png';
import imgRE03 from '../body/imagens/BATLE03.jpg';
  
  const card5 = (props) => {
    return (
    <Container>
      <CardColumns className="cardColum">
        <Card>
          <CardImg top width="100%" src={imgRE01} alt="Card image cap" />
          <CardBody>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={imgRE02} alt="Card image cap" />
        </Card>
        <Card>
        <Card body inverse color="warning">
          <CardTitle className="cardConteudo">ULTIMA DLC LANÇADA</CardTitle>
          <CardText className="cardConteudo">A Celebration Edition contém:
          Jogo básico — Incluindo todas as atualizações gratuitas passadas e futuras do jogo
          Mais de 25 aparências de heróis — Incluindo seis aparências Lendárias e aparências para Rey, Finn e Kylo Ren, inspiradas em Star Wars: A ASCENSÃO SKYWALKER
          Mais de 125 aparências de soldados e reforços
          Mais de 100 emotes e falas de heróis e soldados
          Mais de 70 poses de vitória de heróis e soldados. </CardText>
          <Button className="btnCard" color="secondary" href="https://store.steampowered.com/app/1237950/STAR_WARS_Battlefront_II/" target="_blank">Clica aqui</Button>
        </Card>
        </Card>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardTitle className="cardConteudo2">COMPRAR JOGO</CardTitle>
          <CardText className="cardConteudo2">Adquira agora mesmo seu o jogo!</CardText>
          <Button className="btnCard" href="https://store.steampowered.com/app/1237950/STAR_WARS_Battlefront_II/" target="_blank">Steam</Button>
        </Card>
        <Card>
          <CardImg top width="100%" src={imgRE03} alt="Card image cap" />
        </Card>
      </CardColumns>
    </Container>
    );
  };
  
  export default card5;