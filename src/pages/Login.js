import React from "react";
import {Helmet} from "react-helmet";
import Config from "../Config.json";

const TITLE = "Logga in | Skapa konto | " + Config["SITE_TITLE"];
const DESC = "Logga in eller skapa konto"

class Login extends React.Component{
    render() {
        return(
            <main>
                <Helmet>
                    <title>{TITLE}</title>
                    <meta name="description" content={DESC} />
                    <meta name="theme-color" content={Config.THEME_COLOR} />
                </Helmet>
                <div className="login" id="change">
                    <h1>Logga in</h1>
                    <form action="/action_page.php">
                        <label for="email">E-Post:</label>
                        <input id="email" type="text" name="email" required="required" placeholder="Din e-post.." />
                    
                        <label for="pasword">Lösenord:</label>
                        <input id="pasword" type="text" name="pasword" required="required" placeholder="Ditt lösenord.." />
                        <input type="submit" value="Logga in" />
                    </form>
                </div>


                <div className="create_acount">
                    <h1>Skapa konto</h1>
                    <form action="/action_page.php">
                        <label for="username">Användarnamn:</label>
                        <input id="username" type="text" name="username" required="required" placeholder="Ditt användarnamn.." />
                    
                        <label for="email">E-Post:</label>
                        <input id="new_email" type="text" name="email" required="required" placeholder="Din e-post.." />

                        <label for="pasword">Lösenord:</label>
                        <input id="new_pasword" type="text" name="pasword" required="required" placeholder="Ditt lösenord.." />
                    
                        <label for="confirm_pasword">Bekräfta lösenord:</label>
                        <input id="confirm_pasword" type="text" name="confirm_pasword" required="required" placeholder="Ditt lösenord.." />
                    
                        <input type="submit" value="Registrera" />
                    </form>
                </div>
            </main>
        );
    }
}
export default Login;