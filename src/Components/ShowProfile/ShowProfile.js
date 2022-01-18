import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import axios from 'axios';
import ProfileCard from './ProfileCard';
import LowBar from './LowBar';
import ResetBar from '../../ResetBar/ResetBar';

const ShowProfile = () => {

    return (
        <div>
            <ProfileCard/>
            <LowBar />
            <ResetBar />
        </div>
    )
        
}

export default ShowProfile