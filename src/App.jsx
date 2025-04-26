import React, { useState } from 'react';
import './App.css';
function PizzaOrder() {
  const [size, setSize] = useState('medium');
  const [type, setType] = useState('margherita');
  const [toppings, setToppings] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const availableToppings = ['cheese', 'pepperoni', 'mushrooms', 'onions'];

  const handleToppingChange = (topping) => {
    if (toppings.includes(topping)) {
      setToppings(toppings.filter(t => t !== topping));
    } else {
      setToppings([...toppings, topping]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div >
      
      <h2>Pizza Order Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Size:
          <select value={size} onChange={e => setSize(e.target.value)}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <br /><br />

        <label>
          Type:
          <select value={type} onChange={e => setType(e.target.value)}>
            <option value="margherita">Margherita</option>
            <option value="pepperoni">Pepperoni</option>
            <option value="veggie">Veggie</option>
          </select>
        </label>
        <br /><br />

        <fieldset>
          <legend>Toppings:</legend>
          {availableToppings.map(topping => (
            <label key={topping}>
              <input
                type="checkbox"
                checked={toppings.includes(topping)}
                onChange={() => handleToppingChange(topping)}
              />
              {topping}
            </label>
          ))}
        </fieldset>
        <br />
        <button type="submit">Place Order</button>
      </form>

      {submitted && (
        <div style={{ marginTop: '20px' }}>
          <h3>Your Order Summary:</h3>
          <p><strong>Size:</strong> {size}</p>
          <p><strong>Type:</strong> {type}</p>
          <p><strong>Toppings:</strong> {toppings.length > 0 ? toppings.join(', ') : 'None'}</p>
        </div>
      )}
    </div>
  );
}

export default PizzaOrder;
