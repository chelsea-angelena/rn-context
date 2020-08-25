// import React, { useReducer } from 'react';
// import { View, Text } from 'react-native';

// export default (reducer, actions, initalState) => {
// 	const Context = React.createContext();
// 	const Provider = ({ children }) => {
// 		const [state, dispatch] = useReducer(reducer, initialState);
// const boundActions = {};
// for(let key in actions) {
//     boundActions[key] = actions[key](dispatch)
// }
// 		return (
// 			<Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>
// 		);
// 	};
// 	return { Context, Provider };
// };

//reusable function to automate setting up conext
//need action objects to call dispatch
import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions === { addBlogPost: (dispatch) => { return () => {} } }
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
