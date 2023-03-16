import React from "react";

class Footer extends React.Component{
    render() {
        return(
            <footer className="footer" id="footer">
                <a href="#header"><i className="up"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/up.svg" alt="button to header" /></i></a>
              <div className="footer_info">
                <a href="https://www.google.com/maps/place/Worldofboardgames.com/@63.8482097,20.3114261,15z/data=!4m2!3m1!1s0x0:0xc047bbd27173880b?sa=X&ved=2ahUKEwjF4LnVm6T9AhXL6CoKHWpSAYYQ_BJ6BAhxEAg">
                  <img className="draggable" src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/map.svg" alt="hitta till butiken" />
                  Hitta oss!
                </a>
                <br /><a href="https://www.facebook.com/worldofboardgames/">
                  <img className="draggable" src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/face.png" alt="följ world of boardgames på facebook" />
                  Följ oss!
                </a>
                <br /><a href="https://www.worldofboardgames.com/om_oss.php">
                  <img className="draggable" src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kontakt.png" alt="Kontakta world of boardgames" />
                  Kontakta oss!
                </a>
              </div>
            </footer>
        );
    }
}
export default Footer;