import logo from './logo.svg';
import { Button } from '@material-ui/core'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
        </p>
       
     React 3K sl
     <Button size='small' variant='contained' color='secondary'>
       Material UI Test button
     </Button>
      </header>
    </div>
  );
}

export default App;
