import React from 'react'
import { Col } from "react-bootstrap";

export const TeamCard = ({name, imgUrl, githublink, animation}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx mx-auto">
        <img src={imgUrl} alt="im"/>
        
        <div className="proj-txtx">
          <div className="link">
          <a href={githublink}>Github</a>
          </div>
        </div>
      </div>
      <p>{name}</p>
    </Col>
  )
}

export default TeamCard