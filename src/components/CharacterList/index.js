import React from 'react';
import CharacterCard from '../CharacterCard';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const CharacterList = props => {
  const {api, query} = props;
  return(
      <ul className="list">
        {api
          .filter(item => {return item.name.toUpperCase().includes(query.toUpperCase())})
          .map((item)=>{
            return(
              <li key={item.id}>
                <Link to = {`/character/${item.id}`}>
                  <CharacterCard item = {item}/>  
                </Link>
              </li>
            )
          })
        }
      </ul>
    );
  }

  CharacterList.propTypes = {
    api: PropTypes.arrayOf(PropTypes.object).isRequired,
    query: PropTypes.string
  }
export default CharacterList;
