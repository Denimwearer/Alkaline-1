




const Navbar = () => {
  return (
    <div className="container">
      <div className="item">
        <div className="callButton">
          <img src="telephone.png" alt="telephone"></img>
        </div>
        <div className="texts">
          <div className="text">ORDER NOW!</div>
          <div className="text">470 869 7559</div>
        </div>
      </div>
      <div className="item">
        <ul className="list">
          <a href="/">
            <li className="listItem">Homepage</li>
          </a>
          <li className="listItem">Products</li>
          <li className="listItem">Menu</li>
          <img className="logo" src="Alkaline-1.jpg" alt="logo"></img>
          <li className="listItem">Events</li>
          <li className="listItem">Blog</li>
          <li className="listItem">Contact</li>
        </ul>
      </div>
      <a href="/cart">
        <div className="item">
          <div className="cart">
            <img src="cart.png" alt="cart"></img>
            <div className="counter"></div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Navbar;
