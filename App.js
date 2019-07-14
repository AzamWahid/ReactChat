import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './user'
import { send } from 'q';

class App extends React.Component {

  state = {
    users: [
      {
        name: 'Azam',
        email: 'somewhere@gmail.com',
        islogin: false,
        id: 1
      },
      {
        name: 'Aqib',
        email: 'somewhere@gmail.com',
        islogin: false,
        id: 2
      },
      {
        name: 'Salman',
        email: 'somewhere@gmail.com',
        islogin: false,
        id: 2
      },
      {
        name: 'asif',
        email: 'somewhere@gmail.com',
        islogin: true,
        id: 2
      }
    ],
    sender: 'red'
  }

  handleColorChange = (index) => {
    // get all users
    let users = this.state.users

    debugger
    // false isLogin all users
    users = users.map((user)=>{
      return  {
        ...user,
        islogin:false
      }
    })
    debugger
    // true desired user isLogin
    users[index].islogin = true
    debugger 

    // set state
    this.setState({
      users: users
    })
  }
  render() {
    return (
      <div className="App">

        {
          // console.log(this.state.users.islogin)
          this.state.users.map((user, index) => {
            return <button onDoubleClick={() => this.handleColorChange(index)} style={{ backgroundColor: user.islogin ? 'red' : 'white' }}>{user.name}</button>
            //  return <button onClick={() => this.login('red')} className={user.islogin ? "active" : "nonactive"} >{user.name}</button>

          })

        }

        {/* <User Name={this.state.name} email={this.state.email} islogin={this.state.islogin} / > */}


      </div>

    )
  }

}

export default App;
