import React from "react";
import '../css/sidebar.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton } from "@mui/material";

const Sidebar = () => {
    return (
        <div className="sidebar">
            
            <div className="sidebarTop">
                <a href="/"> Search </a>
                <a href="/"> Store </a>
                <a href="/"> About </a>
                <IconButton>
                    <DragHandleIcon fontsize="medium" />
                </IconButton>
            </div>

            <div className="sidebarDown">
                <IconButton className="icon-btn">
                    <TwitterIcon fontSize="medium" />
                </IconButton>

                <IconButton className="icon-btn">
                    <FacebookIcon fontSize="medium" />
                </IconButton>

                <IconButton className="icon-btn">
                    <MailIcon fontSize="medium" />
                </IconButton>
            </div>

        </div>
    )
}

export default Sidebar