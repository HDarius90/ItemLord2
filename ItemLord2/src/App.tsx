import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import InfoPanel from "./components/InfoPanel";
import Market from "./components/Market";
import Pocket from "./components/Pocket";
import Stats from "./components/Stats";
import { AppState } from "./interface";
import { stayDay, toggleMarket, updateMarket } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  const handleStay = () => {
    dispatch(stayDay());
    dispatch(updateMarket());
  };

  const inMarket = useSelector((state: AppState) => state.inMarket);

  const showMarket = () => {
    dispatch(toggleMarket());
  };

  return (
    <>
      <div className="App">
        <div className="mainCont">
          <section>
            <InfoPanel />

            <div className="btnGroup">
              <button>Shipping</button>
              <button>Finances</button>
              <button onClick={showMarket}>Shopping</button>
              <button onClick={handleStay}>Stay Here</button>
              <button>Fly Away</button>
            </div>

            <Stats />
          </section>
          <section className={inMarket ? "" : "isHidden"}>
            <Market />
            <Pocket />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
