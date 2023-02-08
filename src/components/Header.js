import { useState,useContext } from "react";
import Logo from "../assets/img/foodvilla.png"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import useOnline from "../utils/useOnline";

const Title = () => (
    <a href="/">
        <img
            data-testid="logo"
            className="h-24 p-2"
            alt="logo"
            src={Logo}
        />
    </a>
);


const Header = () => {

    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const isOnline = useOnline();

    const { user } = useContext(UserContext);

    const cartItems = useSelector(store => store.cart.items);

    return (
        <div className="flex justify-between bg-pink-50 shadow-lg">
            <Title />
            <div className="nav-items">
                <ul className="flex py-10">
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about">About</Link></li>
                    <li className="px-2"><Link to="/contact">Contact</Link></li>
                    <li className="px-2"><Link to="/instamart">Instamart</Link></li>  
                    <Link to="/cart"><li className="px-2" data-testid="cart">Cart - {cartItems.length} items</li></Link>                 
                </ul>
            </div>
            <h1 data-testid="online-status">{isOnline ? "✅" : "🔴"}</h1>
            <span className="p-10 font-bold text-red-900">{ user.name }</span>
            {isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            ) : (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
            
            

        </div>
    );
};

export default Header;