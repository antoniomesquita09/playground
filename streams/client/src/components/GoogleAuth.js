import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut} from '../actions';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '39184998157-takc6s0fnsfa5ei9ihf6424oucaimho9.apps.googleusercontent.com',
                scope: 'email'
            })
            .then(() =>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };
    
    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    RenderAuthButton(){
        if(this.props.isSignedIn === null){
            return null;
        }
        else if(this.props.isSignedIn){
            return (
                    <a onClick={this.onSignOutClick} className="btn btn-block btn-social btn-twitter">
                        <span className="glyphicon glyphicon-log-in" /> Sign Out
                    </a>
            );
        }
        else {
            return (
                    <a onClick={this.onSignInClick} className="btn btn-block btn-social btn-twitter">
                        <span className="glyphicon glyphicon-log-in"></span> Sign In with google
                    </a>
            );
        }
    }
    render() {
        return <div>{this.RenderAuthButton()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect (mapStateToProps, { signIn, signOut })(GoogleAuth);