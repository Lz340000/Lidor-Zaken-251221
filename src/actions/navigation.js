
export const setPalette = palette => {
    return async dispatch => {
        dispatch({type: 'SET_PALETTE', value: palette})
    };
}

export const setTemperature = tempature => {
    return async dispatch => {
        dispatch({type: 'SET_TEMPERATURE', value: tempature})
    };
}
