import React from "react";
import { NavLink } from "react-router-dom";

function resp_menu(){
    var x = document.getElementById("myMenu");
  
    if (x.className === "menu" ) {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  
    document.getElementsByClassName("bar").classList.toggle("change");
  }

class Header extends React.Component{
    render() {
        return(
            <div className = "container">
                <header className="header" id="header">
                    <div id="logo"><NavLink to={"/"}><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/WorldofBoardGames.com.png" alt="WorldOfBoardgames.com logo"/></NavLink></div>
                    <div id="quick_link">
                        <a href = "https://www.google.com/maps/place/Worldofboardgames.com/@63.8482097,20.3114261,15z/data=!4m2!3m1!1s0x0:0xc047bbd27173880b?sa=X&ved=2ahUKEwjF4LnVm6T9AhXL6CoKHWpSAYYQ_BJ6BAhxEAg"><i className="map"><img src="https://cdn-icons-png.flaticon.com/512/5767/5767387.png" alt="hitta till butiken" /></i></a>
                        <NavLink to = "/login" activeClassName="active"><i className="knight"><img src="https://cdn-icons-png.flaticon.com/512/3819/3819346.png" alt="logga in eller skapa konto" /></i></NavLink>
                        <a href = "URL"><i className="cart"><img src="https://cdn-icons-png.flaticon.com/512/833/833314.png" alt="din kundvagn" /></i></a>
                        <a href="#footer"><i className="down"><img src="https://cdn-icons-png.flaticon.com/512/2985/2985149.png" alt="button to footer" /></i></a>
                    </div>
                </header>
                <nav className="menu" id="myMenu">
                    <NavLink to ="/" exact activeClassName="active">Hem</NavLink>
                    <NavLink to="/products" activeClassName="active">Alla Spel</NavLink>
                    <NavLink to="/categories" activeClassName="active">Kategorier</NavLink>
                    <NavLink to="/forum" activeClassName="active">Forum</NavLink>
                    <div className="search"><input type="text" name="search" placeholder="Sök" /></div>
                    <div id="menu" onClick={resp_menu}>
						<button type="button" id="menu_btn">
                            <div className="bar" id="bar1"></div>
                            <div className="bar" id="bar2"></div>
                            <div className="bar" id="bar3"></div>
						</button>
					</div>
                </nav>
            </div>
        );
    }
}
export default Header;