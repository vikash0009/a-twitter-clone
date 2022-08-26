import React, { useState } from 'react';
import './Blogbox.css';
import Button from '@mui/material/Button';
import db from './firebase';
import { Avatar } from '@mui/material';
import { deepOrange} from '@mui/material/colors';



function Blogbox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const sendTweet = (e) => {
     e.preventDefault();

    db.collection('posts').add({
        displayName: 'vikash dwarapu',
        username: 'vikash__dwarapu',
        verified:true,
        text: tweetMessage,
        image: tweetImage,


    });
    
    setTweetMessage("");
    setTweetImage("");
};
return (
        <div className='blog'>
            <h3>
                You can write the blog here
            </h3>
            <form>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>OP</Avatar>
            <input
              value={tweetImage}
              onChange={(e) => setTweetImage(e.target.value)}
              className="tweetbox_imageinput"
              placeholder='optional:enter image URL'
              type='text'
              />
                <div className='blog_input'>
                <input
                    onChange={(e) => setTweetMessage(e.target.value)}
                     value={tweetMessage} placeholder='Type anything' type='text'/>

                </div>
            <Button onClick={sendTweet} type="submit" variant='outlined' className='upload_button'>UPLOAD</Button>
            </form>
        </div>
    )
}
export default Blogbox
