import React from 'react';
import CharacterCard from '../CharacterCard';
import PropTypes from 'prop-types';

const CharacterList = props => {
  const {data, query} = props;
  return(
      <ul className="list">
        {data
          .filter(item => {return item.name.toUpperCase().includes(query.toUpperCase())})
          .map((item)=>{
            return(
              <li key={item.id}>
                <CharacterCard item = {item}/>
              </li>
            )
          })
        }
      </ul>
    );
  }

  CharacterList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    query: PropTypes.string
  }
export default CharacterList;
