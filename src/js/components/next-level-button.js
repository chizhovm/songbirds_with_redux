import React from 'react';
import PropTypes from 'prop-types';

const NextLevelButton = (props) => {

  const { btnNextClassList, nextLevelHandler } = props;

  return (
    <button className={btnNextClassList} type="button" onClick={nextLevelHandler}>
      Next Level
    </button>
  );
};

NextLevelButton.propTypes = {
  btnNextClassList: PropTypes.string.isRequired,
  nextLevelHandler: PropTypes.func.isRequired,
};

export default NextLevelButton;