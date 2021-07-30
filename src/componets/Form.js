import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import useCoin from "../hooks/useCoin";
import useCriptomoneda from "../hooks/useCriptomoneda";
import axios from "axios";
import Error from "./Error";

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;
const Form = ({setData}) => {
  const [criptomo, setCriptomo] = useState([]);
  const [error, setError]= useState(false)
  
  useEffect(() => {
    const run = async () => {
      const resource = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      await axios.get(resource)
        .then((response) => {
          setCriptomo(response.data.Data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    run();
  }, []);

  const optionCoin = [
    { code: "USD", name: "Dolar Estadounidense" },
    { code: "PEN", name: "Sol Peruano" },
    { code: "MXN", name: "Peso Mexicano" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "Libra Esterlina" },
  ];

  const [coin, SelectCoin] = useCoin("Elige tu moneda", "", optionCoin);
  const [cripto, SelectCripto] = useCriptomoneda("Elige tu Criptomoneda", "", criptomo);
  const quote = e =>{
    e.preventDefault();

    if(coin === '' || cripto ===''){
      setError(true);
      return;
    }
    setError(false);
    setData({
      coin: coin,
      criptomoneda: cripto
    })
  }
  return (
    <form onSubmit={quote}>
      {error ? <Error error='Todos los campos son obligatorios'/> : null}
      <SelectCripto/>
      <SelectCoin/>
      <Button type="submit" value="Calcular" />
    </form>
  );
};

export default Form;
