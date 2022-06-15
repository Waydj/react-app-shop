export default function Cart(props) {
  const { quantity = 0, handleOrder } = props;

  return (
    <div className="cart blue lighten-1" onClick={handleOrder}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}
