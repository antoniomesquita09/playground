import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
    componentDidMount(){
        this.props.fetchStreams();
    }

    renderAdmin(stream){
        if(stream.userId === this.props.currentUserId){
            return (
                <div className="btn btn-group">
                    <Link to={`/streams/edit/${stream.id}`} className="btn btn-warning">Edit</Link>
                    <Link to={`/streams/delete/${stream.id}`} className="btn btn-danger">Delete</Link>
                </div>
            );
        }
    }

    renderList(){
        return this.props.streams.map(stream => {
            return (
                <div className="list-group-item" key={stream.id}>
                        <span className="glyphicon glyphicon-play-circle" alt=""></span>
                        <div>
                            <h5>{stream.title}</h5>
                            <p>{stream.description}</p>
                        </div>
                        {this.renderAdmin(stream)}
                </div>
            );
        });
    }

    renderCreate(){
        if(this.props.isSignedIn){
            return(
                <div>
                    <Link to='/streams/new' className="btn btn-success">
                        Create Stream
                    </Link>
                </div>
            );
        }
    }

    render(){
        return (
            <div>
                <h2>Streams</h2>
                <div className="list-group">{this.renderList()}</div>
                <br />
                <br />
                <div>
                {this.renderCreate()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);