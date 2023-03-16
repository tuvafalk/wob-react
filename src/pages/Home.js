import React from "react";
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";
import Config from "../Config.json";

const TITLE = "Start | " + Config["SITE_TITLE"];
const DESC = "Köp brädspel online"

class Home extends React.Component{
    render() {
        return(
            <main>
                <Helmet>
                    <title>{TITLE}</title>
                    <meta name="description" content={DESC} />
                    <meta name="theme-color" content={Config.THEME_COLOR} />
                </Helmet>
                <section className="toplist">
                    <h1>Topplistan</h1>
                    
                    <div className="top_games">
                    <div className="number_text">1 / 10</div>
                    <img className="displayed_top_games" src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/loveletter.png" alt="1. love letter" />
                    <div className="toplist_desc" onmouseover="mOver1(this)" onmouseout="mOut1(this)">1. Love Letter</div>
                    </div>
                    <div className="top_games">
                    <div className="number_text">2 / 10</div>
                    <img className="displayed_top_games" src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/bang.png" alt="2. bang!" />
                    <div className="toplist_desc" onmouseover="mOver2(this)" onmouseout="mOut2(this)">2. Bang! </div>

                    </div>
                    <div className="top_games">
                    <div className="number_text">3 / 10</div>
                    <img className="displayed_top_games" src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/catan.png" alt="3. catan" />
                    <div className="toplist_desc">3. Catan</div>
                    </div>
                    <div className="top_games">
                    <div className="number_text">4 / 10</div>
                    <img className="displayed_top_games" src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/tapestry.png" alt="4. tapestry" />
                    <div className="toplist_desc">4. Tapestry</div>
                    </div>
                    <div className="top_games">
                    <div className="number_text">5 / 10</div>
                    <img className="displayed_top_games" src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/7wondersduel.png" alt="5. 7 wonders duel" />
                    <div className="toplist_desc">5. 7 Wonders Duel</div>
                    </div>
                    <div className="top_games">
                    <div className="number_text">6 / 10</div>
                    <img className="displayed_top_games" src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/onedeckdungeon.png" alt="6. one deck dungeon" />  
                    <div className="toplist_desc">6. One Deck Dungeon</div>              
                    </div>
                    <div className="top_games">
                    <div className="number_text">7 / 10</div>
                    <img className="displayed_top_games" src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/arkhamhorror.png" alt="7. arkham horror" />
                    <div className="toplist_desc">7. Arkham Horror</div>
                    </div>
                    <div className="top_games">
                    <div className="number_text">8 / 10</div>
                    <img className="displayed_top_games" src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/houseonthehill.png" alt="8. house on the hill" />
                    <div className="toplist_desc">8. Betrayal at the House on the Hill</div>

                    </div>
                    <div className="top_games">
                    <div className="number_text">9 / 10</div>
                    <img className="displayed_top_games" src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/wingspan.png" alt="9. wingspan" />
                    <div className="toplist_desc">9. Wingspan</div>
                    </div>
                    <div className="top_games">
                    <div className="number_text">10 / 10</div>
                    <img className="displayed_top_games" src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/thecrew.png" alt="10.the crew" />
                    <div className="toplist_desc">10. The Crew</div>
                    </div>
                    <script>
                    let slideIndex = 1;
                    showSlides(slideIndex);
                    </script>
                    <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
                    <a className="next" onclick="plusSlides(1)">&#10095;</a>

                    <div className="row">
                    <div className="column">
                        <img className="demo" src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/thumbnail_loveletter.png" onclick="currentSlide(1)" alt="Love Letter" />
                    </div>
                    <div className="column">
                        <img className="demo" src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/thumbnail_bang.png" onclick="currentSlide(2)" alt="Bang!" />
                    </div> 
                    <div className="column">
                        <img className="demo" src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/thumbnail_catan.png" onclick="currentSlide(3)" alt="Catan" />
                    </div>
                        <div className="column">
                        <img className="demo" src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/thumbnail_tapestry.png" onclick="currentSlide(4)" alt="Tapestry" />
                    </div>
                    <div className="column">
                        <img className="demo" src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/thumbnail_7wondersduel.png" onclick="currentSlide(5)" alt="7 wonders duel" />
                    </div>
                    <div className="column">
                        <img className="demo" src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/thumbnail_onedeckdungeon.png" onclick="currentSlide(6)" alt="One deck dungeon" />
                    </div>
                    <div className="column">
                        <img className="demo" src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/thumbnail_arkhamhorror.png" onclick="currentSlide(7)" alt="Arkham Horror" />
                    </div>
                    <div className="column">
                        <img className="demo" src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/thumbnail_houseonthehill.png" onclick="currentSlide(8)" alt="House on the hill" />
                    </div>
                    <div className="column">
                        <img className="demo" src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/thumbnail_wingspan.png" onclick="currentSlide(9)" alt="Wingspan" />
                    </div>
                    <div className="column">
                        <img className="demo" src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/thumbnail_thecrew.png" onclick="currentSlide(10)" alt="The crew" />
                    </div>
                    </div>

                </section>

                <section className="about">
                    <h1>Om oss</h1> 
                    <p>
                    WorldofBoardGames b drivs av det svenska företaget Incrade KB (969701-0636). Incrade startades år 2004 och drivs av fem delägare, 
                    som arbetar med att utveckla olika projekt varav WorldofBoardGames.com är ett. Företaget är baserat i Umeå.</p>
                    <h3>Affärsidé</h3>
                    <p>
                    WorldofBoardGames affärsidé är att sälja brädspel, sällskapsspel och kortspel till låga priser samt att ge våra 
                    besökare bästa tänkbara information och service.</p>
                </section>

                <aside className="sale">
                    <h1>Erbjudanden</h1>
                    <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat4.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat5.png" alt="kategori" /></a>
                        <div className="desc">
                            <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                    </div>
                
                    <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat5.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat1.png" alt="kategori" /></a>
                        <div className="desc">
                        <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                    </div>

                    <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat4.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat5.png" alt="kategori" /></a>
                        <div className="desc">                
                            <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                    </div>
                
                    <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat5.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat1.png" alt="kategori" /></a>
                        <div className="desc">                
                        <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                    </div>
                
                    <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat4.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat5.png" alt="kategori" /></a>
                        <div className="desc">                
                            <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                    </div>
                
                    <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat5.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat1.png" alt="kategori" /></a>
                        <div className="desc">
                        <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                    </div>

                    <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat4.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat5.png" alt="kategori" /></a>
                        <div className="desc">
                            <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                    </div>
                
                    <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat5.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat1.png" alt="kategori" /></a>
                        <div className="desc">
                        <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                    </div>
                
                    <div className="clearfix"></div>
                </aside>

                <table className="forum_preview">
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
                </table>

                <table className="forum_smal">
                    <tr>
                    <th>Forum</th>
                    <th>Senaste inlägget</th>
                    </tr>
                    <tr>
                    <td>Allmänt om brädspel, kortspel och rollspel</td>
                    <td>Efter lyser ett familjebrädspel!</td>
                    </tr>
                    <tr>
                    <td>Brädspel att spela på internet eller ladda ner</td>
                    <td>Keyforge: Tokens</td>
                    </tr>
                    <tr>
                    <td>Butiken i umeå</td>
                    <td>Dessa spel kan du spela i butiken eller låna hem</td>
                    </tr>
                    <tr>
                    <td>Förslag på sällskapsspel/brädspel som du saknar i butiken</td>
                    <td>First Empires, Caesar's Empire, Orichalcum</td>
                    </tr>
                </table>
                        
                <aside className="extra" id="change">
                    <video  autoplay muted controls loop>
                    <source src="src/dice.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </aside>
            </main>
        );
    }
}
export default Home;