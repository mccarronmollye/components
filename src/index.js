import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return(
      <div className="ui container comments">
        <ApprovalCard>Are you sure you want to do to this?</ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Sam"
            timeAgo="Today at 4:45 PM."
            commentContent="Good read!"
            avatar={faker.image.avatar()}
        />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Molly"
            timeAgo="Yesterday at 4:45 PM."
            commentContent="NICE!!!!"
            avatar={faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Tim"
            timeAgo="Today at 4:45 AM."
            commentContent="OHH YEAH"
            avatar={faker.image.avatar()}
            />
        </ApprovalCard>
      </div>
  )
}

ReactDOM.render(<App/>, document.querySelector('#root'))
