
import { useState } from 'react';
import './App.css';
import { AppTheme } from './models/models';

function App() {
  function onClick(){
    theme === AppTheme.LIGHT ? setTheme(AppTheme.DARK) : setTheme(AppTheme.LIGHT)
  }

  const [theme, setTheme] = useState(AppTheme.LIGHT)

  return (
    <div className={"App " + theme}>
      <button onClick={onClick}>Theme</button>
    </div>
  );
}

export default App;
