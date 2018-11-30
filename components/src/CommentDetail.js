import React from 'react';

const CommentDetail = (props) => {
    const author = props.author;
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatar} />
            </a>
            <div className="content">
                <a href="/" className="Author">
                {author}
                </a>
                <div className="metadata">
                <span className="date">{props.timeAgo}</span>
                </div>
                <div className="text">
                {props.text}
                </div>
            </div>
        </div>
    );
};

export default CommentDetail;