import React, { useState } from 'react';

function PizzaCard(props) {
  const [quantity, setQuantity] = useState(1);
  const [diameter, setDiameter] = useState('19');
  const handleDiameterChange = (event) => 
    {
    setDiameter(event.target.value);
  };

  const minus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const plus = () => {
    setQuantity(quantity + 1);
  };

  const displayAlert = () => {
    alert(`Заказ на пиццу размером ${diameter} см. Количество: ${quantity} `);
  };

  return (
    <div className="block">
      <div className="jpg">
        <img src={props.img} />
      </div>
      <form>
        <label for="diameter">Диаметр:</label>
        <select className="diameter" name="diameter" id="diameter" value={diameter} onChange={handleDiameterChange}>
            <option value="19">19 cm</option>
            <option value="27">27 cm</option>
            <option value="35">35 cm</option>
            <option value="42">42 cm</option>
        </select>
        </form>
      <div className="class">
        <div className="title">{props.title}</div>
        <div className="info">{props.text}</div>
        <div className="price">{props.price}</div>
      </div>
      <div className="select">
        <button onClick={minus}>-</button>
        <span>{quantity}</span>
        <button onClick={plus}>+</button>
        <button className="btn" onClick={displayAlert}>
          Сделать заказ
        </button>
      </div>
    </div>
  );
}

export default PizzaCard;