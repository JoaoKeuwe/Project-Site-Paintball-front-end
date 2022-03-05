import Provider from './context/Provider';
import Card from "./components/Card";
// import Radar from "./components/Radar";
// import RadarNivo from "./components/RadarNivo";
// import RadarRechart from "./components/RadarRechart";
// import PieRechart from "./components/PieRechart";

function App() {
  return (
    <Provider>
      <Card/>
    </Provider>
  );
}

export default App;
