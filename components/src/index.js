import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
        <ApprovalCard>
           <CommentDetail 
                author= "Sam" 
                timeAgo="Today at 6:00PM" 
                text="This is the first comment text" 
                avatar={faker.image.avatar()} 
            />
        </ApprovalCard>
        <ApprovalCard>
           <CommentDetail 
                author= "Dom" 
                timeAgo="Today at 4:45PM" 
                text="This is the second comment text" 
                avatar={faker.image.avatar()} 
            />
        </ApprovalCard>
        <ApprovalCard>
           <CommentDetail 
                author= "Ben" 
                timeAgo="Yesterday at 2:00AM" 
                text="This is the third comment text" 
                avatar={faker.image.avatar()} 
            />
        </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));