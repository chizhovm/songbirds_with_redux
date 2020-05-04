import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AnswerSection from './components/answer-section';
import Header from './components/header';
import GameOver from './components/game-over';
import RandomBird from './components/random-bird';

export default class App extends Component {
  constructor(props) {
    super(props);
    const { birdHandler, newGameHandler, nextLevelHandler } = this.props;
    this.birdHandler = birdHandler.bind(this);
    this.newGameHandler = newGameHandler.bind(this);
    this.nextLevelHandler = nextLevelHandler.bind(this);
  }

  render() {

    const {
      btnNextClassList, clickedBird, currentLevel,
      gameOver, levels, levelFinished, randomBird, score,
    } = this.props;

    if (gameOver) {
      return (
        <>
          <Header
            score={score}
            levels={levels}
          />
          <GameOver
            score={score}
            newGameHandler={this.newGameHandler}
          />
        </>
      );
    }
    return (
      <>
        <Header
          score={score}
          levels={levels}
        />
        <RandomBird
          currentLevel={currentLevel}
          levels={levels}
          levelFinished={levelFinished}
          randomBird={randomBird}
        />
        <AnswerSection
          btnNextClassList={btnNextClassList}
          clickedBird={clickedBird}
          level={levels[currentLevel]}
          nextLevelHandler={this.nextLevelHandler}
          birdHandler={this.birdHandler}
        />
      </>
    );
  }
}

App.propTypes = {
  birdHandler: PropTypes.func.isRequired,
  btnNextClassList: PropTypes.string.isRequired,
  clickedBird: PropTypes.number,
  currentLevel: PropTypes.number.isRequired,
  gameOver: PropTypes.bool.isRequired,
  levelFinished: PropTypes.bool.isRequired,
  levels: PropTypes.arrayOf(
    PropTypes.shape({
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
    }),
  ).isRequired,
  newGameHandler: PropTypes.func.isRequired,
  nextLevelHandler: PropTypes.func.isRequired,
  randomBird: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

App.defaultProps = {
  clickedBird: null,
};