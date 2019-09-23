import React from 'react';
import {getCharacters} from '../../services/getcharacters';
import CharacterList from '../CharacterList';
import Filters from '../Filters';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api:[],
      query: ''
    }
    this.getUserInput= this.getUserInput.bind(this); 
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
  getUserInput(event){
    const inputValue = event.currentTarget.value;
    console.log(inputValue)
    this.setState({query: inputValue});
  }
  render() {
    return (
      <div className="App">
        <h1 className="page__title">Rick And Morty Characters</h1>
        <Filters getUserInput={this.getUserInput} query={this.state.query}/>
        <CharacterList data = {this.state.api} query={this.state.query}/>
      </div>
    );
  }
}

export default App;
