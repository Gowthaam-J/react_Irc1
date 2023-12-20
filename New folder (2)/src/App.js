
import './css/App.css';
// import Navigation from './components/Navigation';
// import HOC from './components/HOC';
import {ResponsiveAppBar, RowRadioButtonsGroup} from './components/Home';
function App() {
  // const HOComponent=HOC(Navigation)
  return (

    <div className="App">
      <ResponsiveAppBar/>
      <RowRadioButtonsGroup/>

      {/* <HOComponent/>   */}
    </div>
  );
}

export default App;
