export default function navigation(
  state = {
    palette: 'light',
    temperature: 'celsius'
  },
  action
) {
  switch (action.type) {
    case 'SET_PALETTE':
      return {
        ...state,
        palette: action.value
      };
      case 'SET_TEMPERATURE':
        return {
          ...state,
          temperature: action.value
        };
    default:
      return state;
  }
}
