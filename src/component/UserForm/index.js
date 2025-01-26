import React, {Component} from "react"
import "./index.css"

class UserForm extends Component {
    constructor(props) {
      super(props);
      this.state = { ...props.userData };
    }
  
    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.onSubmit(this.state);
    };
  
    render() {
      const { id, firstName, lastName, email, department } = this.state;
  
      return (
        <form onSubmit={this.handleSubmit} className="userform">
          <h1 className="aduser">{id ? 'Edit User' : 'Add User'}</h1>
          <div>
            <label className="adformdetail">ID: </label>
            <input name="id" value={id} onChange={this.handleChange} disabled={!!id} />
          </div>
          <div>
            <label className="adformdetail">First Name: </label>
            <input name="firstName" value={firstName} onChange={this.handleChange} required />
          </div>
          <div>
            <label className="adformdetail">Last Name: </label>
            <input name="lastName" value={lastName} onChange={this.handleChange} required />
          </div>
          <div>
            <label className="adformdetail">Email: </label>
            <input name="email" value={email} onChange={this.handleChange} required />
          </div>
          <div>
            <label className="adformdetail">Department: </label>
            <input name="department" value={department} onChange={this.handleChange} required />
          </div>
          <button type="submit" className="submit">Submit</button>
        </form>
      );
    }
  }

  export default UserForm