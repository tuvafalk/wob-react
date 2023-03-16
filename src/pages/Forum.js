import React from "react";
import {Helmet} from "react-helmet";
import Config from "../Config.json";

const TITLE = "Forum | " + Config["SITE_TITLE"];
const DESC = "Forum att snacka med andra i"

class Forum extends React.Component{
    render() {
        return(
            <main>
                <Helmet>
                    <title>{TITLE}</title>
                    <meta name="description" content={DESC} />
                    <meta name="theme-color" content={Config.THEME_COLOR} />
                </Helmet>
                <table className="forum" id="change">
                    <tr>
                        <th>Forum</th>
                        <th>Ämne</th>
                        <th>Senaste inlägget</th>
                    </tr>
                    <tr>
                        <td>Allmänt om brädspel, kortspel och rollspel</td>
                        <td>Allmänt</td>
                        <td>Efter lyser ett familjebrädspel!</td>
                    </tr>
                    <tr>
                        <td>Brädspel att spela på internet eller ladda ner</td>
                        <td>Online</td>
                        <td>Keyforge: Tokens</td>
                    </tr>
                    <tr>
                        <td>Butiken i umeå</td>
                        <td>Butiken</td>
                        <td>Dessa spel kan du spela i butiken eller låna hem</td>
                    </tr>
                    <tr>
                        <td>Förslag på sällskapsspel/brädspel som du saknar i butiken</td>
                        <td>Butiken</td>
                        <td>First Empires, Caesar's Empire, Orichalcum</td>
                    </tr>
                    <tr>
                        <td>Allmänt om brädspel, kortspel och rollspel</td>
                        <td>Allmänt</td>
                        <td>Efter lyser ett familjebrädspel!</td>
                    </tr>
                    <tr>
                        <td>Brädspel att spela på internet eller ladda ner</td>
                        <td>Online</td>
                        <td>Keyforge: Tokens</td>
                    </tr>
                    <tr>
                        <td>Butiken i umeå</td>
                        <td>Butiken</td>
                        <td>Dessa spel kan du spela i butiken eller låna hem</td>
                    </tr>
                    <tr>
                        <td>Förslag på sällskapsspel/brädspel som du saknar i butiken</td>
                        <td>Butiken</td>
                        <td>First Empires, Caesar's Empire, Orichalcum</td>
                    </tr>
                    <tr>
                        <td>Allmänt om brädspel, kortspel och rollspel</td>
                        <td>Allmänt</td>
                        <td>Efter lyser ett familjebrädspel!</td>
                    </tr>
                    <tr>
                        <td>Brädspel att spela på internet eller ladda ner</td>
                        <td>Online</td>
                        <td>Keyforge: Tokens</td>
                    </tr>
                    <tr>
                        <td>Butiken i umeå</td>
                        <td>Butiken</td>
                        <td>Dessa spel kan du spela i butiken eller låna hem</td>
                    </tr>
                    <tr>
                        <td>Förslag på sällskapsspel/brädspel som du saknar i butiken</td>
                        <td>Butiken</td>
                        <td>First Empires, Caesar's Empire, Orichalcum</td>
                    </tr>
                    <tr>
                        <td>Allmänt om brädspel, kortspel och rollspel</td>
                        <td>Allmänt</td>
                        <td>Efter lyser ett familjebrädspel!</td>
                    </tr>
                    <tr>
                        <td>Brädspel att spela på internet eller ladda ner</td>
                        <td>Online</td>
                        <td>Keyforge: Tokens</td>
                    </tr>
                    <tr>
                        <td>Butiken i umeå</td>
                        <td>Butiken</td>
                        <td>Dessa spel kan du spela i butiken eller låna hem</td>
                    </tr>
                    <tr>
                        <td>Förslag på sällskapsspel/brädspel som du saknar i butiken</td>
                        <td>Butiken</td>
                        <td>First Empires, Caesar's Empire, Orichalcum</td>
                    </tr>
                    <tr>
                        <td>Allmänt om brädspel, kortspel och rollspel</td>
                        <td>Allmänt</td>
                        <td>Efter lyser ett familjebrädspel!</td>
                    </tr>
                    <tr>
                        <td>Brädspel att spela på internet eller ladda ner</td>
                        <td>Online</td>
                        <td>Keyforge: Tokens</td>
                    </tr>
                    <tr>
                        <td>Butiken i umeå</td>
                        <td>Butiken</td>
                        <td>Dessa spel kan du spela i butiken eller låna hem</td>
                    </tr>
                    <tr>
                        <td>Förslag på sällskapsspel/brädspel som du saknar i butiken</td>
                        <td>Butiken</td>
                        <td>First Empires, Caesar's Empire, Orichalcum</td>
                    </tr>
                    <tr>
                        <td>Allmänt om brädspel, kortspel och rollspel</td>
                        <td>Allmänt</td>
                        <td>Efter lyser ett familjebrädspel!</td>
                    </tr>
                    <tr>
                        <td>Brädspel att spela på internet eller ladda ner</td>
                        <td>Online</td>
                        <td>Keyforge: Tokens</td>
                    </tr>
                    <tr>
                        <td>Butiken i umeå</td>
                        <td>Butiken</td>
                        <td>Dessa spel kcan du spela i butiken eller låna hem</td>
                    </tr>
                    <tr>
                        <td>Förslag på sällskapsspel/brädspel som du saknar i butiken</td>
                        <td>Butiken</td>
                        <td>First Empires, Caesar's Empire, Orichalcum</td>
                    </tr>
                </table>
            </main>
        );
    }
}
export default Forum;