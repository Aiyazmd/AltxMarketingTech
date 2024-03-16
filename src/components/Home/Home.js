import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import HowWeWork from "./HowWeWork"
import Footer from "../Footer/Footer"
const Home = () => {
    return (
        <div>
            <h1>Altex Marketing.co</h1>

            <Row>
                <Col>
                    <h3>A full-funnel marketing firm born FROM operators, FOR operators.</h3>
                    <h3>We exist to give midsize businesses and late-stage startups a leg up.</h3>
                </Col>
                <Col>
                    <Image />
                </Col>
            </Row>
            <div>
                <h1>Salt  enhances your best qualities.</h1>
            </div>
             <HowWeWork />
             <Footer />
        </div>
    )
}

export default Home