import React from 'react';
import { Button } from 'reactstrap';
import Header from './components/header/header';
import Body from './components/body/body';
import Footer from './components/footer/footer';
import './App.css';


  function App (props) {
    return (
      <div className="div">
          <Header></Header> 
          <Body></Body>
          {/* <Footer></Footer> */}
          {/* <Button color="danger">Danger!</Button> */}
      </div>
    );
  };


export default App;
