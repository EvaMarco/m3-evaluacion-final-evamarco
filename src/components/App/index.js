import React from 'react';
import {getCharacters} from '../../services/getcharacters';
import CharacterList from '../CharacterList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api:[]
    }
  }

  fetchCharacters(){
    getCharacters()
      .then(data =>{
        console.log(data.results
          )
      this.setState({api:data.results})    
      } 
      )
  }
  componentDidMount(){
    this.fetchCharacters()
  }
  render() {
    return (
      <div className="App">
        <h1 className="page__title">Rick And Morty Characters</h1>
        <CharacterList data = {this.state.api}/>


      </div>
    );
  }
}

export default App;
