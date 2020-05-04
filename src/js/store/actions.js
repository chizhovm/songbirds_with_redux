const setBirdMark = (result) => ({
  payload: `list-group-item bird-item ${result}`,
  type: 'SET_BIRD_MARK',
});

const setButtonNextActive = (result) => ({
  payload: `${result} btn-next`,
  type: 'SET_BUTTON_NEXT_ACTIVE',
});

const setButtonNextDefault = (classList) => ({
  payload: classList,
  type: 'SET_BUTTON_NEXT_DEFAULT',
});

const setClickedBird = (result) => ({
  payload: result,
  type: 'SET_CLICKED_BIRD',
});

const setClickedBirdDefault = () => ({
  payload: null,
  type: 'SET_CLICKED_BIRD_DEFAULT',
});

const setCurrentLevel = (level) => ({
  payload: level,
  type: 'SET_CURRENT_LEVEL',
});

const setCurrentLevelMarked = () => ({
  payload: true,
  type: 'SET_CURRENT_LEVEL_MARKED',
});

const setCurrentLevelUnmarked = () => ({
  payload: false,
  type: 'SET_CURRENT_LEVEL_UNMARKED',
});

const setGameOver = () => ({
  payload: true,
  type: 'SET_GAME_OVER',
});

const setLevelFinished = () => ({
  payload: true,
  type: 'SET_LEVEL_FINISHED',
});

const setLevelUnfinished = () => ({
  payload: false,
  type: 'SET_LEVEL_UNFINISHED',
});

const setLevelScoreToStore = (result) => ({
  payload: result,
  type: 'SET_LEVEL_SCORE',
});

const setRandomBird = (result) => ({
  payload: result,
  type: 'SET_RANDOM_BIRD',
});

const setScore = (score) => ({
  payload: score,
  type: 'SET_SCORE',
});

const setStateForStore = (state) => ({
  payload: state,
  type: 'SET_STATE_FOR_STORE',
});

export {
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
};