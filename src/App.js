import './App.css';
import Form from './components/Form';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <div className="App">
        <Form />
        <Form />
      </div>
    </Provider>
  );
}

export default App;
