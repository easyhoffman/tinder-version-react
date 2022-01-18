import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import axios from 'axios';
import ListMatchesItem from './ListMatchesItem';


const ListMatches = () => {

    return (
        <div>
            <ListMatchesItem />
            <ListMatchesItem />
            <ListMatchesItem />
            <ListMatchesItem />
            <ListMatchesItem />
        </div>
    )
        
}

export default ListMatches