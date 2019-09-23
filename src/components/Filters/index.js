import React from 'react';
import PropTypes from 'prop-types';
import './filters.scss';

const Filters = props => {
  const {getUserInput, query} = props;
  return (
    <div className = "filters__divs">
      <label htmlFor = "name" className = "input__label"></label>
      <input 
        className = "text__input"
        type = "text" 
        id = "name" 
        placeholder ="Busca por nombre" 
        onChange = {getUserInput}
        value = {query}
      />
    </div>
  )
}

Filters.propTypes = {
  query : PropTypes.string.isRequired,
  getUserInput : PropTypes.func.isRequired,
}
export default Filters;