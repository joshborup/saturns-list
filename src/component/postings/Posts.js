import React from 'react';
import Header from '../shared/Header';

const Posts = (props) => {

    const postInfo = props.postInfo ? props.postInfo :'loading'

    return (



        <div>
            <Header />
            Name: {postInfo.name}
        </div>
    );
};

export default Posts;