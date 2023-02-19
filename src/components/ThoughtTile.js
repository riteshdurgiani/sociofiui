import React from "react";
import styles from '../styles/PostThought.module.css'
import { Card } from "react-bootstrap";
import { BalloonHeartFill, ChatDotsFill, CurrencyDollar } from "react-bootstrap-icons";

const ThoughtTile = () => {
    return (
        <Card className = {styles.wrapperTile}>
            <Card.Header className={styles.inputTitleHead}>@rdurgiani</Card.Header>
            <Card.Body>
               
                    
                    <div className={styles.inputTitleTile}>As you sow , so shall you reap </div>
                    
                
                <div style={{display : 'flex',justifyContent:'space-between'}}>

                            <BalloonHeartFill
                            size='25px'
                            color="white"
                            />
                            <ChatDotsFill
                            size='20px'
                            color="white"
                            />
                            <CurrencyDollar
                            size='20px'
                            color="white"
                            />
                            
                </div>
            </Card.Body>
        </Card>
    )
}


export default ThoughtTile                    