import React from "react";
import { Badge, Col, Row } from "react-bootstrap";
import styles from '../styles/Footer.module.css'
const SuggestedChannelTile = () => {
    return (
        
        <div style={{
            
            padding : '20px',color:'white',fontWeight : 'bold',fontSize : '1rem',
            boxShadow:  '8px 8px 5px #15101f, 8px -8px 5px #33264b'
        
        }}>
        <Row>
            <Col sm="2" xs="2" md="2" lg="2">
                <img height='50px' width='50px' src='https://api.dicebear.com/5.x/adventurer/svg?seed=Cali' />
            </Col>
            <Col sm="6" xs="6" md="6" lg="6" style={{display : 'flex',flexDirection : 'column',alignContent : 'flex-start'}}>
                
                    <p>Channel Name</p>
                    <p style={{fontWeight : 'lighter' , fontSize : '0.8rem'}}>10 members </p>
                
            </Col>
            <Col sm="4" xs="4" md="4" lg="4">
            <button 
                // onClick = {createChannel}
                className = {`${styles.button} ${styles.createButton}`}
                >
                    Join 
                </button>
            </Col>
        </Row>
    </div>
    )
}

export default SuggestedChannelTile