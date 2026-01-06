import styled from "styled-components";

const ImageBox = styled.image`
  object-fit: cover;
  height: 100%;
  width: 100%;
`

export default function Image({ title, img }) {
  return (
    <div>
      <ImageBox src={img} alt={title}/>
      <div>{title}</div>
    </div>
  );
}

