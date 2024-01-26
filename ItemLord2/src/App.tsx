import "./App.css";

function App() {

  return (
    <>
      <div className="App">
        <div className="mainCont">
          <section>
            <div className="InfoPanel" />

            <div className="btnGroup">
              <button>Shipping</button>
              <button>Finances</button>
              <button>Shopping</button>
              <button>Stay Here</button>
              <button>Fly Away</button>
            </div>

            <div className="Stats" />
          </section>
          <section>
            <div className="Market" />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
