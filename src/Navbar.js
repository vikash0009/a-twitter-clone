import React from "react";
import "./Navbar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import Navbaroption from "./Navbaroption";
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsTwoToneIcon from '@mui/icons-material/NotificationsTwoTone';
import Button from '@mui/material/Button';



function Navbar() {
    return (
    <div className="Navbar">
        <h1 className="title">NOT THE BIRD</h1>
    {/*Twitter icon*/}
    <TwitterIcon className="navbar_twittericon"/>
    {/*All other stuff*/}
    <Navbaroption active Icon={HomeTwoToneIcon} text="Home" />
    <Navbaroption Icon={ExploreIcon} text="Explore" />
    <Navbaroption Icon={NotificationsTwoToneIcon} text="Notification" />
    

    <Button variant="contained" classname= "Navbar__feedback"fullWidth>Feedback</Button>
    
    
    </div>
    );
}
export default Navbar
