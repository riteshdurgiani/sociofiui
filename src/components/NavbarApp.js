import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Signal } from "react-bootstrap-icons";


import { async } from "@firebase/util";
import { db } from "./firebase";
import { addDoc, collection, getDoc, setDoc } from "firebase/firestore";
import Link from "next/link";

// import { async } from "@firebase/util";

const NavbarApp = ({
  mainViewImageShow,
  mainViewVideoShow, 
  setMainViewImageShow,
  setMainViewVideoShow,
 
}) => { 

      async function createChannel(channel_name,owner_name,owner_address){
        console.log(db)
        try{
         const docRef = setDoc(db,"channels","rits")

          
          console.log(docRef)
      }catch(e){
        console.log(e)
      }
      }
   
   

    return(
        <Navbar collapseOnSelect expand="lg"  variant="dark" sticky="top" style={{width:'100%',background : '#020102',borderBottom:'0.1px solid #241B35 '}}>
      <Container>
        <Navbar.Brand href=""><Signal color="white" size={30}/> SocioFi</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Item>
            <Nav.Link href="" onClick={() => {
              setMainViewVideoShow(false)
              setMainViewImageShow(true)
            }}
            
            >Images</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="" onClick={() => {
              setMainViewImageShow(false)
              setMainViewVideoShow(true)  
            }}>Videos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="">Messages</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="">Channels</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav>
        
         
          <Nav.Link href="">
            <button 
            onClick={() => {
              createChannel("rdurgiani","Ritesh","kdfbjfbjdfhb")
            }}
            style={{
              color: 'white',
              padding: '5px',
              backgroundColor : '#CB80FF',
              borderRadius:'9px',
              color: '#fff',
              cursor: 'pointer',
              transition: '0.2 linear',
              width: '8rem',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              fontWeight: '600',
              fontSize: '1rem',
              margin: '0.5rem',
              boxShadow: 'inset 2px 5px 10px rgb(5, 5, 5)'
            }}>
            <img src="https://api.dicebear.com/5.x/adventurer/svg?seed=Cali" height={40} width={40}/>
            3.66 SOL
            </button>
           
          </Nav.Link>
         
            <Link href={{
            pathname : '/profile',
            query : {
              username : 'riteshdurgiani',
              profileLink : 'https://api.dicebear.com/5.x/adventurer/svg?seed=Cali',
           
            }
          }}>
            <button style={{
              color: 'white',
              padding: '5px',
              backgroundColor : '#8965F1',
              borderRadius:'9px',
              color: '#fff',
              cursor: 'pointer',
              transition: '0.2 linear',
              width: '8rem',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              fontWeight: '600',
              fontSize: '1rem',
              margin: '0.5rem',
              boxShadow: 'inset 2px 5px 10px rgb(5, 5, 5)'
            }}>
            <img src="https://api.dicebear.com/5.x/adventurer/svg?seed=Cali" height={40} width={40}/>
            rdurgiani
            </button>
            </Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavbarApp;