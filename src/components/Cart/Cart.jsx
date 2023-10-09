import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import Container from 'react-bootstrap/Container';
import trash from '../../assets/trash.svg'
import Form from 'react-bootstrap/Form';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../services/firebase/firebaseConfig';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'


export const Cart = () => {
    const { cartItems, removeItem, totalWidget, totalPrice, clear } = useContext(CartContext)

    const [formValues, setFormValues] = useState({
        name: "",
        phone: "",
        email: "",
    })

    const sendOrder = () => {
        if (formValues.name !== '' && formValues.phone !== '' && formValues.email !== '') {
            const order = {
                buyer: formValues, cartItems, total: totalPrice,
            }

            const orderCollection = collection(db, "orders")


            addDoc(orderCollection, order).then(({ id }) => {
                if (id) {
                    setFormValues({
                        name: "",
                        phone: "",
                        email: "",
                    })
                    clear()
                    Swal.fire("Tu Orden No: " + id + " ha sido enviada, pronto recibiras un correo con la informacion y el estado de tu compra ")
                }
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Es necesario completar todos los campos antes de enviar el formulario'
            })
        }
    }

    const handleChange = e => {
        setFormValues(prev => ({ ...prev, [e.target.name]: e.target.value, }))
    }

    if (!totalWidget) {
        return (
            <div className="cartbg">
                <h1>No hay items en tu carrito</h1>
                <Link to="/"><button className="index">Volver</button></Link>
            </div>
        )

    } else {
        return (
            <main className="cartView">
                <Container>
                    <div className="cartContainer">
                        <div className="cartItemsCards">{cartItems.map(item => (
                            <div className="cartItemsCard" key={item.id}>
                                <div className="imgCartItem"><img src={item.img} alt={item.alt} /></div>
                                <div className="infoCartItem">
                                    <h2>{item.name}</h2>
                                    <h2>Precio: ${item.price}</h2>
                                    <h2>Cantidad: {item.quantity}</h2>
                                </div>
                                <div><button className="deleteButton" onClick={() => removeItem(item.id)}><img src={trash} alt="delete button" /></button></div>
                            </div>
                        ))}
                        </div>

                        <div>
                        </div>
                        <div className="orderSummary">
                            <h3>Resumen de compra:</h3>
                            <h4>Total de productos: {totalWidget}</h4>
                            <h4>Precio final: ${totalPrice}</h4>

                        </div>
                        <div>
                            <button className="removeAllItems" onClick={() => clear()}>Vaciar carrito</button>
                        </div>
                        <div className="cont">
                            <div className="userData">
                                <h5>INGRESAR DATOS DE USUARIO</h5>
                                <div className="form">
                                    <>
                                        <Form.Label htmlFor="name" className="label">Nombre</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="name"
                                            aria-describedby="passwordHelpBlock"
                                            value={formValues.name}
                                            onChange={handleChange}
                                            name="name"
                                            autoComplete="name"
                                        />
                                        <Form.Label htmlFor="email" className="label">email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            id="email"
                                            aria-describedby="passwordHelpBlock"
                                            value={formValues.email}
                                            onChange={handleChange}
                                            name="email"
                                            autoComplete="email"
                                        />
                                        <Form.Label htmlFor="telephone" className="label">Telefono</Form.Label>
                                        <Form.Control
                                            type="tel"
                                            id="telephone"
                                            aria-describedby="passwordHelpBlock"
                                            value={formValues.phone}
                                            onChange={handleChange}
                                            name="phone"
                                            autoComplete="telephone"
                                        />

                                    </>
                                </div>
                                <button className="checkoutButton" onClick={sendOrder}>Finalizar compra</button>
                            </div>

                        </div>
                    </div>
                </Container>
            </main>
        )
    }
}
