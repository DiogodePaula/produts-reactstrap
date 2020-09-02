import React from 'react';
import './card2.css';
import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody, Container
  } from 'reactstrap';
import imgRE01 from '../body/imagens/DARK01.jpg';
import imgRE02 from '../body/imagens/DARK02.jpg';
import imgRE03 from '../body/imagens/DARK03.jpg';
  
  const card2 = (props) => {
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
          <CardText className="cardConteudo">Darksiders III - Keepers of the Void
          Em uma missão dada por Vulgrim, Fury deve viajar até as Buracos de Serpente para eliminar uma antiga ameaça 
          que lá reside. Será a chance de Fury provar seu poder com novos locais, desafios e inimigos. Como recompensa, 
          ela pode desbloquear todas as novas formas de arma para os Abismos. </CardText>
          <Button className="btnCard" color="secondary" href="https://store.steampowered.com/app/889903/Darksiders_III__Keepers_of_the_Void/" target="_blank">Clica aqui</Button>
        </Card>
        </Card>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardTitle className="cardConteudo2">COMPRAR JOGO</CardTitle>
          <CardText className="cardConteudo2">Adquira agora mesmo seu o jogo!</CardText>
          <Button className="btnCard" href="https://store.steampowered.com/app/606280/Darksiders_III/" target="_blank">Steam</Button>
        </Card>
        <Card>
          <CardImg top width="100%" src={imgRE03} alt="Card image cap" />
        </Card>
      </CardColumns>
    </Container>
    );
  };
  
  export default card2;