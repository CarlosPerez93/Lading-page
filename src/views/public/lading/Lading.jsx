import { Card, Col, Row } from 'antd'
import React from 'react'
import Navbar from '../../../componets/navbar/Navbar'
import {
        FacebookFilled,
        InstagramFilled,
        TwitterCircleFilled
} from '@ant-design/icons';

export default function Lading() {
        return (
                <Col lg={{ span: 24, offset: 0 }} className='ladingMain'>

                        <Navbar />
                        <Row>

                                <Col lg={{ span: 10, offset: 2 }} xs={{ span: 10, offset: 2 }} >
                                        <img src=" ./imgm1.png" alt="img" className='ladingMain__img1' />
                                </Col>
                                <Col lg={{ span: 10, offset: 0 }} xs={{ span: 10, offset: 0 }} className='ladingMain__text1'>


                                        <h1>Restauracion de telefonos </h1>
                                </Col>
                        </Row>

                        <Col lg={{ span: 24, offset: 0 }} className='ladingMain__cards'>

                                <h1>Servicios</h1>
                                <Row>
                                        <Col lg={{ span: 6, offset: 2 }} xs={{ span: 6, offset: 2 }} >
                                                <Card hoverable className='ladingMain__cards--card'>
                                                        <img src="./preventivo.png" alt="img" />
                                                        <h2> Matenimietno preventivo </h2>
                                                </Card>
                                        </Col>
                                        <Col lg={{ span: 6, offset: 1 }} xs={{ span: 6, offset: 1 }}  >
                                                <Card hoverable className='ladingMain__cards--card' >
                                                        <img src="./display.png" alt="img" />
                                                        <h2>Cambio de display </h2>
                                                </Card>
                                        </Col>
                                        <Col lg={{ span: 6, offset: 1 }} xs={{ span: 6, offset: 1 }} >
                                                <Card hoverable className='ladingMain__cards--card' >
                                                        <img src="./baterias.png" alt="img" />
                                                        <h2>Reparacion y cambio de baterías </h2>
                                                </Card>
                                        </Col>
                                        <Col lg={{ span: 6, offset: 9 }} xs={{ span: 6, offset: 9 }} >
                                                <Card hoverable className='ladingMain__cards--card'>
                                                        <img src="./sistemas.png" alt="img" />
                                                        <h2>Reparacion de software</h2>
                                                </Card>
                                        </Col>

                                </Row>

                        </Col>

                        <Col className='ladingMain__contactos'>
                                <Row>
                                        <Col lg={{ span: 8, offset: 0 }}>
                                                <img src='./logo.png' alt='img' />
                                        </Col>
                                        <Col lg={{ span: 6, offset: 0 }}>
                                                <h2 className='h2uno'>Redes Sociales</h2>
                                                <p><FacebookFilled />  phoneClinic@utlook.com</p>
                                                <p><InstagramFilled />  phoneClinic@utlook.com</p>
                                                <p><TwitterCircleFilled />  phoneClinic@utlook.com</p>
                                        </Col>
                                        <Col lg={{ span: 6, offset: 0 }}>
                                                <h2 className='h2dos'>Wathsapp</h2>
                                                <img src='./wathsapp.png' alt='img' />
                                                <p>+573134158137</p>
                                        </Col>
                                </Row>
                        </Col>


                </Col>
        )
}
