export default function CartItem(props) {
  const {
    mainId,
    displayName,
    price,
    quantity,
    removeItem,
    incQuantity,
    decQuantity,
  } = props;

  return (
    <li className="collection-item">
      {displayName}{" "}
      <i
        className="material-icons item-quantity"
        onClick={() => incQuantity(mainId)}
      >
        add
      </i>{" "}
      {quantity}{" "}
      <i
        className="material-icons item-quantity"
        onClick={() => decQuantity(mainId)}
      >
        remove
      </i>{" "}
      = {price.finalPrice * quantity} руб.
      <span className="secondary-content">
        <i
          className="material-icons del-item"
          onClick={() => removeItem(mainId)}
        >
          close
        </i>
      </span>
    </li>
  );
}
