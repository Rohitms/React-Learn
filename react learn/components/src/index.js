import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
return (
<div className="ui container comments">
    <ApprovalCard></ApprovalCard>
    <ApprovalCard>
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        comment="Wonderful"
        avatar={faker.image.avatar()}
      />
    </ApprovalCard>

    <ApprovalCard>
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:00AM"
        comment="awesome"
        avatar={faker.image.avatar()}
      />
    </ApprovalCard>

    <ApprovalCard>
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 3:00PM"
        comment="Great"
        avatar={faker.image.avatar()}
      />
    </ApprovalCard>
</div>
);
};

ReactDOM.render(<App/>,document.querySelector('#root'));
