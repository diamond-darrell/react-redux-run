// const
const GREET = 'APP/helloWorld/GREET';

// action creator
export function greet(name) {
  return function(dispatch, getState) {
    return dispatch({
      type: GREET,
      payload: name
    });
  };
}

// initial state
const initialState = {
  name: 'world'
};

// reducer
export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch(type) {
    case GREET:
      const name = !!payload ? payload : initialState.name;
      const greetings = `Hello, ${name}!`;

      return { greetings };

    default:
      return {
        greetings: `Hello, ${state.name}!`
      };
  }
}