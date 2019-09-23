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
      query: '',
      planets:[],
      planet: 'null'
    }
    this.getUserInput= this.getUserInput.bind(this); 
    this.getSelectValue= this.getSelectValue.bind(this); 
  }

  fetchCharacters(){
    getCharacters()
      .then(data =>{
        const planets = data.results.map(item =>item.origin.name);
        let setPlanets = [...new Set(planets)]
        this.setState({api:data.results, planets:setPlanets})
        } 
      )
  }

  componentDidMount(){
    this.fetchCharacters()
  }
  getUserInput(event){
    const inputValue = event.currentTarget.value;
    this.setState({query: inputValue});
  }
  getSelectValue(event){
    const selectValue = event.currentTarget.value;
    this.setState({planet: selectValue})
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
                      getSelectValue = {this.getSelectValue}
                      planet = {this.state.planet}
                      planets = {this.state.planets}
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
