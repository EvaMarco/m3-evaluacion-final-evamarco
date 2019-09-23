import React from 'react';
import PropTypes from 'prop-types';
import Filters from '../Filters';
import CharacterList from '../CharacterList';
import './home.scss';

const Home = props => {
  const {api, query, getUserInput, getSelectValue, planets, planet} = props;
return(
  <React.Fragment>
    <div className="filters__container">
      <Filters 
        getUserInput = {getUserInput} 
        query = {query}
        getSelectValue = {getSelectValue}
        planets = {planets}
        planet = {planet}
      />
    </div>
    <ul className="char__list">
      <CharacterList 
        api = {api} 
        query = {query}
        planet = {planet}
      />
    </ul>
  </React.Fragment>
)
}

Home.propTypes = {
  api: PropTypes.arrayOf(PropTypes.object).isRequired, 
  query: PropTypes.string.isRequired, 
  getUserInput: PropTypes.func.isRequired,
  getSelectValue: PropTypes.func.isRequired,
  planets: PropTypes.arrayOf(PropTypes.string).isRequired,
  planet: PropTypes.string.isRequired
}

export default Home;