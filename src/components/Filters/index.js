import React from 'react';
import PropTypes from 'prop-types';
import './filters.scss';

const Filters = props => {
  const {getUserInput, query, getSelectValue, planets, planet} = props;
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
      <label htmlFor = "houses" className = "input__label"></label>
      <select className = "select__input"name = "houses" id = "houses" onChange={getSelectValue} value={planet}>
        <option value = 'null' >All planets</option>
        {planets.map((item, index) =>  
          <option value = {item} key = {index} > {item} </option>) 
        }
      </select>
    </div>
  )
}

Filters.propTypes = {
  query : PropTypes.string.isRequired,
  getUserInput : PropTypes.func.isRequired,
  getSelectValue: PropTypes.func.isRequired,
  planets: PropTypes.arrayOf(PropTypes.string).isRequired,
  planet: PropTypes.string.isRequired
}
export default Filters;