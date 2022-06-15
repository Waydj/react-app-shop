import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import Preloader from "./Preloader";
import GoodsList from "./Goods";
import Cart from "./Cart";
import CartList from "./CartList";
import Alert from "./Alert";

export default function Main() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isCartShow, setCartShow] = useState(false);
  const [alert, setAlert] = useState("");

  const handleAlert = () => {
    setAlert("");
  };

  const addOrder = (item) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.mainId === item.mainId
    );

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlert(item.displayName);
  };

  const incQuantity = (mainId) => {
    const newOrder = order.map((el) => {
      if (el.mainId === mainId) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const decQuantity = (mainId) => {
    const newOrder = order.map((el) => {
      if (el.mainId === mainId) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const removeItem = (mainId) => {
    const newOrder = order.filter((el) => el.mainId !== mainId);
    setOrder(newOrder);
  };

  const handleOrder = () => {
    setCartShow(!isCartShow);
  };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((responce) => responce.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} handleOrder={handleOrder} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addOrder={addOrder} />
      )}
      {isCartShow && (
        <CartList
          order={order}
          handleOrder={handleOrder}
          removeItem={removeItem}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      )}
      {alert && <Alert handleAlert={handleAlert} name={alert} />}
    </main>
  );
}
