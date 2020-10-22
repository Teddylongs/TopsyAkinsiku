import React from 'react'
import styled from 'styled-components/macro'

export const Spacer = styled.div`
    height: ${props => props.size};
`

export const Container = styled.section`
    width: 100%;
    padding: calc(0.05 * 100vw);
`

export const Content = styled.div`
    width: 100%;
    display: flex;

    @media (max-width: 768px){
        flex-direction: column;
        text-align: center;
    }
`

export const ContentLeft = styled.article`
    min-width: ${props => props.width};
    justify-self: flex-start;
    flex-grow: ${props => props.grow};
`

export const ContentRight = styled.article`
    /* min-width: ${props => props.width}; */
    justify-self: flex-end;
    flex-grow: ${props => props.grow};
`