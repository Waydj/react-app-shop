import GoodsItem from "./GoodsItem";

export default function GoodsList(props) {
  const { goods = [], addOrder } = props;

  if (!goods.length) {
    return <h3>Nothing here...</h3>;
  }

  return (
    <div className="goods">
      {goods.map((goods) => (
        <GoodsItem key={goods.mainId} {...goods} addOrder={addOrder} />
      ))}
    </div>
  );
}
