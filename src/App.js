import React from 'react';
import {connect} from 'react-redux';
import {updateFavShow} from './redux/reducers/showReducer';
import CharacterList from './components/CharacterList';
import './App.css';

class App extends React.Component {

  handleFavShow = e => {
    this.props.updateFavShow(e.target.value);
  }
  
  render() {
    console.log(this.props);
    return (
      <div>
        <input placeholder='Favorite Show' onChange={this.handleFavShow} />
        <h1>Favorite Show: {this.props.favShow}</h1>
        <CharacterList />
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  console.log(reduxState)
  return {
    favShow: reduxState.showReducer.favShow
  }
}

export default connect(mapStateToProps, { updateFavShow })(App);