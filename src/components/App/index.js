import React from 'react';
import {getCharacters} from '../../services/getcharacters';
import Home from '../Home';
import CharacterDetail from '../CharacterDetail';
import {Route, Switch} from 'react-router-dom';
import './app.scss';

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
      <div className="app">
        <header className="app__header">
          <h1 className="page__title">Rick And Morty Characters</h1>
        </header>
        <Switch>
            <Route 
              exact path = '/' 
              render = {
                () => {
                  return (
                    <Home 
                      api = {this.state.api} 
                      query = {this.state.query}
                      getUserInput = {this.getUserInput} 
                    />
                  )
                }
              }
            />
            <Route 
              path = '/character/:charId'
              render = {
                (routerProps) => {
                  return (
                    <CharacterDetail 
                      api = {this.state.api} 
                      routerProps = {routerProps}
                    />
                  )
                }
              }
            />
          </Switch>
      </div>
    );
  }
}

export default App;
