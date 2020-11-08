import { Col, Menu, Row } from 'antd'
import React from 'react'


export default function Navbar() {
    return (
        <Row className='nabvar'>
 
                <img src='./logo.png' alt='img'  className='nabvar__logo' />
     
            <Col className='nabvar__menu'>
                <Menu mode='horizontal' className='nabvar__menu-main'>
                    <Menu.Item>Contacto</Menu.Item>
                    <Menu.Item>Services</Menu.Item>
                </Menu>
            </Col>
        </Row>
    )
}
