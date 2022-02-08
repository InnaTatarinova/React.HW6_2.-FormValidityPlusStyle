import styled, { css } from 'styled-components';


export const Input = styled.input`
border: 3px blue solid;

${props => props.primary 
    && css`
border: 3px red solid;
`}

`;