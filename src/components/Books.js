import { useEffect,useState } from "react";

const Books = () => {   

    const [data , setData] = useState([]);

    useEffect(()=>{
        const getData = async() => {
            const apiData = await fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json());
            apiData.sort((a,b)=> a.title > b.title? 1:-1);
            setData(apiData); 
        }
        getData();
    },[]);


    return (
        <>
            <h1>Books<span style={{"color" : "green"}}> Using fetch data</span></h1>
            <table>
            <th>Id</th>
            <th>Title</th>
            <tbody>
            {
                data.map((elem,id) => <tr key={id}><td>{elem.id}</td><td>{elem.title}</td></tr>)
            }
            </tbody>
            </table>
        </>
    )
}

export default Books;