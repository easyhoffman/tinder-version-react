import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import axios from 'axios';
import UpBar from '../UpBar/UpBar';
import ShowProfile from '../ShowProfile/ShowProfile';
import ListMatches from '../ListMatches/ListMatches';

const CardCompleteContainer = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  margin: 40px;
`;

const CardComplete = () => {

    return (
        <CardCompleteContainer>
            <UpBar/>
            <ShowProfile/>
            {/* <ListMatches/> */}
        </CardCompleteContainer>
    )
        
}

export default CardComplete