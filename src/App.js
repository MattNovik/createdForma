import './App.scss';
import FormCreated from './components/FormCreated';

function App() {
  return (
    <div className="App">
      <FormCreated jsonData={document.querySelector('#root').dataset.info} />
    </div>
  );
}

export default App;
