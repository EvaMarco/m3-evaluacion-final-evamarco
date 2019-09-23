import React from 'react';
import CharacterCard from '../CharacterCard';
import PropTypes from 'prop-types';

const CharacterList = props => {
  const {data} = props;
  return(
      <ul className="list">
        {data.map((item)=>{
          return(
            <li key={item.id}>
              <CharacterCard item = {item}/>
            </li>
          )
        })}
      </ul>
    );
  }

  CharacterList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
export default CharacterList;
