import React from 'react';
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Widgets() {
    return(
        <div className='widgets'>
            <div className='widgets_input'>
                <SearchOutlinedIcon className='widgets_search'/>
                <input placeholder='Search site' type="text"/>
            </div>
            <div className='widgets_container'></div>
            <h2>What's happening?</h2>
            <TwitterTweetEmbed tweetId={''}/>
            
            <TwitterTimelineEmbed
               sourceType='profile'
               screenName='jashwanthbaba'
               options={{ height: 400}}
            />

            <TwitterShareButton
              url={'https://www.facebook.com/'}
              options={{ text:"reactjs is awesome", via: "" }}/>
        </div>
    )
}
export default Widgets