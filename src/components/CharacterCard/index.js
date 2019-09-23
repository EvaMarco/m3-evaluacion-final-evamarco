import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = props => {
  const {item} = props;
  return(
    <div className="Card">
      <div className="card__image">
        <img src={item.image} alt={item.name}/>
      </div>
      <div className="card__info">
        <h2 className="char__name">{item.name}</h2>
        <p className="char__spicies">{item.spicies}</p>
      </div>
    </div>
  );
}
CharacterCard.propTypes = {
  item: PropTypes.object.isRequired,
}
export default CharacterCard;