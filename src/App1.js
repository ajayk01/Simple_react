import React from "react";
class App1 extends React.Component
{

    constructor()
    {
        super();
        this.state = { time : new Date().toLocaleTimeString(),
                        date : new Date().toLocaleDateString() };
	}

    componentDidMount()
    {
        
        setInterval(() => {
            this.setState({time : new Date().toLocaleTimeString() })
        }, 1000)
	}

    render()
    {
        return <div>The Current Date and Time is {this.state.date} {this.state.time}</div>;
    }
}
export default App1;