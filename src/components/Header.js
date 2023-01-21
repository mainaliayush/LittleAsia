import React, { useEffect, useState } from 'react'
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import HomePage from './HomePage';
import { DLT, ADD, REMOVE, SEARCH } from '../redux/actions/action'
import { useNavigate } from 'react-router-dom';
// New one
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {  
    const expand = 'xl';
    const [price, setPrice] = useState(0);
    const [searchInput, setSearchInput] = useState("")
    // console.log(price);

    // const [quantity, setquantity] = useState();
    const navigate = useNavigate();

    const getdata = useSelector((state) => state.cartreducer.carts);
    // console.log(getdata);

    const dispatch = useDispatch();

    const send = (e) => {
        // console.log(e);
        dispatch(ADD(e));
    }
    const submit = () => {
        dispatch(SEARCH(searchInput));
    }
    // remove one
    const remove = (item) => {
        dispatch(REMOVE(item))
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dlt = (id) => {
        dispatch(DLT(id))
    }

    const total = () => {
        let price = 0;
        getdata.map((ele, k) => {
            let tempPrice = parseFloat(ele.price)
            let tempQty = parseInt(ele.qnty)
            let tempInitPrice = parseFloat(price)
            price = ((tempPrice * tempQty + tempInitPrice)).toFixed(2);
        });
        setPrice(price);
    };

    useEffect(() => {
        total();
    }, [total])

    return (
        <>
            <Navbar key={expand} bg="dark" expand={expand}>
                <Container fluid>
                    <Navbar.Brand className="text-light mx-5" href="/">LITTLE ASIA</Navbar.Brand>
                    <Navbar.Toggle className="toggle" aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas  
                        style={{ background: "#363434", color:'white'}}
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                        
                    >
                        <Offcanvas.Header closeButton >
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                <p style={{ color: "white", marginLeft: "120px", marginTop: "10px" }}>FOODS</p>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        
                        <Offcanvas.Body>
                            <Nav className="justify-content-center flex-grow-1 pe-3">
                                <NavLink to="/nepali" className="text-decoration-none text-light mx-5 mt-2">NEPALI 🇳🇵</NavLink>
                                <NavLink to="/indian" className="text-decoration-none text-light mx-5 mt-2">INDIAN 🇮🇳</NavLink>
                                <NavLink to="/chinese" className="text-decoration-none text-light mx-5 mt-2">CHINESE 🇨🇳</NavLink>
                                <NavLink to="/thai" className="text-decoration-none text-light mx-5 mt-2">THAI 🇹🇭</NavLink>
                            </Nav>

                            <Form className="d-flex ">
                                <Form.Control
                                    style={{ width: '250px' }}
                                    type="search"
                                    placeholder="Search food..."
                                    className="me-1"
                                    aria-label="Search"
                                    cursor="pointer"
                                    value={searchInput}
                                    onChange={(e) => { setSearchInput(e.target.value); dispatch(SEARCH(e.target.value))}}
                                />
                                <Button onClick={() => {submit(); navigate(`/search/${searchInput}`)}} variant="outline-secondary" className="me-5">Search</Button>
                            </Form>

                            <div style={{ paddingTop: "5px", paddingRight: "25px" }}>
                                <Badge badgeContent={getdata.length} color="primary"
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    <i class="fa-solid fa-cart-shopping text-light  " style={{ fontSize: 25, cursor: "pointer" }}></i>
                                </Badge>
                            </div>


                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    {
                        getdata.length ?
                            <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Photo</th>
                                            <th>Restaurant Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getdata.map((e) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>
                                                                <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                                                    <img src={e.imgdata} style={{ width: "6.5rem", height: "6.5rem" }} alt="" />
                                                                </NavLink>
                                                            </td>
                                                            <td>
                                                                <p>{e.rname}</p>
                                                                <p>Price : ${e.price}</p>
                                                                <p>Quantity : {e.qnty}<span>
                                                                    <div className='mt-3 d-flex justify-content-between align-items-center' style={{ width: 60, cursor: "pointer", background: "#ddd", color: "#111" }}>
                                                                        <span style={{ fontSize: 18, marginLeft:'5px' }} onClick={e.qnty <= 1 ? () => dlt(e.id) : () => remove(e)}>-</span>
                                                                        <span style={{ fontSize: 16 }}>{e.qnty}</span>
                                                                        <span style={{ fontSize: 18, marginRight:'5px' }} onClick={() => send(e)}>+</span>
                                                                    </div>
                                                                </span></p>



                                                                {/* <p>Quantity : {e.qnty}</p> */}
                                                                <p style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                                                                    <i className='fas fa-trash smalltrash'></i>
                                                                </p>
                                                            </td>

                                                            <td className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                                                                <i className='fas fa-trash largetrash'></i>
                                                            </td>

                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                        <p className='text-center'><b>Total</b> : ${price}</p>
                                    </tbody>
                                </Table>
                            </div> :

                            <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                                <i className='fas fa-close smallclose'
                                    onClick={handleClose}
                                    style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                                <p style={{ fontSize: 22 }}>Your cart is empty</p>
                                <img src="./cart2.gif" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
                            </div>
                    }
                </Menu>
            
            </>
    )
}

export default Header