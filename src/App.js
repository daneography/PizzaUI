import React, { useState } from 'react';
import './App.css';

const App = () => {

  const pizzas = [
    {id: 1, count: 7, title: 'Pepperoni', image: 'https://www.bhg.com/thmb/L42rOmj0pORpp2WwEwwXSltF-X4=/1244x0/filters:no_upscale():strip_icc()/thin-crust-pepperoni-vegetable-pizza-RU207102-9d5b6151a9074ec18a7af235fb332d83.jpg'},
    {id: 2, count: 4, title: 'Margherita', image: 'https://ooni.com/cdn/shop/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?crop=center&height=800&v=1644590192&width=800'},
    {id: 3, count: 3, title: 'Veggie', image: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza-500x500.jpg'},
    {id: 4, count: 3, title: 'Veggie', image: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza-500x500.jpg'},
    {id: 5, count: 3, title: 'Veggie', image: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza-500x500.jpg'},
    {id: 6, count: 3, title: 'Veggie', image: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza-500x500.jpg'},
  ]

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (pizzas.count < 10) {
      setCount(pizzas.count + 1);
    }
  };

  const handleDecrement = () => {
    if (pizzas.count > 0) {
      setCount(pizzas.count - 1);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Za</h1>
      </header>
      <main>
        <div className="content">
          <h2>Welcome to our Web App</h2>
          <div style={{ display: 'flex', maxWidth: '100vh'}}>
          {pizzas.map((pizzas) => (
          <div className="card" key={pizzas.id}>
            <img className="card-image" src={ pizzas.image } alt={ pizzas.title } />
            <div className="card-body">
              <div className="card-title">{ pizzas.title }</div>
                <div className="card-counter">
                <button disabled={pizzas.count === 0} onClick={ handleDecrement} >-</button>
                <span>{ pizzas.count }</span>
                <button disabled={pizzas.count === 10} onClick={ handleIncrement }>+</button>
                </div>
              </div>
            </div>
          ))}
          </div>
          <p>This is a basic responsive React web application...</p>
        </div>
      </main>
      <footer className="App-footer">
        <p>&copy; 2023 Your Company</p>
      </footer>
    </div>
  );
}

export default App;

