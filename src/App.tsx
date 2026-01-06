import "./App.css";
import * as Gals from "./Gallerys";

export default function App() {
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <Gals.Profile />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}
