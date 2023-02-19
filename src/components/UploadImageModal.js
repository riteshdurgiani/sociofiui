import React from "react";
import styles from '../styles/UploadVideoModal.module.css'
const UploadImageModal = ({
    description,
    imageUrl,
    setDescription,
    setImageUrl,
    setNewImageShow
}) => {
    return(
        <div className ={styles.wrapper}>
            <div className={styles.title}>Upload New Image </div>
            <div className={styles.inputField}>
                <div className={styles.inputTitle}>Description</div>
                <div className={styles.inputContainer}>
                    <input
                    className={styles.input}
                    type = 'text'
                    value = {description}
                    onChange = {e=>setDescription(e.target.value)}
                    />
                </div>
            </div>
            <div className={styles.inputField}>
                <div className={styles.inputTitle}>Image Url</div>
                <div className={styles.inputContainer}>
                    <input
                    className={styles.input}
                    type = 'text'
                    // value = {videoUrl}
                    onChange = {e=>setImageUrl(e.target.value)}
                    />
                </div>
            </div>
            <div className={styles.modalButtons}>
                <button 
                onClick={()=>{
                    setDescription('');
                    setImageUrl('');
                    setNewImageShow(false)
                }}
                className = {`${styles.button} ${styles.cancelButton}`}
                >
                    Cancel 
                </button>
                <button 
                // onClick={newVideo}
                className = {`${styles.button} ${styles.createButton}`}
                >
                    Create  
                </button>
            </div>
        </div>
    )
}

export default UploadImageModal;