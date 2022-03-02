import './App.css';
import Form from './components/Form';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <div className="App" style={{display:"flex"}}>
        <Form />
        <Form />
      </div>
    </Provider>
  );
}

export default App;
