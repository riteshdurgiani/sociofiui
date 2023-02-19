import React from "react";
import styles from '../styles/Footer.module.css'
const Footer = () => {
    return(
        <div className={styles.footer}>
            <div className={styles.footerText}>
                <h4>@rdurgiani</h4>
                <p>Demo image to understand the concept of image upload </p>
                
            </div>
            <div className={styles.footerRecord}>
            <button 
                // onClick = {createChannel}
                className = {`${styles.button} ${styles.createButton}`}
                >
                    Join 
                </button>
            </div>
        </div>
    )
}

export default Footer;