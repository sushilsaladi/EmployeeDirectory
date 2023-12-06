import { useRef } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const {setUserName} = useContext(AppContext);
    const navigate = useNavigate();
    const inputRef = useRef(null);
    const handleClick = () => {
        if(inputRef.current.value){
            setUserName(inputRef.current.value);
            navigate("/todo");
        }
    }

    return (
    <>
        <input type="text" ref={inputRef}></input>
        <button onClick={handleClick}>UserName</button>
    </>
    
    );
}

export default Login;