import React, {Component} from "react"
import axios from "axios"
import UserForm from "../UserForm";
import UserList from "../UserList";
import ErrorBoundary from "../ErrorBoundary";
import "./index.css"

class MainApp extends Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [],
        selectedUser: null,
        error: null,
      };
    }
  
    componentDidMount() {
      this.fetchUsers();
    }
  
    fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = response.data.map((user) => ({
          id: user.id,
          firstName: user.name.split(' ')[0],
          lastName: user.name.split(' ')[1] || '',
          email: user.email,
          department: 'Unknown', // JSONPlaceholder does not provide department
        }));
        this.setState({ users });
      } catch (error) {
        this.setState({ error: 'Failed to fetch users' });
      }
    };
  
    handleAddUser = (user) => {
      this.setState((prevState) => ({ users: [...prevState.users, user], selectedUser: null }));
    };
  
    handleEditUser = (user) => {
      this.setState((prevState) => ({
        users: prevState.users.map((u) => (u.id === user.id ? user : u)),
        selectedUser: null,
      }));
    };
  
    handleDeleteUser = async (id) => {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        this.setState((prevState) => ({
          users: prevState.users.filter((user) => user.id !== id),
        }));
      } catch (error) {
        this.setState({ error: 'Failed to delete user' });
      }
    };
  
    render() {
      const { users, selectedUser, error } = this.state;
  
      return (
        <ErrorBoundary>
          <div className="app-container">
            <h1 className="user-management">User Management</h1>
            {error && <div className="error">{error}</div>}
            <UserList
              users={users}
              onEdit={(user) => this.setState({ selectedUser: user })}
              onDelete={this.handleDeleteUser}
            />
            <button onClick={() => this.setState({ selectedUser: {} })} className="add-button">Add User</button>
            {selectedUser && (
              <UserForm
                userData={selectedUser}
                onSubmit={selectedUser.id ? this.handleEditUser : this.handleAddUser}
              />
            )}
          </div>
        </ErrorBoundary>
      );
    }
  }
  
  export default MainApp;
  