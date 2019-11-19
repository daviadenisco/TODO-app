import React, { Component } from 'react';

class Task extends Component {
    render() {
        return (
            <div>
                <li>
                    <span>Due: Friday, November 22 </span>
                    Create a TODO app
                    <button>Remove</button>
                    <button>Completed</button>
                </li>
                
            </div>
        )
    }
}

export default Task;