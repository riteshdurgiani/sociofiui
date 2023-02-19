import React from "react";
import { useState } from "react";
import styles from '../styles/Sidebar.module.css'
import { CashCoin, ChatDotsFill } from "react-bootstrap-icons";
import { ShareFill } from "react-bootstrap-icons";
import { Share } from "@next/font/google";
import { BalloonHeartFill } from "react-bootstrap-icons";
const Sidebar = ({
    onShowComments
}) => {
  

    return (
        <div className={styles.sidebar}>
            <div className={styles.sideBarButton}>
                
                    <BalloonHeartFill
                        size="30px"
                        
                    />
               
                <p>0</p>
            </div>
            <div className={styles.sideBarButton} 
            onClick={onShowComments}
            >
                <ChatDotsFill
                    size="20px"
                />
               
            </div>
            <p>0</p>
            <div className={styles.sideBarButton}
            //  onClick={onShowComments}
            >
                <CashCoin
                    size="25px"
                />
                
            </div>
            
        </div>
    )
}

export default Sidebar