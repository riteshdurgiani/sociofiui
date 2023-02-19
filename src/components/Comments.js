import React,{useState,useEffect} from "react";
import styles from '../styles/Comments.module.css'

const Comments = ({
    onHide
}) => { 

    
    return (
        <div className={styles.wrapper}> 
            <div className={styles.commentsHeader}>
                <p>0 comments</p>
                <p className={styles.closeButton} onClick={onHide}>
                    &times;
                </p>
            </div>
            {/* {comments.map(comment => {
                return (
                    <CommentCard
                    key = {comment.index.toNumber()}
                    username = {comment.commenterName}
                    comment = {comment.text}
                    avatar = {comment.commenterUrl}
                    timestamp = {comment.videoTime.toNumber()}
                    />
                )
            })} */}
            <div className={styles.commentInputWrapper}>
                <input
                type='text'
                
                // onChange={e => setNewComment(e.target.value)}
                // value = {newComment}
                placeholder = 'leave a comment...'
                />
                <button className={styles.button}
                // onClick = {replyClicked}
                >Reply </button>
            </div>
        </div>
    )
}
export default Comments;