import React from 'react';
import CharacterCard from '../CharacterCard';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './character_list.scss';

const CharacterList = props => {
  const {api, query, planet} = props;
  return(
        api
          .filter(item => {return item.name.toUpperCase().includes(query.toUpperCase())})
          .filter(item => {if(planet=== 'null'){return(item)}else{return item.origin.name.toUpperCase().includes(planet.toUpperCase())}})
          .map((item)=>{
            return(
              <li key={item.id}>
                <Link to = {`/character/${item.id}`}>
                  <CharacterCard item = {item}/>  
                </Link>
              </li>
            )
          })
        
    );
  }

  CharacterList.propTypes = {
    api: PropTypes.arrayOf(PropTypes.object).isRequired,
    query: PropTypes.string,
    planet: PropTypes.string.isRequired
  }
export default CharacterList;
