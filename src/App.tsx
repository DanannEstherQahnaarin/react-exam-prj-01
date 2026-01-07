import * as Headers from "./components/header.jsx";
import Button from "./components/button.jsx";
import { ImageBox, ItemBox, ButtonBox } from "./components/container.jsx";
import {Image, ImgDiv} from "./components/image.jsx";

import imageSrc from "./assets/image.png";

export default function App() {
  return (
    <ItemBox>
      <ItemBox>
        <Headers.MainHeader content="Meet Guidebooks" />
      </ItemBox>
      <ItemBox>
        <Headers.SubHeader content="Discover hundreds of local spots recommended by Airbnb hosts" />
      </ItemBox>
      <ImageBox>
        <ImgDiv img={imageSrc} title="San Francisco" />
        <ImgDiv img={imageSrc} title="New York" />
        <ImgDiv img={imageSrc} title="London" />
      </ImageBox>
      <ButtonBox>
        <Button content="See All Guidebooks" />
      </ButtonBox>
      <ItemBox>
        <Headers.MainHeader content="Just for the weekend" />
      </ItemBox>
      <ItemBox>
        <Headers.SubHeader content="Discover new, inspiring places close to home" />
      </ItemBox>
      <ImageBox>
        <ImgDiv img={imageSrc} title="Napa" />
        <ImgDiv img={imageSrc} title="Sonoma" />
        <ImgDiv img={imageSrc} title="San Francisco" />
      </ImageBox>
      <ButtonBox>
        <Button content="See All Destinations" />
      </ButtonBox>
    </ItemBox>
  );
}
