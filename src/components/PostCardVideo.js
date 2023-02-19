import React from "react";
import styles from '../styles/PostCard.module.css'
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Comments from "./Comments";
import { useState } from "react";
import { useRef } from "react";
const PostCardVideo = ({src}) => {
    const videoRef = useRef(null)

    const [showCommentsModal,setShowCommentsModal] = useState(false);
    const hideComments = () => { 
        setShowCommentsModal(false);
    }
    const showComments = () => { 
        setShowCommentsModal(true);

    }
    const onVideoPress = () => {
        videoRef.current.play()
    }
    return(
        <div style={{minWidth:'500px',height:'500px',border:'none',marginTop:'30px'}}>
        <div className={styles.wrapper}>
        <video
        crossOrigin="Anonymous"
        width=  "100% !important"
        height=  "auto !important"
        loop
        src = {src}
        className={styles.imageFrame}
        ref = {videoRef}
        onClick = {onVideoPress}
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

export default PostCardVideo;