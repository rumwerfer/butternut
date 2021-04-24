import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/MainComponent';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Main />
    </BrowserRouter>
  );
}

export default App;
