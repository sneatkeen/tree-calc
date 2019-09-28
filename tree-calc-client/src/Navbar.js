import React from 'react';
import StackLogo from './components/StackLogo';
import StackOptions from './components/StackOptions';
import './style.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <StackLogo/>
      <StackOptions/>
    </div>
  )
}
