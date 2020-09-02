import React from 'react';
import './card.css';
import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody, Container
  } from 'reactstrap';
import imgRE01 from '../body/imagens/RE01.jpg';
import imgRE02 from '../body/imagens/RE02.jpg';
import imgRE03 from '../body/imagens/RE03.jpg';
  
  const card = (props) => {
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
          <CardText className="cardConteudo">Nova campanha: Paciente 2923
            Descubra as origens dos "Sonhadores" e a conexão desses seres com a terrível Raiz 
            nesta nova campanha, que retoma a história de Remnant: From the Ashes com uma expedição 
            ao Setor Primário e a vários lugares novos. </CardText>
          <Button className="btnCard" color="secondary" href="https://store.steampowered.com/app/1344680/Remnant_From_the_Ashes__Subject_2923/" target="_blank">Clica aqui</Button>
        </Card>
        </Card>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardTitle className="cardConteudo2">COMPRAR JOGO</CardTitle>
          <CardText className="cardConteudo2">Adquira agora mesmo seu o jogo!</CardText>
          <Button className="btnCard" href="https://store.steampowered.com/app/617290/Remnant_From_the_Ashes/" target="_blank">Steam</Button>
        </Card>
        <Card>
          <CardImg top width="100%" src={imgRE03} alt="Card image cap" />
        </Card>
      </CardColumns>
    </Container>
    );
  };
  
  export default card;