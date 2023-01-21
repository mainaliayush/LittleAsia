import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Cardsdata from './CardsData'
import "./style.css";
import { useSelector, useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const CardsFood = () => {
  const navigate = useNavigate(); 
  // console.log(window.location.href.split("/"))
  const [data, setData] = useState(Cardsdata);
  // console.log(data);
 const searchInput = useSelector((state) => state.searchReducer)
  const { food } = useParams();
  console.log(food)
  
  const dispatch = useDispatch();

  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  }

  return (
    <div className='container mt-3'>
      {/* <h2 className='text-center mt-5'>🍴 {cuisine.toUpperCase()} FOOD MENU 🍴</h2> */}

      <div className="row d-flex justify-content-center align-items-center">
        {
          data.map((element, id) => {
            if (element.rname.toLowerCase().includes(food.toLowerCase())) {
              return (
                <>
                  {/* <Link  to={'./'}> */}
                    <Card style={{ width: '22rem', border: "none" }} onClick = {() => { navigate(`/cart/${element.id}`);}} className="mx-2 mt-4 card_style">
                      <Card.Img variant="top" src={element.imgdata} style={{ height: "16rem" }} className="mt-3" />
                      <Card.Body>
                        <Card.Title>{element.rname}</Card.Title>
                        <Card.Text>
                          Price : $ {element.price}
                        </Card.Text>
                        <div className="button_div d-flex justify-content-center">
                          <Button variant="primary"
                            onClick={(e) => {e.stopPropagation(); send(element)}}
                            className='col-lg-12 btn-dark'>Add to Cart</Button>
          
                        </div>
                      
                      </Card.Body>
                    </Card>
                  {/* </Link> */}
                </>
              )
            }
          })
        }

      </div>
    </div>
  )
}

export default CardsFood;