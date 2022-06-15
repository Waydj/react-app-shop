import CartItem from "./CartItem";

export default function CartList(props) {
  const {
    order = [],
    handleOrder,
    removeItem,
    decQuantity,
    incQuantity,
  } = props;

  const totalPrice = order.reduce((summ, item) => {
    return summ + item.price.finalPrice * item.quantity;
  }, 0);

  return (
    <ul className="collection cartList">
      <li className="collection-item active title-cart blue lighten-1">
        Корзина
      </li>
      {order.length ? (
        order.map((item) => (
          <CartItem
            key={item.mainId}
            {...item}
            removeItem={removeItem}
            decQuantity={decQuantity}
            incQuantity={incQuantity}
          />
        ))
      ) : (
        <li className="collection-item">Корзина пуста...</li>
      )}
      <li className="collection-item active blue lighten-1">
        Общая стоимость:
        <span className="secondary-content">{totalPrice} руб.</span>
      </li>
      <i className="material-icons closeCart" onClick={handleOrder}>
        close
      </i>
    </ul>
  );
}
