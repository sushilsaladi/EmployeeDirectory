import { useState } from "react";
import MyForm from "./Form";
import MyTable from "./Table";
import { useRef } from "react";

const initialForm = {
    "firstName" : "",
    "lastName" : "",
    "telephone" : ""
}
//Uncontrolled Component : State updated by its own internal State. 
const Telephone = () => {
    const [form, setForm] = useState(initialForm);
    const [contacts , setcontacts] = useState([]);
    const inputRef = useRef(null);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = () => {
        setcontacts([...contacts,form]);
        setForm(initialForm);
        console.log("inputRef",inputRef);
        inputRef.current.reset();
    }   
    
    return (
        <div className="form-container mt-3">
            <div className="form">
                <MyForm handleChange={handleChange} handleSubmit={handleSubmit} inputRef={inputRef}></MyForm>
            </div>
            <div className="directory mt-3">
                <MyTable contacts={contacts}></MyTable>
            </div>
        </div>
    )
}

export default Telephone;