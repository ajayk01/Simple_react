import React from "react";
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
class App2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items :[],
            isLoaded : false,
        }
	}
    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(res => res.json())
            .then(json => 
            {
                this.setState({ isLoaded : true , items : json })
                console.log(this.state);
			});
	}

    render()
    {
         var {isLoaded, items } = this.state;

         if(!isLoaded) {
              return (<div>Loading...</div>);  
		 }
         else
         {
             return (
                  <div>
                      <div className="drop-down" id="id">
                         <select>
                          { this.state.items.map(item =>
                                        (<option key={item.id}>{item.id}</option>)) }
                         </select>
                      </div>
                      <br/>
                      <br/>
                      <br/>
                      <div className="drop-down" id="title">
                         <select>
                          { this.state.items.map(item =>
                                        (<option key={item.title}>{item.title}</option>)) }
                         </select>
                      </div> 
        		  </div>
             );
         }
	}
}
export default App2;
