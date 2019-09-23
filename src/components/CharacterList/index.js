import React from 'react';
import CharacterCard from '../CharacterCard';
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


export default CharacterList;
