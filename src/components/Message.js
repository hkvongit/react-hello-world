import React, { Component } from 'react'



class Message extends Component {
    constructor(){
        super()   // for taking inherents from react component class
            this.state={
                message: "Melcow Message"
            }
    }
    changeMessage(){
        this.setState({
            message: "thanks for visiting"
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick ={() => this.changeMessage() }>Change Message</button>
            </div>
        )
    }
}

export default Message