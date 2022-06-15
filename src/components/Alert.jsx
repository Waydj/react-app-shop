import { useEffect } from "react";

export default function Alert(props) {
  const { name, handleAlert } = props;

  useEffect(() => {
    const timerId = setTimeout(handleAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line
  }, [name]);

  return (
    <div id="toast-container">
      <div className="toast">{name} добавлен в корзину</div>
    </div>
  );
}
