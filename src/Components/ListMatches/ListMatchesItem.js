import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import axios from 'axios';

const ListContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  margin: 4px;
`;

const PersonListContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  margin: 4px;
`;

const ListMatchesItem = () => {

    return (
        <ListContainer>
            <PersonListContainer>
                <img 
                src = {'https://picsum.photos/20/20'}
                />
                <p>Match Person's Name</p>
            </PersonListContainer>
        </ListContainer>
    )
        
}

export default ListMatchesItem