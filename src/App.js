import "./App.css";
import CardComponent from "./Components/CardComponent";

function App() {
  var data = require("./data.json");

  return (
    <div className="container">
      <section className="cards-section">
        {data.map((d) => (
          <CardComponent key={d.id} {...d}></CardComponent>
        ))}
      </section>
    </div>
  );
}

export default App;
