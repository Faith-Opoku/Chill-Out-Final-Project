/* eslint-disable react/style-prop-object */
import React from 'react';



import './style.css';


const Header =(props)=>{
    return (
       
        <header id="header" class="fixed-top">
        <div class="container  align-items-center">
    
         
         
        <a href=" ">
              <img src="https://image.shutterstock.com/image-vector/geometric-pattern-golden-colour-c-260nw-586755437.jpg" height = "45" alt="Side" />
            </a>
    
         
          <nav class="nav-menu d-none d-lg-block" style = {{float: "right"}}>
            <ul>
              <li class="active"><a href="index.html">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li class="book-a-table"  data-toggle="modal" data-target="#signup"><a href="#Signup">Sign Up</a></li>
              <li class="book-a-table" data-toggle="modal" data-target="#exampleModal"><a href="#Login">Login</a></li>
            
            </ul>
          </nav>
    
        </div>
      </header>
          

            
    
    )
}

export default Header;
