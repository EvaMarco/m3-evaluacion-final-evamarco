import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './character_detail.scss';

const Character = props => {
  const {routerProps, api} = props;
  const charId = parseInt(routerProps.match.params.charId); 
  const selectedChar = api.filter(item => {return(item.id === charId)});

  if(selectedChar[0]){   
    return (
      <Fragment>
        <Link to = '/'><p className="link__anchor">Volver</p></Link>
        <div className="detail__wrapper">       
          <div className="detail__img">
            <img className ="img" src={selectedChar[0].image} alt={selectedChar[0].name}/>
          </div>
          <div className="detail__info">
            <h2 className="char__name-detail">{selectedChar[0].name}</h2>
            <h3 className="char__year-title">Status</h3>
            <p className="char__house">{selectedChar[0].status}</p>
            <h3 className="char__house-title">Origen</h3>
            <p className="char__house">{selectedChar[0].origin.name}</p>
            <h3 className="char__state-title">Episodios</h3>
            <p className="char__episodes">{selectedChar[0].episode.length}</p>
          </div>
        </div>
      </Fragment>
    )
  }
  else{
    return(
      <Fragment>
        <Link to="/" className="app__back">
          Volver al listado
        </Link>
        <p>No tenemos datos de ese personaje.</p>
      </Fragment>
    )
  }
}

Character.propTypes = {
  api: PropTypes.arrayOf(PropTypes.object).isRequired, 
  routerProps: PropTypes.object.isRequired
}

export default Character;
