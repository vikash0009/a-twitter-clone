import React, {useEffect, useState} from 'react';
import './Feed.css';
import Blogbox from './Blogbox';
import Post from './Post';
import db from './firebase';
import FlipMove from 'react-flip-move';




function feed() {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map((doc) => doc.data()))
        ))

    }, []);
    return(
        <div className='feed'>
            {/*header*/}
            <div className='feed__header'>
            <h2>Home</h2>
            </div>

            {/*tweetbox*/}
            <Blogbox />
            <FlipMove>

            {posts.map(post => (
            <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text = {post.text}
            image={post.image}/>))}
            </FlipMove>

        </div>
    );
}
export default feed