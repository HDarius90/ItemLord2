import "./App.css";
import InfoPanel from "./components/InfoPanel";
import Market from "./components/Market";
import Pocket from "./components/Pocket";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <div className="App">
        <div className="mainCont">
          <section>
            <InfoPanel />

            <div className="btnGroup">
              <button>Shipping</button>
              <button>Finances</button>
              <button>Shopping</button>
              <button>Stay Here</button>
              <button>Fly Away</button>
            </div>

            <Stats />
          </section>
          <section>
            <Market />
            <Pocket />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
