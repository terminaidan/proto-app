import React from 'react'
import styled from 'styled-components'
import Wave from './Wave';

const SectionGroup = styled.div `
    background: url(${props => props.image});
    height: 820px;
    background-size: cover;
    display: flex;
    flex-direction: column;
    position: relative;
`
const SectionTop = styled.div `
    display: flex;
    flex-grow: 1;
    max-width: 800px;
    margin: 0 auto;
    padding-top: 150px;
    
`
  

const SectionLogo = styled.img `
    align-self: center;
    height: 128px;
    margin: 0 auto;
`

const SectionTextGroup = styled.div `
    display: flex;
    flex-grow: 1;
    flex-direction; row;
    justify-content: space-around;
    margin: 40px;
    
    max-width: 800px;
    margin: 0 auto;
    padding-bottom: 150px;

    @media (max-width: 720px) {
        flex-direction: column;
    }
    
`

const SectionTitle = styled.h3 `
    color: white;
    font-size: 60px;
    margin: 0;
    line-height: 1.2;
    margin: 16px;

    @media(max-width: 720px) {
        text-align: center;
        font-size: 40px;
    }

`

const SectionText = styled.p `
    color: white;
    margin: 16px;
    @media(max-width: 720px) {
        text-align: center;
    }
    
`

const WaveBottom = styled.div `
    position: absolute;
    width: 100%;
    bottom: -6px;
`
const WaveTop = styled.div `
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg);
`

const Section = props => (
    <SectionGroup image={props.image}>
        <WaveTop><Wave /></WaveTop>
       <WaveBottom><Wave /></WaveBottom>
        <SectionTop>
            <SectionLogo src={props.logo} />
        </SectionTop>
        <SectionTextGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTextGroup>
    </SectionGroup>
)

export default Section