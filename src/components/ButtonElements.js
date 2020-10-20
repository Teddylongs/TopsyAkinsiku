import styled from 'styled-components/macro'

export const CTA = styled.button`
    border: 2px solid white;
    background: transparent;
    color: white;
    transition: all ease 1s;
    font-size: calc(.24vw + 1rem);
    padding: 1rem 1.5rem;
    outline: none;
    transition: all ease 0.4s;
    letter-spacing: .05em;
    margin: 2rem 0 3rem 0;
    font-weight: 800;

    &:hover {
        background: white;
        color: black;
    }
`