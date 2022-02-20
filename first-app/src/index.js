import faker from 'faker';
import React from 'react';
import ReactDOM  from 'react-dom';
import Comments from './comments';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
    <div className="ui container comments">
        <ApprovalCard>
            Are you sure?
        </ApprovalCard>
        <ApprovalCard>
            <Comments 
                authou = "sam"
                time = 'ieri alle 18:00'
                textComment = "Lorem ipsum"
                avatar = {faker.image.image()}
            />
        </ApprovalCard>
         <Comments 
            authou = "Dean"
            time = 'Lunedì alle 20:00'
            textComment = "Lorem ipsum dolor sit"
            avatar = {faker.image.image()}
        />
         <Comments 
            authou = "Castiel"
            time = 'Domenoca alle 18:00'
            textComment = "Lorem ipsum dolor sit amet."
            avatar = {faker.image.image()}
        />

    </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root') );