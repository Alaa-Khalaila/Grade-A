import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import logo from './pics/logo.png';
import search from './pics/search.png';
import { Result } from './Result';

const Navbar = () => {
  const [result, setResult] = useState([]);
  const [courses, setCourses] = useState([]);
  useEffect(() => { getAllCourses() }, []);

  const getAllCourses = () => {
    axios.get('http://localhost:5000/students/courses')
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {
        console.log('ERR: ', err);
      })
  };

  const searchCourses = (i) => {
    axios.get(`http://localhost:5000/students/search/${i}`)
      .then((res) => {
        setResult(res.data);
      })
      .catch((err) => {
        console.log('ERR: ', err);
      })
  };

  return (
    <d>
      <nav className='navbar'>
        <Link to='/' ><img src={logo} className='logo' ></img></Link>
        <h4>Categories</h4>
        <div className='search'>
          <img src={search}></img>
          <Link to='/result'>
            <input to='/result' placeholder='Search for anything'
              onKeyPress={(e) => { if (e.key === 'Enter') searchCourses(e.target.value) }}></input>
          </Link>
        </div>
        <h4><Link to='/join/instructor-signup' >Teach On Grade-A</Link></h4>
        <button className='log'><Link to='/join/login' >Log in</Link></button>
        <button className='sign'><Link to='/join/signup' >Sign up</Link></button>
      </nav>
      <Route exact path='/result'><Result result={result}/></Route>
    </d>
  )
}

export default Navbar


