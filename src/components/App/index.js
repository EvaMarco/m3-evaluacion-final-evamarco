import React from 'react';
import {getCharacters} from '../../services/getcharacters'

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

        <ul className="list">
          {this.state.api.map((item)=>{
            return(
              <li key={item.id}>
                <div className="Card">
                  <div className="card__image">
                    <img src={item.image} alt={item.name}/>
                  </div>
                  <div className="card__info">
                    <h2 className="char__name">{item.name}</h2>
                    <p className="char__spicies">{item.spicies}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

      </div>
    );
  }
}

export default App;
