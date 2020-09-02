import React from 'react';
import './card3.css';
import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody, Container
  } from 'reactstrap';
import imgRE01 from '../body/imagens/CAS2-01.jpg';
import imgRE02 from '../body/imagens/CAS2-02.jpg';
import imgRE03 from '../body/imagens/CAS2-03.jpg';
  
  const card3 = (props) => {
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
          <CardText className="cardConteudo">Castlevania: Lords of Shadow 2 - Revelations DLC
          Jogue como Alucard neste amplo pacote adicional de Castlevania: Lords of Shadow 2. A 
          envolvente história se amplia ainda mais com o descobrimento de novas ramificações da 
          trama, assim como novos ambientes e quebra-cabeças complexos. </CardText>
          <Button className="btnCard" color="secondary" href="https://store.steampowered.com/app/273153/Castlevania_Lords_of_Shadow_2__Revelations_DLC/" target="_blank">Clica aqui</Button>
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
  
  export default card3;