import styled from "styled-components";

const ImageContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 10px;
`

const Container = styled.div`
    padding: 0px 150px;
    display: grid;
    grid-template-columns: auto;
    column-gap: 10px;
    row-gap: 5px;
`

const ButtonContainer = styled.div`
    display: block;
    margin: 0 auto;
    text-align: center;
`

export function ItemBox({ children }) {
    return <Container>{children}</Container>;
}

export function ImageBox({ children }) {
    return <ImageContainer>{children}</ImageContainer>;
}

export function ButtonBox({ children }) {
    return <ButtonContainer>{children}</ButtonContainer>;
}