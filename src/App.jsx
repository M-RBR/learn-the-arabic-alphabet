import data from "./data/arabic_letters.json";
import { useState } from "react";
import FlipCards from "./Components/FlipCards";

function App() {
  const [letters, setLetters] = useState(data);

  return (
    <div>
      <h1>Learn the Arabic alphabet</h1>

      <div>
        <FlipCards letters={letters} />
      </div>
    </div>
  );
}

export default App;
