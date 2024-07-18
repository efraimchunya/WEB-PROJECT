import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './about.css';

const About = () => {
  const[AboutData, setAboutData]= useState([]);

  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response=await axios.get('http://localhost:8080/api/about')
        setAboutData(response.data);
    }catch(error){
      console.error('Error fetching data:', error);
    }
    };

    fetchData();

  },[]);

  return (
    <div className="about_container">
        <h2>Get To Know About Me</h2>
        {AboutData.map(about => (
          <div className="about_me" key={about.id}>
            <h3>{about.title}</h3>
            <p>{about.description}</p>
          </div>
        ))}
      </div>
  );
};
      
export default About;