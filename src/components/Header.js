import React from "react";
import { NavLink, Link } from "react-router-dom";

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
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
        }
    }
    increment () {
        this.setState({
            counter: this.state.counter + 1,
        })
    }
    decrement() {
        this.setState({
            counter: this.state.counter - 1,
        })
    }
    render() {
        const {info} = this.props;
        return(
            <div className = "container">
                <header className="header" id="header">
                    <div id="logo"><NavLink to={"/"}><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/WorldofBoardGames.com.png" alt="WorldOfBoardgames.com logo"/></NavLink></div>
                    <div id="quick_link">
                        <Link to = "https://www.google.com/maps/place/Worldofboardgames.com/@63.8482097,20.3114261,15z/data=!4m2!3m1!1s0x0:0xc047bbd27173880b?sa=X&ved=2ahUKEwjF4LnVm6T9AhXL6CoKHWpSAYYQ_BJ6BAhxEAg"><i className="map"><img src="https://cdn-icons-png.flaticon.com/512/7007/7007020.png" alt="hitta till butiken" /></i></Link>
                        <NavLink to = "/login" activeClassName="active"><i className="knight"><img src="https://cdn-icons-png.flaticon.com/512/3819/3819284.png" alt="logga in eller skapa konto" /></i></NavLink>
                        <p>{info}</p>
                        <button onClick={() => this.increment()}><img src="https://cdn-icons-png.flaticon.com/512/5790/5790546.png"/></button>
                        <button onClick={() => this.decrement()}><img src="https://cdn-icons-png.flaticon.com/512/5790/5790239.png"/></button>
                        <h1>{this.state.counter}</h1>
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