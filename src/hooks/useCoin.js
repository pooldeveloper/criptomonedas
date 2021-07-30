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

const useCoin = (label, stateInitial, optionCoin) => {
    //State de Hook
    const[coin, setCoin] = useState(stateInitial);

    const SelectCoin = ()=>(
        //Lo que esta adentro de esto se va  a mostrar por pantalla
        <Fragment>
            <Label>{label}</Label>
            <Selects
                onChange = {e => setCoin(e.target.value)}
                value = {coin}
            >
                <option value="PE">--Selecciona tu Moneda--</option>
                {optionCoin.map(option =>{
                    const{name, code} = option;
                    return <option key={code} value={code}> {name}</option>
                })}

            </Selects>
        </Fragment>
    )
    //Retornar state, interfaz y el que modifica el state
    return[coin, SelectCoin, setCoin];
}
 
export default useCoin;