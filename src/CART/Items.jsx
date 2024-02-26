import React, { useState } from 'react';
function Items({ ImageItems, NameItem, SizeItem, ColorItem, PriceItem }) {
  const [quantidade, setQuantidade] = useState(1);

  const decrementarQuantidade = () => {if (quantidade > 1) {setQuantidade(quantidade - 1);}};
  const incrementarQuantidade = () => {setQuantidade(quantidade + 1);};

  return (
    <div className="Items">
      <img className="ImageItens" src={ImageItems} alt="SHOES" />
      <div className="descrition">
        <h1>{NameItem}</h1>
        <h2>{SizeItem}</h2>
        <h2>{ColorItem}</h2>
      </div>
      <div className="price">
        <h1>R${PriceItem}</h1>
        <div className="QuantItem">
          <button className="button-minus" onClick={decrementarQuantidade}>-</button>
          <input className="quantity" min="1" name="quantity" value={quantidade} type="number" disabled/>
          <button className="button-plus" onClick={incrementarQuantidade}>+</button>
        </div>
      </div>
    </div>
  )
}

export default Items;
