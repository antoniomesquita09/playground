import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{
    state = {lat: null , errorMessage: ''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            // Everytime we want to update state data we call setState (method extended from React.Component)
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({errorMessage: err.message})
        );
    }
/*
    componentDidUpdate(){
        console.log('My component was just updated - it rerended!');
    }
*/
    // React says we have to define render!!
    render(){
        if(this.state.lat && !this.state.errorMessage){
            return <SeasonDisplay lat = {this.state.lat} />;
        }
        if(!this.state.lat && this.state.errorMessage){
            return <SeasonDisplay err = {this.state.errorMessage} />;
        }
        return <div>Loading!</div>;
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));