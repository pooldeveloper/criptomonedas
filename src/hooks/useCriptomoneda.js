import React, { Fragment, useState } from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Selects = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`

const useCriptomoneda = (label, stateInitial, optionCripto) => {
    //State de Hook
    const[cripto, setCripto] = useState(stateInitial);
    const SelectCripto = ()=>(
        //Lo que esta adentro de esto se va  a mostrar por pantalla
        <Fragment>
            <Label>{label}</Label>
            <Selects
                onChange = {e => setCripto(e.target.value)}
                value = {cripto}
            >
                <option value="PE">--Selecciona tu Criptomoneda --</option>
                {optionCripto.map(option =>{
                    const {FullName, Id, Name} = option.CoinInfo;
                    return <option key={Id} value={Name}> {FullName} </option>
                })}

            </Selects>
        </Fragment>
    )
    //Retornar state, interfaz y el que modifica el state
    return[cripto, SelectCripto, setCripto];
}
 
export default useCriptomoneda;