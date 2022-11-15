import './App.css';
import Konyv from './Publikus/Konyv';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Konyváruház
      </header>
      <article>
        <Konyv />
        <Konyv />
        <Konyv />
        <Konyv />
        <Konyv />
        <Konyv />
      </article>
      <footer>
      @Wéber Krisztián
      </footer>
    </div>
  );
}

export default App;
