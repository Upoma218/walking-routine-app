import "./Cart.css"

const Cart = ({cart}) => {
    const {img, name, time} = cart;
    return (
        <div className='cart-body'>
            <img src={img} alt="" />
            <h4>Name: {name}</h4>
            <h6>Time Required: {time}</h6>
            <button>Add to list</button>
        </div>
    );
};

export default Cart;