import React, { Component } from 'react';

export default class ExampleComponent extends Component {
    state = {
        count: 0
    };

    // Increment count every second
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count + 1
            }));
        }, 1000);
    }

    // Clear the interval when the component is unmounted
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    // Method to stop the timer
    stopTimer = () => {
        clearInterval(this.interval);
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.stopTimer}>Stop Timer</button>
            </div>
        );
    }
}
