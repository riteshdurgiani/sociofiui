import React from "react";
import { Row,Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import NavbarApp from "./NavbarApp";
import { Card,Button } from "react-bootstrap";
import PostCard from "./PostCard";
import styles from '../styles/MainView.module.css'
import BottomBar from "./BottomBar";
import NavbarBottom from "./NavbarBottom";
import { useState } from "react";
import UploadModal from "./UploadModal";
import UploadVideoModal from "./UploadVideoModal";
import UploadImageModal from "./UploadImageModal";
import { ListGroup } from "react-bootstrap";
import Badge from "react-bootstrap";
import { BalloonHeartFill, ChatDotsFill, CurrencyDollar, Image } from "react-bootstrap-icons";
import ChannelTile from "./ChannelTile";

import PostCardVideo from "./PostCardVideo";
import SuggestedChannelTile from "./SuggestedChannelTile";
import PostThought from "./PostThought";
const MainView = () => { 
    const [uploadModalShow,setUploadModalShow] = useState(false);
    const [newVideoShow,setNewVideoShow] = useState(false);
    const [newImageShow,setNewImageShow] = useState(false);
    const[description,setDescription] = useState('')
    const [videoUrl,setVideoUrl] = useState('')
    const [imageUrl,setImageUrl] = useState('')
    const [mainViewImageShow,setMainViewImageShow] = useState(true);
    const [mainViewVideoShow,setMainViewVideoShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div style={{width:'100%',background:'#020102'}}>

            <NavbarApp
                mainViewImageShow = {mainViewImageShow}
                mainViewVideoShow = {mainViewVideoShow}
                setMainViewImageShow = {setMainViewImageShow}
                setMainViewVideoShow = {setMainViewVideoShow}
                
            />
            <NavbarBottom 
            setUploadModalShow = {setUploadModalShow}
            />
             
            {uploadModalShow && (
                  <UploadModal
                  
                  setUploadModalShow = {setUploadModalShow}
                  setNewVideoShow = {setNewVideoShow}
                  setNewImageShow = {setNewImageShow}
                  />
                )}
            {newVideoShow && (
                  <UploadVideoModal
                  description = {description}
                  videoUrl = {videoUrl}
                //   newVideo = {newVideo}
                  setDescription = {setDescription}
                  setVideoUrl = {setVideoUrl}
                  setNewVideoShow = {setNewVideoShow}
                  
                  />
                )}
            {newImageShow && (
                  <UploadImageModal
                  description = {description}
                  videoUrl = {videoUrl}
                //   newVideo = {newVideo}
                  setDescription = {setDescription}
                  setImageUrl = {setImageUrl}
                  setNewImageShow = {setNewImageShow}
                  />
                )}
            <div style={{background:'#020102'}}>
                <Row className="ml-10px">
                    <Col className={styles.show}  lg="3" style={{
                        borderRight:'0.1px solid #241B35 '
                        }}>
                        <Row>
                            <Col sm="1" xs="1" md="1" lg="1"></Col>
                            <Col sm="10" xs="10" md="10" lg="10">
                            <div className={styles.leftDiv}>
                                <center>
                                <h4 style={{
                                    color : 'white',marginTop : '10px',padding : '10px'
                                }}>Subscribed Channels</h4>
                                </center>
                               
                                <ChannelTile/>
                                <ChannelTile/>
                                <ChannelTile/>
                                <ChannelTile/>
                                <ChannelTile/>
                            </div>
                            </Col>
                            <Col sm="1" xs="1" md="1" lg="1"></Col>
                        </Row>
                        <Row style={{marginTop : '-40%'}}>
                            <Col sm="1" xs="1" md="1" lg="1"></Col>
                            <Col sm="10" xs="10" md="10" lg="10">
                            <div className={styles.leftDiv}>
                                <center>
                                <h4 style={{
                                    color : 'white',marginTop : '10px',padding : '10px'
                                }}>Suggested Channels</h4>
                                </center>
                               
                                <SuggestedChannelTile/>
                                <SuggestedChannelTile/>
                                <SuggestedChannelTile/>
                                <SuggestedChannelTile/>
                                <SuggestedChannelTile/>
                            </div>
                            </Col>
                            <Col sm="1" xs="1" md="1" lg="1"></Col>
                        </Row>
                       
                    </Col>
                    <Col xs="12" sm="12" md="12" lg="5">
                    <Row style={{backgroundColor: 'black'}}>
                        <Col sm="2" xs="2" md="2" lg="2" className={styles.bgClass}></Col>
                        <Col sm="8" xs="8" md="8" lg="8" className="d-flex flex-column flex-nowrap " 
                        style={{
                          
                            padding : 0,
                            backgroundColor : 'black',
                            marginTop:'-10px'
                        }}
                        >
                            

                            <>
                                {mainViewImageShow ? (
                                   <div style={{height : '100%'}}>
                                         <PostCard src={"https://res.cloudinary.com/ddvq2mc2b/image/upload/v1674993693/cld-sample-3.jpg"}/>
                
                    
                                        <PostCard src={"https://res.cloudinary.com/ddvq2mc2b/image/upload/v1674993694/cld-sample-5.jpg"}/>
                                
                                
                                        <PostCard src={"https://res.cloudinary.com/ddvq2mc2b/image/upload/v1674993692/cld-sample.jpg"}/>
                                
                                    
                                        <PostCard src={"https://api.dicebear.com/5.x/adventurer/svg?seed=Cali"}/>
                                        <div style={{width:'match-parent',height:'80px'}}></div>
                                    
                                        </div>
                                ) : (
                                    <div style={{height : '100%'}}>
                                        
                                     <PostCardVideo src={"https://res.cloudinary.com/ddvq2mc2b/video/upload/v1674993689/samples/cld-sample-video.mp4"}/>
                                
                                
                                     <PostCardVideo src={"https://bafybeibe7747kotdx26rgpxrib25xl5vxpkfm37zhqesq4ugysf4pjclrq.ipfs.w3s.link/VID-20180526-WA0098.mp4"}/>
                               
                                     <PostCardVideo src={"https://res.cloudinary.com/ddvq2mc2b/video/upload/v1674993689/samples/cld-sample-video.mp4"}/>
                               
                                     <PostCardVideo src={"https://res.cloudinary.com/ddvq2mc2b/video/upload/v1674993689/samples/cld-sample-video.mp4"}/>
                                
                                 <div style={{width:'match-parent',height:'80px'}}></div>
                                    </div>
                                )}
                            </>
                                {/* {mainViewImageShow  ? () : ()} */}
                            
                               
                            
                        </Col>
                        <Col sm="2" xs="2" md="2" lg="2" className={styles.bgClass}></Col>
                    </Row>
                    
                    </Col>
                    <Col className={styles.show} xs="0" sm="0" md="0" lg="4" style={{borderLeft:'0.1px solid #241B35 '}}>
                        <PostThought/>
                    </Col>
                </Row>
                </div>
        
               
            </div>

    )
    
}
{/* <div className={styles.show} >
<div className="card card-block mx-2 " style={{marginTop:'30px',marginLeft:'60px'}}>
        <Card style={{ width: "match-parent",padding: '20px',background:'#020102',
            border:'none', boxShadow: '5px 5px 10px 5px #6443a6bd'
    }}>
        <Card.Title style={{color:'white'}}>@Rdurgiani</Card.Title>
            <Card.Img variant="top" src="https://res.cloudinary.com/ddvq2mc2b/image/upload/v1674993692/cld-sample.jpg" 
            style={{
                border : "1px solid black",
                height : 'fit-parent',
                width : 'fit-parent',
                
            }}
            />
            <Card.Body style={{display:'flex',flexDirection:'column',color:'white'}}>
            <div style={{display : 'flex',justifyContent:'space-between'}}>

                        <BalloonHeartFill
                        size='20px'
                        />
                        <ChatDotsFill
                         size='20px'
                        />
                        <CurrencyDollar
                         size='20px'
                        />
                        <div> <Button variant="primary">join</Button></div>
                        </div>
                <div style={{display : 'flex'}}>
                    
                <Card.Title>Rdurgiani</Card.Title>
                <Card.Text>
                    Demo picture
                </Card.Text>
                </div>
                
                
            </Card.Body>
        </Card>
    </div>
    </div> */}
export default MainView;
