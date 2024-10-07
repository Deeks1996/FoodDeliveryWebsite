import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import "../styles/cartstyle.css";
import { Container } from "react-bootstrap";
import Image1 from "../assets/menu/burger-11.jpg";
import Image2 from "../assets/menu/burger-12.jpg";

const Cart = ()=>{
    return(
        <>
            <Header/>
                <section className="cart_page pb-4">
                    <Container>
                        <div class="row pb-4 mt-4">
                            <div class="col-lg-8">
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <div class="row cart-item mb-3">
                                            <div class="col-md-3">
                                                <img src={Image1} alt="Product 1" class="img-fluid rounded"/>
                                            </div>
                                            <div class="col-md-5">
                                                <h5 class="card-title">Crispy Chicken</h5>
                                                
                                            </div>
                                            <div class="col-md-2">
                                                <div class="input-group">
                                                    <button class="btn btn-outline-secondary btn-sm" type="button">-</button>
                                                    <input  type="text" class="form-control  form-control-sm text-center quantity-input" value="1"/>
                                                    <button class="btn btn-outline-secondary btn-sm" type="button">+</button>
                                                </div>
                                            </div>
                                            <div class="col-md-2 text-end">
                                                <p class="fw-bold">$99.15</p>
                                                <button class="btn btn-sm btn-outline-danger">
                                                        <i class="bi bi-trash"></i>
                                                    </button>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div class="row cart-item">
                                            <div class="col-md-3">
                                                <img src={Image2} alt="Product 2" class="img-fluid rounded"/>
                                            </div>
                                            <div class="col-md-5">
                                                <h5 class="card-title">Item 2</h5>
                                                
                                            </div>
                                            <div class="col-md-2">
                                                <div class="input-group">
                                                    <button class="btn btn-outline-secondary btn-sm" type="button">-</button>
                                                    <input type="text" class="form-control form-control-sm text-center quantity-input" value="2"/>
                                                    <button class="btn btn-outline-secondary btn-sm" type="button">+</button>
                                                </div>
                                            </div>
                                            <div class="col-md-2 text-end">
                                                <p class="fw-bold">$99.32</p>
                                                <button class="btn btn-sm btn-outline-danger">
                                                        <i class="bi bi-trash"></i>
                                                    </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="text-start mb-4">
                                    <a href="/menu" class="btn btn-outline-primary">
                                        <i class="bi bi-arrow-left me-2"></i>Back to Menu
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card cart-summary">
                                    <div class="card-body">
                                        <h5 class="card-title mb-4">Order Summary</h5>
                                        <div class="d-flex justify-content-between mb-3">
                                            <span>Subtotal</span>
                                            <span>$200</span>
                                        </div>
                                        <div class="d-flex justify-content-between mb-3">
                                            <span>Shipping</span>
                                            <span>$10.00</span>
                                        </div>
                                        <div class="d-flex justify-content-between mb-3">
                                            <span>Tax</span>
                                            <span>$20.00</span>
                                        </div>
                                        <hr/>
                                        <div class="d-flex justify-content-between mb-4">
                                            <strong>Total</strong>
                                            <strong>$230.00</strong>
                                        </div>
                                        <button class="btn btn-primary w-100">Proceed to Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            <Footer/>
        </>
    )
}
export default Cart;
