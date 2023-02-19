import React from "react";
import styles from '../styles/PostCard.module.css'
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Comments from "./Comments";
import { useState } from "react";
const PostCard = ({src}) => {
    const [showCommentsModal,setShowCommentsModal] = useState(false);
    const hideComments = () => { 
        setShowCommentsModal(false);
    }
    const showComments = () => { 
        setShowCommentsModal(true);

    }
    return(
        <div   style={{minWidth:'500px',height:'500px',border:'none',marginTop:'30px'}}>
        <div className={styles.wrapper}>
        <img
        crossOrigin="Anonymous"
        src = {src}
        className={styles.imageFrame}
        
        style = {{objectFit:'cover'}}
        />
        <Footer/>
        <Sidebar
        onShowComments = {showComments}
        />
        {showCommentsModal && (
            <Comments
               onHide = {hideComments}
            /> 
        )}
    </div>
    </div>
    )
}

export default PostCard;