import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    & p{
        font-size: 18px;
    }
    & span{
        font-weight: bold;
    }
`;

const Price = styled.p`
    font-size: 30px !important;
`;

const Quotation = ({quotation}) => {
    if(Object.keys(quotation).length === 0) return null;
    const{PRICE,HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = quotation;
    console.log(quotation)
    return (
        <Container>
            <Price>El precio es: <span>{PRICE}</span></Price>
            <p>Precio mas alto del día: <span>{HIGHDAY}</span></p>
            <p>Precio mas bajo el día: <span>{LOWDAY}</span></p>
            <p>Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></p>
            <p>Ultima actualización: <span>{LASTUPDATE}</span></p>
        </Container>
    );
}
 
export default Quotation;