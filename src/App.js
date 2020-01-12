import React, {Fragment} from 'react';
import {Container} from 'react-bootstrap'

import Header from "./components/features/global/Header/default.jsx"
import "./components/features/global/Styles/goblaStyles.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Container fluid={true}>
        <Header/>
      </Container>
    </div>
  );
}

export default App;
