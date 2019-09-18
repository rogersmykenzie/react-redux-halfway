import React from 'react';
import CharacterList from './components/CharacterList';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="App">
          <input placeholder="Favorite Character" />
        </div>
        <CharacterList />
      </div>
    )
  }
}

export default App;