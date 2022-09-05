import React from "react";
import emoji from './emoji.png'
import './App.css'

export default function Header(){
    return(
        <div className="header">
            <img src={emoji} className='header-image' alt='emoji'/>
            <h1 className="header-title">Meme Generator</h1>
        </div>
    );
}