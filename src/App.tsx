import Button from "./components/button.jsx";
import * as Headers from "./components/header.jsx";
import Image from "./components/image.jsx";
import imageSrc from "./assets/image.png";


export default function App() {
  return (
    <main className="main">

      <section className="m-header">
        <Headers.MainHeader content="Meet Guidebooks" />
      </section>
      <section className="s-header">
        <Headers.SubHeader content="Discover hundreds of local spots recommended by Airbnb hosts" />
      </section>
      <section className="image-container">
        <Image img={imageSrc} title="San Francisco" />
        <Image img={imageSrc} title="New York" />
        <Image img={imageSrc} title="London" />
      </section>
      <section className="item-align">
        <Button content="See All Guidebooks" />
      </section>
      <section className="m-header">
        <Headers.MainHeader content="Just for the weekend" />
      </section>
      <section className="s-header">
        <Headers.SubHeader content="Discover new, inspiring places close to home" />
      </section>
      <section className="image-container"></section>
      <section className="item-align">
        <Button content="See All Destinations" />
      </section>
    </main>
  );
}
