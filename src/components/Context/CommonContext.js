// import { createContext, useReducer } from "react";

// export const CommonContexts = createContext();

// const initialState = {
//   toggleNightMode: false,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "TOGGLE_BG":
//       return { ...state, toggleNightMode: true };
//     default:
//       return state;
//   }
// };

// const CommonContextProvider = ({ childern }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const ToggleBackground = () => {
//     dispatch({
//       type: "TOGGLE_BG",
//     });
//   };

//   return (
//     <CommonContexts.Provider value={{ state, dispatch, ToggleBackground }}>
//       {childern}
//     </CommonContexts.Provider>
//   );
// };

// export default CommonContextProvider;
