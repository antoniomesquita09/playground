import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream } from '../../actions';

class StreamDelete extends React.Component {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }
    renderActions(){
        return(
            <React.Fragment>
            <button className="btn btn-danger">Delete</button>
            <button className="btn btn-default">Cancel</button>
        </React.Fragment>
        );
    }
        
    render() {
        return (
            <Modal 
                title="Delete stream"
                content="Are you sure you want to delete your stream?"
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

export default connect(null, { fetchStream })(StreamDelete);