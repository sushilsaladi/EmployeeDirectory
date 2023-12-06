import axios from "axios";
import { useEffect,useState } from "react";


const Home = () => {
    const [firstEmail,setFirstEmail] = useState("");

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                console.log("api call");
                setFirstEmail(response.data[0].email);
            });
    },[]);
    return (
        <h1>Home <span style={{"color" : "red"}}> with Axios</span>
            <span style={{"color" : "green"}}>{firstEmail}</span>
        </h1>
    )
}

export default Home;