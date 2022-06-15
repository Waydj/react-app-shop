export default function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    price,
    displayAssets,
    addOrder,
  } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={displayAssets[0].full_background} alt={displayName} />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() => addOrder({ mainId, displayName, price })}
        >
          Купить
        </button>
        <span className="rigth price">{price.finalPrice} руб.</span>
      </div>
    </div>
  );
}
