import React from 'react';
import "./Post.css";
import { Avatar } from '@mui/material';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function Post({user, postImage, likes, timestamp}) {
  return (
    <div className='post'>
        <div className="post__header">
            <div className="post__headerAuthor">
                <span className='avatar'><Avatar>{user.charAt(0).toUpperCase()}</Avatar></span>
                 {user} • <span>{timestamp}</span>
            </div>
            <MoreHorizIcon />
        </div>
        <div className="post__image">
            <img src={postImage} alt="" />
        </div>
        <div className="post__footer">
            <div className="post__footerIcons">
                <div className="post__iconsMain">
                    <FavoriteBorderIcon className='postIcon'/>
                    <ChatBubleOutlineIcon className='postIcon'/>
                    <TelegramIcon className='postIcon'/>
                </div>
                <div className="post__iconSave">
                    <BookmarkBorderIcon className='postIcon2'/>
                </div>
            </div>
            Liked by {likes} people.
        </div>
    </div>
  )
}

export default Post