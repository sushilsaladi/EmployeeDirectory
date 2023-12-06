import { useEffect,useState,useReducer } from "react";

const reducer = (state , action) => {
    switch(action.type){
        case "INCREMENT" : {
            return { count : state.count + 1, showText: state.showText}
        }
        case "SHOW_TEXT" : {
            return { count : state.count, showText: !state.showText}
        }
        default : {
            return state;
        }
    }
}


const Increment = () => {
    const [state,dispatch] = useReducer(reducer , { count : 0, showText : false });

    return (
        <div className="container">
            <h1>{state.count}</h1>
            <button onClick={() => {
                dispatch({type : "INCREMENT"});
                dispatch({type : "SHOW_TEXT"});
            }}>
                Click Me!
            </button>
            <div>
                {state.showText && <p>This is a counter component with useReducer</p>}
            </div>
        </div>
    )
}

export default Increment;