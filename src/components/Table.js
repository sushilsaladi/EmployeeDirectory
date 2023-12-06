import { Table } from "react-bootstrap";

const MyTable = ({contacts}) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Telephone</th>
                </tr>
            </thead>
            <tbody>
                {
                    contacts.map((contact,id) => 
                    <tr key={id}>
                        <td>{id + 1}</td>
                        <td>{contact.firstName}</td>
                        <td>{contact.lastName}</td>
                        <td>{contact.telephone}</td>
                    </tr>
                    )
                }
            </tbody>
        </Table>
    )
}

export default MyTable;