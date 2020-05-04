import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import lodash from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/app';
import './css/index.scss';
import DEFAULT_LEVELS from './js/data/data';

import {
  ADDER,
  BIRD_COUNT,
  DEFAULT_SCORE,
  DEFAULT_BTN_NEXT_CLASSLIST,
  DEFAULT_BIRD_CLASSLIST,
  START_LEVEL,
  FINISH_LEVEL,
  LEVEL_SCORE,
} from './js/data/default_values';

import {
  setLevelScore,
  setBirdClassList,
  setFirstLevelMarker,
  getRandomBird,
} from './js/utilites';

import {
  setBirdMark,
  setButtonNextActive,
  setButtonNextDefault,
  setClickedBird,
  setClickedBirdDefault,
  setCurrentLevel,
  setCurrentLevelUnmarked,
  setCurrentLevelMarked,
  setGameOver,
  setLevelFinished,
  setLevelUnfinished,
  setLevelScoreToStore,
  setRandomBird,
  setScore,
  setStateForStore,
} from './js/store/actions';

import reducer from './js/store/reducers';

DEFAULT_LEVELS.map((level, index) => {
  setLevelScore(level, LEVEL_SCORE);
  setFirstLevelMarker(level, index);
  setBirdClassList(level, DEFAULT_BIRD_CLASSLIST);
  return level;
});

const DEFAULT_STATE = {
  btnNextClassList: DEFAULT_BTN_NEXT_CLASSLIST,
  clickedBird: null,
  currentLevel: START_LEVEL,
  gameOver: false,
  levelFinished: false,
  levels: lodash.cloneDeep(DEFAULT_LEVELS),
  randomBird: getRandomBird(BIRD_COUNT),
  score: DEFAULT_SCORE,
};

const store = createStore(reducer, lodash.cloneDeep(DEFAULT_STATE));

const birdHandler = (level, index) => {
  const { levelFinished, randomBird } = store.getState();
  const clickedBird = index;
  store.dispatch(setClickedBird(clickedBird));

  if (randomBird === index) {
    store.dispatch(setBirdMark('success'));
    store.dispatch(setButtonNextActive(DEFAULT_BTN_NEXT_CLASSLIST));
    store.dispatch(setLevelFinished());
  } else {
    if (!levelFinished && (level.data[clickedBird].birdClassList === DEFAULT_BIRD_CLASSLIST)) {
      store.dispatch(setLevelScoreToStore(level.score - ADDER));
    }
    store.dispatch(setBirdMark('error'));
  }
};

// eslint-disable-next-line max-statements
const nextLevelHandler = () => {
  const {
    levels, levelFinished, score, currentLevel,
  } = store.getState();

  if (levelFinished) {
    store.dispatch(setLevelUnfinished());
    store.dispatch(setScore(score + levels[currentLevel].score));
    store.dispatch(setCurrentLevelUnmarked());
    if (currentLevel === FINISH_LEVEL) {
      store.dispatch(setGameOver());
    } else {
      store.dispatch(setCurrentLevel(currentLevel + ADDER));
      store.dispatch(setCurrentLevelMarked());
    }

    store.dispatch(setButtonNextDefault(DEFAULT_BTN_NEXT_CLASSLIST));
    store.dispatch(setClickedBirdDefault());
    store.dispatch(setRandomBird(getRandomBird(BIRD_COUNT)));
  }
};

const newGameHandler = () => {
  const state = lodash.cloneDeep(DEFAULT_STATE);
  store.dispatch(setStateForStore(state));
};

const putStateToProps = (state) => {

  return {
    birdHandler,
    newGameHandler,
    nextLevelHandler,
    ...state,
  };
};

const WrappedMainComponent = connect(putStateToProps)(App);

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <WrappedMainComponent />
  </Provider>, root,
);