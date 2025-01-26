import React, {Component} from "react";
import "./index.css"

class UserList extends Component {
    render() {
      const { users, onEdit, onDelete } = this.props;
  
      return (
        <div className="userlist-container">
          <h2 className="list-heading">User List</h2>
          <table border="1" className="table">
            <thead>
              <tr>
                <th className="th">ID</th>
                <th className="th">First Name</th>
                <th className="th">Last Name</th>
                <th className="th">Email</th>
                <th className="th">Department</th>
                <th className="th">Actions</th>
              </tr>
            </thead>
            <tbody className="tbody">
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.department}</td>
                  <td>
                    <button onClick={() => onEdit(user)} className="edit">Edit</button>
                    <button onClick={() => onDelete(user.id)} className="delete">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
  
 export default UserList