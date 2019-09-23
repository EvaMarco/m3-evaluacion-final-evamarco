import React from 'react';
import PropTypes from 'prop-types';
import Filters from '../Filters';
import CharacterList from '../CharacterList';
import './home.scss';

const Home = props => {
  const {api, query, getUserInput} = props;
return(
  <React.Fragment>
    <div className="filters__container">
      <Filters 
        getUserInput = {getUserInput} 
        query = {query}
      />
    </div>
    <ul className="char__list">
      <CharacterList 
        api = {api} 
        query = {query}
      />
    </ul>
  </React.Fragment>
)
}

Home.propTypes = {
  api: PropTypes.arrayOf(PropTypes.object).isRequired, 
  query: PropTypes.string.isRequired, 
  getUserInput: PropTypes.func.isRequired,
}

export default Home;