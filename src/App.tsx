import * as Gals from "./Gallerys";

export default function App() {
  let name = "Hedy Lamarr";

  return (
    <>
      <h1>{name}'s Todos</h1>
      
      <Gals.Profile />
      <ul
        style={{
          backgroundColor: "black",
          color: "pink",
        }}
      >
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}
