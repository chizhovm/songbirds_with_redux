/* eslint-disable complexity */
const reducer = (state, action) => {

  const { clickedBird, currentLevel, levels } = state;

  switch (action.type) {
    case 'SET_BIRD_MARK':
      levels[currentLevel].data[clickedBird].birdClassList = action.payload;
      return { ...state, levels };
    case 'SET_BUTTON_NEXT_ACTIVE':
      return { ...state, btnNextClassList: action.payload };
      case 'SET_BUTTON_NEXT_DEFAULT':
      return { ...state, btnNextClassList: action.payload };
    case 'SET_CLICKED_BIRD':
      return { ...state, clickedBird: action.payload };
    case 'SET_CLICKED_BIRD_DEFAULT':
      return { ...state, clickedBird: action.payload };
    case 'SET_CURRENT_LEVEL':
      return { ...state, currentLevel: action.payload };
    case 'SET_CURRENT_LEVEL_MARKED':
      levels[currentLevel].marked = action.payload;
      return { ...state, levels };
    case 'SET_CURRENT_LEVEL_UNMARKED':
      levels[currentLevel].marked = action.payload;
      return { ...state, levels };
    case 'SET_GAME_OVER':
      return { ...state, gameOver: action.payload };
    case 'SET_LEVEL_FINISHED':
      return { ...state, levelFinished: action.payload };
    case 'SET_LEVEL_UNFINISHED':
      return { ...state, levelFinished: action.payload };
    case 'SET_LEVEL_SCORE':
        levels[currentLevel].score = action.payload;
      return { ...state, levels };
    case 'SET_RANDOM_BIRD':
      return { ...state, randomBird: action.payload };
    case 'SET_SCORE':
      return { ...state, score: action.payload };
    case 'SET_STATE_FOR_STORE':
      return action.payload;
    default: null;
  }
  return state;
};

export default reducer;