import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  let cssClass = ['calc'];
  const {btname, wide, color} = props;
  if (wide) {
    cssClass.push('basis50');
  }
  if (color) {
    cssClass.push(color);
  }
  return (
    <button className={cssClass.join(' ')} type="button">
      {btname}
    </button>
  );
};

Button.propTypes = {
  btname: PropTypes.string.isRequired,
  wide: PropTypes.number,
  color: PropTypes.string,
};

export default Button;
