import { useDispatch } from 'react-redux';
import './App.css';
import Market from './components/Market';
import Pocket from './components/Pocket';
import Stats from './components/Stats';
import { stayDay, updateMarket } from './redux/actions';
import InfoPanel from './components/info-panel/info-panel.component.';
import Button from './components/button/button.component';
import Headline from './routes/headline/headline.component';
import { Route, Routes } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();

  const handleStay = () => {
    dispatch(stayDay());
    dispatch(updateMarket());
  };

  const GameApp = () => {
    return (
      <>
        <div className="App">
          <div className="mainCont">
            <section>
              <InfoPanel />

              <div className="btnGroup">
                <Button onClick={() => console.log('Shipping clicked')}>
                  Shipping
                </Button>
                <Button onClick={() => console.log('Finances clicked')}>
                  Finances
                </Button>
                <Button onClick={() => console.log('Shopping clicked')}>
                  Shopping
                </Button>
                <Button onClick={handleStay}>Stay Here</Button>
                <Button onClick={() => console.log('Market clicked')}>
                  Market
                </Button>
                <Button onClick={() => console.log('Fly Away clicked')}>
                  Fly Away
                </Button>
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
  };

  return (
    <Routes>
      <Route path="/" element={<Headline />}>
        <Route index element={<GameApp />} />
        {/* <Route path="shop/*" element={<Shop />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
