import React from 'react';
import styled from '@emotion/styled';

const Message = styled.p`
  background-color: #b7322c;
  padding: 10px 5px;
  color: white;
  font-size: 25px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-family: 'Bebas Neue', cursive;
`;

const Error  = ({error}) => {
    return (
        <Message>{error}</Message>
    );
}
 
export default Error ;