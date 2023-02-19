import React from "react";
import { Card } from "react-bootstrap";
import styles from '../styles/PostThought.module.css'
import ThoughtTile from "./ThoughtTile";
const PostThought = () => {
    return(
        <div>
        <Card className = {styles.wrapper}>
            <Card.Header className={styles.inputTitleHead}>Post a Thought </Card.Header>
            <Card.Body>
               

                    <div className={styles.inputTitle}>What's on your mind ? </div>
                    <div className={styles.inputContainer}>
                        <input
                        className={styles.input}
                        type = 'text'
                        // value = {description}
                        // onChange = {(e=>setDescription(e.target.value))}
                        />
                    </div>
               
                <button 
                // onClick = {createChannel}
                className = {`${styles.button} ${styles.createButton}`}
                >
                    Post 
                </button>
            </Card.Body>
            <ThoughtTile/>
            <ThoughtTile/>
            <ThoughtTile/>
            <ThoughtTile/>
            <ThoughtTile/>
            <ThoughtTile/>
            
        </Card>
        
        </div>
    )
}

export default PostThought