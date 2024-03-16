import React from 'react'
import { Col, Row } from 'react-bootstrap'
import OurValues from "./OurValues"
import Experience from './Experience'
import Footer from '../Footer/Footer'
const About = () => {
  return (
    <>
    About
    <h1>We are Altx Marketing Group.</h1>
    <Row>
      <Col></Col>
      <Col>
      <p>Positive</p>
      <p>Responsible</p>
      <p>Committed</p>
      <p>Curious</p>
      <p>And, a little salty!</p>
      </Col>
    </Row>
    <OurValues />
    <Experience />
    <Footer />
    </>
  )
}

export default About