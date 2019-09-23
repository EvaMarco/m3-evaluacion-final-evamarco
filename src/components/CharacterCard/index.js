import React from 'react';
import PropTypes from 'prop-types';
import './character_card.scss';

const CharacterCard = props => {
  const {item} = props;
  return(
    <div className="card">
      <div className="char__image">
        <img src={item.image} alt={item.name}/>
      </div>
      <div className="char__info">
        <h2 className="char__name">{item.name}</h2>
        <p className="char__species">{item.species}</p>
      </div>
    </div>
  );
}
CharacterCard.propTypes = {
  item: PropTypes.object.isRequired,
}
export default CharacterCard;