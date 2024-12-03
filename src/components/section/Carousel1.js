import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import { CarouselItem } from 'react-bootstrap';

export class Carousel1 extends Component {

    render() {
        return (
            <Fragment>

{/* Carousel GSM */}
                
                <Carousel className="container carouselGsm  my-5">
                    <CarouselItem>
                        <CardDeck>
                            <Card>
                                <div className="tailleDiv">
                                    <Card.Img variant="top" src="./img/snk.jpg" className="h-100" />
                                </div>
                                <Card.Body>
                                <Card.Title>Shingeki no Kyojin</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Il y a 10 minutes</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </CarouselItem>
                    <CarouselItem>
                        <CardDeck>
                            <Card>
                                <div className="tailleDiv">
                                    <Card.Img variant="top" src="./img/dn.jpg" className="h-100" />
                                </div>
                                <Card.Body>
                                <Card.Title>Death Note</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Il y a 20 minutes</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </CarouselItem>
                    <CarouselItem>
                        <CardDeck>
                            <Card>
                                <div className="tailleDiv">
                                    <Card.Img variant="top" src="./img/ds.jpg" className="h-100" />
                                </div>
                                <Card.Body>
                                <Card.Title>Demon Slayer</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Il y a 35 minutes</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </CarouselItem>
                    <CarouselItem>
                        <CardDeck>
                            <Card>
                                <div className="tailleDiv">
                                    <Card.Img variant="top" src="./img/tog.jpg" className="h-100" />
                                </div>
                                <Card.Body>
                                <Card.Title>Tower of God</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Il y a 40 minutes</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </CarouselItem>
                    <CarouselItem>
                        <CardDeck>
                            <Card>
                                <div className="tailleDiv">
                                    <Card.Img variant="top" src="./img/psy.jpg" className="h-100" />
                                </div>
                                <Card.Body>
                                <Card.Title>Psyren</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Il y a 55 minutes</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </CarouselItem>
                    <CarouselItem>
                        <CardDeck>
                            <Card>
                                <div className="tailleDiv">
                                    <Card.Img variant="top" src="./img/op.jpeg" className="h-100" />
                                </div>
                                <Card.Body>
                                <Card.Title>One Piece</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Il y a 1 heures</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </CarouselItem>
                    <CarouselItem>
                        <CardDeck>
                            <Card>
                                <div className="tailleDiv">
                                    <Card.Img variant="top" src="./img/tg.jpg" className="h-100" />
                                </div>
                                <Card.Body>
                                <Card.Title>Tokyo Ghoul</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Il y a 2 heures</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </CarouselItem>
                    <CarouselItem>
                        <CardDeck>
                            <Card>
                                <div className="tailleDiv">
                                    <Card.Img variant="top" src="./img/satan.jpg" className="h-100" />
                                </div>
                                <Card.Body>
                                <Card.Title>Satan 666</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Il y a 3 heures</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </CarouselItem>
                    <CarouselItem>
                        <CardDeck>
                            <Card>
                                <div className="tailleDiv">
                                    <Card.Img variant="top" src="./img/boxe.png" className="h-100" />
                                </div>
                                <Card.Body>
                                <Card.Title>Hajime No Ippo</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Il y a 4 heures</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </CarouselItem>
                    <CarouselItem>
                        <CardDeck>
                            <Card>
                                <div className="tailleDiv">
                                    <Card.Img variant="top" src="./img/boruto.jpg" className="h-100" />
                                </div>
                                <Card.Body>
                                <Card.Title>Boruto</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Il y a 5 heures</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </CarouselItem>
                </Carousel>

{/* Carousel Tablette */}

                <Carousel className="carouselTablette container my-5">
                    <Carousel.Item>
                        <CardDeck>
                            <Card>
                                <div className="tailleDiv">
                                    <Card.Img variant="top" src="./img/snk.jpg" className="h-100" />
                                </div>
                                <Card.Body>
                                <Card.Title>Shingeki no Kyojin</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Il y a 10 minutes</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <div className="tailleDiv">
                                    <Card.Img variant="top" src="./img/dn.jpg" className="h-100" />
                                </div>
                                <Card.Body>
                                <Card.Title>Death Note</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Il y a 20 minutes</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <div className="tailleDiv">
                                    <Card.Img variant="top" src="./img/ds.jpg" className="h-100" />
                                </div>
                                <Card.Body>
                                <Card.Title>Demon Slayer</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Il y a 35 minutes</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </Carousel.Item>
                    <CarouselItem>
                        <CardDeck>
                            <Card>
                                <div className="tailleDiv">
                                    <Card.Img variant="top" src="./img/tog.jpg" className="h-100" />
                                </div>
                                <Card.Body>
                                <Card.Title>Tower of God</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Il y a 40 minutes</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <div className="tailleDiv">
                                    <Card.Img variant="top" src="./img/psy.jpg" className="h-100" />
                                </div>
                                <Card.Body>
                                <Card.Title>Psyren</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Il y a 55 minutes</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <div className="tailleDiv">
                                <Card.Img variant="top" src="./img/op.jpeg" className="h-100" />
                                </div>
                                <Card.Body>
                                <Card.Title>One Piece</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Il y a 1 heures</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </CarouselItem>
                    <CarouselItem>
                        <CardDeck>
                            <Card>
                                <div className="tailleDiv">
                                    <Card.Img variant="top" src="./img/tg.jpg" className="h-100" />
                                </div>
                                <Card.Body>
                                <Card.Title>Tokyo Ghoul</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Il y a 2 heures</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <div className="tailleDiv">
                                    <Card.Img variant="top" src="./img/satan.jpg" className="h-100" />
                                </div>
                                <Card.Body>
                                <Card.Title>Satan 666</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Il y a 3 heures</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <div className="tailleDiv">
                                    <Card.Img variant="top" src="./img/boxe.png" className="h-100" />
                                </div>
                                <Card.Body>
                                <Card.Title>Hajime No Ippo</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Il y a 4 heures</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </CarouselItem>
                </Carousel>

{/* Carousel PC */}

                <Carousel className="container my-5 carton">
                    <CarouselItem>
                        <CardDeck>
                            <Card>
                                <Card.Img variant="top" src="./img/snk.jpg" className="h-50" />
                                <Card.Body>
                                <Card.Title>Shingeki no Kyojin</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Il y a 10 minutes</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="./img/dn.jpg" className="h-50" />
                                <Card.Body>
                                <Card.Title>Death Note</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Il y a 20 minutes</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="./img/ds.jpg" className="h-50" />
                                <Card.Body>
                                <Card.Title>Demon Slayer</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Il y a 35 minutes</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="./img/tog.jpg" className="h-50" />
                                <Card.Body>
                                <Card.Title>Tower of God</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Il y a 40 minutes</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="./img/psy.jpg" className="h-50" />
                                <Card.Body>
                                <Card.Title>Psyren</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Il y a 55 minutes</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </CarouselItem>
                    <Carousel.Item>
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src="./img/op.jpeg" className="h-50" />
                            <Card.Body>
                            <Card.Title>One Piece</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Il y a 1 heures</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="./img/tg.jpg" className="h-50" />
                            <Card.Body>
                            <Card.Title>Tokyo Ghoul</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Il y a 2 heures</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="./img/satan.jpg" className="h-50" />
                            <Card.Body>
                            <Card.Title>Satan 666</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Il y a 3 heures</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="./img/boxe.png" className="h-50" />
                            <Card.Body>
                            <Card.Title>Hajime No Ippo</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Il y a 4 heures</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="./img/boruto.jpg" className="h-50" />
                            <Card.Body>
                            <Card.Title>Boruto</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Il y a 5 heures</small>
                            </Card.Footer>
                        </Card>
                        </CardDeck>
                    </Carousel.Item>
                </Carousel>
            </Fragment>
        )
    }
}

export default Carousel1
