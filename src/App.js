import React, { useState } from "react";
import {
	Breadcrumb,
	Row,
	Col,
	Carousel,
	Dropdown,
	Figure,
	ListGroup,
	Jumbotron,
	Button,
	Form,
	Image,
	Modal,
} from "react-bootstrap";

function App() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div>
			<Row style={{ background: "black" }}>
				<Col>
					<Dropdown>
						<Dropdown.Toggle id="dropdown-basic">
							Pilih Bahasa
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href="#/action-1">Indonesia</Dropdown.Item>
							<Dropdown.Item href="#/action-2">English</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Germany</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Japan</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Italian</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Col>

				<Col className="col-2">
					<Figure>
						<Figure.Image
							width={40}
							height={40}
							alt="171x180"
							src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
						/>
						<Figure.Caption style={{ color: "white" }}>
							Alan Saputra
						</Figure.Caption>
					</Figure>
				</Col>
			</Row>

			<Row className="d-flex justify-content-end ">
				<Col className="col-4">
					<Breadcrumb>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>Berita</Breadcrumb.Item>
						<Breadcrumb.Item>Bola</Breadcrumb.Item>
					</Breadcrumb>
				</Col>
			</Row>

			<br />

			<Row className="d-flex justify-content-center">
				<Carousel style={{ width: "800px" }}>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
							alt="First slide"
						/>
						<Carousel.Caption>
							<h3>Neymar Bahas Kontrak Baru Di Paris Saint-Germain</h3>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
							alt="Second slide"
						/>
						<Carousel.Caption>
							<h3>Inggris Mau Jadi Tim Terbaik Di Dunia</h3>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
							alt="Third slide"
						/>
						<Carousel.Caption>
							<h3>
								Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia
								U-23 Tetap Bagus
							</h3>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</Row>

			<br />

			<Row>
				<Col>
					<ListGroup defaultActiveKey="#link1">
						<ListGroup.Item action href="#link1">
							Liga 1 Indonesia
						</ListGroup.Item>
						<ListGroup.Item action href="#link2">
							Liga Primer Inggris
						</ListGroup.Item>
						<ListGroup.Item disabled href="#link3">
							Divisi Primera
						</ListGroup.Item>
						<ListGroup.Item action href="#link4">
							Serie A
						</ListGroup.Item>
						<ListGroup.Item action href="#link5">
							Ligue 1
						</ListGroup.Item>
						<ListGroup.Item action href="#link6">
							Bundesliga
						</ListGroup.Item>
					</ListGroup>
				</Col>

				<Col className="col-5">
					<Jumbotron>
						<h1>DIVISI PRIMERA</h1>
						<p>Main Untuk Catalunya, Gerard Pique Minta Dihormati</p>
						<Button>Read More</Button>
					</Jumbotron>
				</Col>

				<Col>
					<div className="text-center">
						<Image
							width={80}
							height={80}
							src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
						/>
						<h3>Silahkan Login</h3>
					</div>
					<Form>
						<Form.Group>
							<Form.Control type="email" placeholder="Masukkan email" />
						</Form.Group>

						<Form.Group>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
						<Form.Group controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Term & Condition" />
						</Form.Group>
						<Button variant="primary" type="submit" onClick={handleShow}>
							Login
						</Button>
					</Form>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Login</Modal.Title>
						</Modal.Header>
						<Modal.Body>Anda berhasil login</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Close
							</Button>
							<Button variant="primary" onClick={handleClose}>
								Save Username & Password
							</Button>
						</Modal.Footer>
					</Modal>
				</Col>
			</Row>
		</div>
	);
}

export default App;
