import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import image from "./cryptomonedas.png";
import Form from "./componets/Form";
import Quotation from "./componets/Quotation";
import Spinner from "./componets/Spinner";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;
const Image = styled.img`
  max-width: 100%;
`;
const H1 = styled.h1`
  color: #fff;
  text-align: left;
  font-family: "Bebas Neue", cursive;
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 50px;
  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  const[ data, setData] = useState({
    coin:'',
    criptomoneda:''
  })
  const{coin, criptomoneda} = data;
  
  const[ quotation, setQuotation] = useState('')
  const[ showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    if(coin ==='') return;
    const run = async ()=>{
      const resource = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${coin}`;
      const result = await axios.get(resource);
      setShowSpinner(true);
      setTimeout(() => {
        setQuotation(result.data.DISPLAY[criptomoneda][coin]);
        setShowSpinner(false)
      }, 3000);
    }
    run();
  }, [coin, criptomoneda])

  const component = (showSpinner) ? <Spinner/> : <Quotation quotation={quotation}/>
  return (
    <div className="App">
      <Container>
        <Image src={image} alt="imagen criptomoneda" />
        <div>
          <H1>Cotiza criptomonedas al instante</H1>
          <Form
            setData={setData}
          />
          {
            component
          }
        </div>
      </Container>
    </div>
  );
}

export default App;
