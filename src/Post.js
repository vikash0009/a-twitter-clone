import React from 'react';
import "./Post.css";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
import Avatar from '@mui/material/Avatar';
import { deepOrange} from '@mui/material/colors';
import VerifiedIcon from '@mui/icons-material/Verified';
import { forwardRef } from "react";

const Post = forwardRef(({
            displayName,
            username,
            text,
            verified,
            image
},ref ) => {
    return (
        <div className='post' ref={ref}>
            <div className='post_avatar'>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>OP</Avatar>
            </div>
            <div className='post_body'>
              <div className='post_two'>
                <div className='post_header'>
                    <h2>
                        {displayName} {" "}
                        <span className='postheader_special'>
                            {verified &&<VerifiedIcon classname='post_badge'/>} {username}

                        </span>
                    </h2>
                </div>
                <img src={image} alt=''/>
                <div className='post_headertext'>
                    <h1>
                        {text}
                    </h1>
                </div>
            </div>
                  
                <div className='post_footer'>
                    <ChatBubbleOutlineOutlinedIcon fontSize='small' className='chat' />
                    <FavoriteBorderOutlinedIcon fontSize='small'  className='favorite'/>
                    <PublishOutlinedIcon fontSize='small' className='publish' />
                </div>
            </div>
            
            


        </div>
    );
});
export default Post
