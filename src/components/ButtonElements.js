import styled from 'styled-components/macro'

export const CTA = styled.a`
    max-width: fit-content;
    display: block;
    border: 2px solid ${props => props.color};
    background: transparent;
    color:  ${props => props.color};
    transition: all ease 1s;
    font-size: calc(.24vw + 1rem);
    padding: 1.2rem 1.5rem;
    outline: none;
    transition: all ease 0.4s;
    letter-spacing: .05em;
    margin: 2rem 0 2rem 0;
    font-family:  abril-fatface, serif;
    

    &:hover {
        background:  ${props => props.color};
        color: ${props => props.color !== 'white' ? 'white': 'black'};
    }
`