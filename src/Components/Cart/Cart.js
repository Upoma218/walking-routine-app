import "./Cart.css"

const Cart = (props) => {
    const {img, name, time} = props.cart;
    return (
        <div className='cart-body'>
            <img src={img} alt="" />
            <h4>Name: {name}</h4>
            <p>Every morning , I like to go for jogging! It keeps my physical and mental health fresh!</p>
            <h4>For age: 20-30</h4>
            <h4>Time Required: {time}</h4>
            <button onClick={() =>props.handleAddTime(props.cart)}>Add to list</button>
        </div>
    );
};

export default Cart;