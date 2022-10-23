import { useEffect, useState } from "react";
import GetUsers from "../../../services/getUsers";
import Table from "react-bootstrap/Table";

export default function Teachers() {
  const [users, setUsers] = useState([]);
  const [gif, setGif] = useState("https://images.chesscomfiles.com/uploads/v1/group/163272.e0805145.50x50o.61ee0d9878cc.gif");

    useEffect(() => {
        setTimeout(() => {
            try {
                GetUsers().then((res) => {
                  setUsers(res);
                });
              } catch (err) {
                console.log(err);
              
              } finally {
                  
                setGif("");
              }
        }, 1000);
        
      }, []);
 
 
  return (
    <div>
      <br />

      {gif != "" ? <div className="w-100 d-flex justify-content-center"><img src={gif} alt="" /></div> : ""}
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((obj) => {
            return (
              <tr>
                <td>{obj.profile["name"]}</td>
                <td>{obj.email}</td>
                <td>{obj.profile["address"]}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
