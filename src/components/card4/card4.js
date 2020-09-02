import React from 'react';
import './card4.css';
import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody, Container
  } from 'reactstrap';
import imgRE01 from '../body/imagens/CAS-01.jpg';
import imgRE02 from '../body/imagens/CAS-02.png';
import imgRE03 from '../body/imagens/CAS-03.jpg';
  
  const card4 = (props) => {
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
          <CardText className="cardConteudo">Resurrection – DLC
          Resurrection, que ocorre após a conclusão de Reverie, revela o destino de Gabriel e do clã Belmont.
           Gabriel deve enfrentar um macabro demônio conhecido apenas como ‘O Esquecido’, que se libertou de 
           sua antiga prisão. </CardText>
          <Button className="btnCard" color="secondary" href="https://store.steampowered.com/app/234080/Castlevania_Lords_of_Shadow__Ultimate_Edition/" target="_blank">Clica aqui</Button>
        </Card>
        </Card>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardTitle className="cardConteudo2">COMPRAR JOGO</CardTitle>
          <CardText className="cardConteudo2">Adquira agora mesmo seu o jogo!</CardText>
          <Button className="btnCard" href="https://store.steampowered.com/app/234080/Castlevania_Lords_of_Shadow__Ultimate_Edition/" target="_blank">Steam</Button>
        </Card>
        <Card>
          <CardImg top width="100%" src={imgRE03} alt="Card image cap" />
        </Card>
      </CardColumns>
    </Container>
    );
  };
  
  export default card4;