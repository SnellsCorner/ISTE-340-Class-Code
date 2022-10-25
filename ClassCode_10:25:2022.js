import React from 'react';


//components always start with a gap letter...
export default class ClassComp extends React.Component {
    constructor(props){
        console.log('constructor fired');
        super(props);
        this.state = {
            myObj:{},
            loaded:false
        }
        //for the first button - probably the worst way to do this...
        this.danFunction = this.danFunction.bind(this);

    }

    render(){
        console.log('render fired');
        //bring in the state...
        const {myObj, loaded} = this.state;
        if(!loaded) return (

            <div>Loading...
                <br/>
                Event 1: This event DOES need the event to be bound in the constructor
                <br/>
                <button onClick={this.danFunction}>First Button</button>
                <br/>
                Event 2: This event does NOT need the event binding in the constructor.
                <br/>
                <button onClick={ (e) => this.danFunction(e) }>Second Button</button>
                <br/>
                Event 3: This event is bound how I defined the method! (probably best?)
                <br/>
                <button onClick={this.otherFunction}>Third Button</button>

            </div>
        );
        return(
            <div>
                <h1>Welcome!</h1>
                <h2>{myObj.title}</h2>
                <h2>{myObj.description}</h2>

            </div>
        );
   
    }

    danFunction(){
        console.log("danFunction fired");
        this.setState({
            myObj:{title:"React is cool...", description:"Lots and lots of words coming at me..."},
            loaded:true
        })
    }

    //For the third event - define my function differently so i dont have to bind...
    otherFunction = () => {
        console.log("otherFunction fired");
        this.setState({
            myObj:{title:"React is cool... from other function", description:"Other lots and lots of words coming at me..."},
            loaded:true
        })
    }

    componentDidMount(){
        console.log('componentDidMount fired');
        this.setState({
            myObj:{name:'value'}
        });
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate fired');
        return true;
    }
    componentDidUpdate(){
        console.log('componentDidUpdate fired');

    }

    
}

// export default ClassComp;