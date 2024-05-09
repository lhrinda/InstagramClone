import React, { useState } from 'react'
import "./Timeline.css"
import Suggestions from './Suggestions'
import Post from './Posts/Post'

function Timeline() {
    const [posts, setPosts] = useState([
        {
            user: "LukeArsenal",
            postImage: "https://images.nintendolife.com/be768013a66dc/rowlet-armchair.900x.jpg",
            likes: 24,
            timestamp: "2d",
        },
        {
            user: "Nintendo",
            postImage: "https://i.etsystatic.com/12175780/r/il/85bfa4/3427102381/il_fullxfull.3427102381_dbt1.jpg",
            likes: 6,
            timestamp: "1h",
        },
        {
            user: "Bates",
            postImage: "https://www.bates.edu/admission/files/2021/06/home_hero-image-1400x661-1.webp",
            likes: 215,
            timestamp: "1w",
        },
    ]); 
    return (
    <div className='timeline'>
        <div className="timeline__left">
            <div className="timeline__posts">
                {posts.map(post => (
                    <Post user={post.user} 
                    postImage={post.postImage} 
                    likes={post.likes} 
                    timestamp={post.timestamp}/>
                ))}
            </div>
        </div>
        <div className="timeline__right">
            <Suggestions />
        </div>
    </div>
  )
}

export default Timeline