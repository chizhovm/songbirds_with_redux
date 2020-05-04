import React from 'react';
import PropTypes from 'prop-types';
import Answer from './answer';
import BirdInfo from './bird-info';
import NextLevelButton from './next-level-button';

const AnswerSection = (props) => {
  const {
 birdHandler, btnNextClassList, clickedBird, level, nextLevelHandler,
} = props;
  return (
    <div className="row">
      <Answer
        birdHandler={birdHandler}
        level={level}
      />
      <BirdInfo
        clickedBird={level.data[clickedBird]}
      />
      <NextLevelButton
        btnNextClassList={btnNextClassList}
        nextLevelHandler={nextLevelHandler}
      />
    </div>
  );
};

AnswerSection.propTypes = {
  birdHandler: PropTypes.func.isRequired,
  btnNextClassList: PropTypes.string.isRequired,
  clickedBird: PropTypes.number,
  level: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        bird: PropTypes.string,
        birdClasslist: PropTypes.string,
        description: PropTypes.string,
        latin: PropTypes.string,
        picture: PropTypes.string,
        sound: PropTypes.string,
      }),
    ),
    marked: PropTypes.bool,
    name: PropTypes.string,
    score: PropTypes.number,
  }).isRequired,
  nextLevelHandler: PropTypes.func.isRequired,
};

AnswerSection.defaultProps = {
  clickedBird: null,
};

export default AnswerSection;