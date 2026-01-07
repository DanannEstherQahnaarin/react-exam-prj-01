import styled from "styled-components";

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const ImageBox = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  display: block;
`



const ImageText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1.0rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px gray;
  pointer-events: none;
`
const ImageDiv = styled.div`
  background: url(${props => props.img});
  height: 200px;
  background-size: cover;
  display: grid;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 100px;
  font-size: 1.3rem;
`

export function ImgDiv({ img, title }){
  return (
    <ImageDiv img={img}>
      <label>{title}</label>
    </ImageDiv>
  )
}


export function Image({ img, title }) {
  return (
    <ImageWrapper>
      <ImageBox src={img} />
      <ImageText>{title}</ImageText>
    </ImageWrapper>
  )
}

