import './App.css';
import SongList from './components/SongList';
import ThemeToggle from "./components/ThemeToggle";
import ThemeContextProvider from './context/ThemeContext';
import SongContextProvider from './context/SongContext';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <ThemeToggle/>
        <SongContextProvider>

        </SongContextProvider>
        <SongList/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
