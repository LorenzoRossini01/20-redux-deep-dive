import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../store";

const CartItem = (props) => {
  const { quantity, price, totalPrice, title, id } = props.item;

  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(
      cartActions.addToCart({
        title,
        price,
        id,
      })
    );
  }

  function handleDecrementQuantity() {
    dispatch(cartActions.removeFromCart(id));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecrementQuantity}>-</button>
          <button onClick={handleAddToCart}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
