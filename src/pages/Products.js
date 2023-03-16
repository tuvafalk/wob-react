import React from "react";
import {Helmet} from "react-helmet";
import Config from "../Config.json";

const TITLE = "Produkter | " + Config["SITE_TITLE"];
const DESC = "Alla spel, går att sortera på kategorier"

class Products extends React.Component{
    render() {
        return(
            <main>
                <Helmet>
                    <title>{TITLE}</title>
                    <meta name="description" content={DESC} />
                    <meta name="theme-color" content={Config.THEME_COLOR} />
                </Helmet>
                <section className="category_info">
                    <h2>Sällskapsspel</h2>
                    <br />
                    <br />
                    <br />
                    <p className="info">Familjespel och vuxen/partyspel är lättsamma sällskapsspel som oftast är enkla att komma igång med och spela. Är man mer intresserad av strategier och att försöka planera och utmanövrera sina motståndare så ska man ta en titt på strategispelsavdelningen. Krigsspel är för dem som verkligen gillar konflikter och att bråka ordentligt. Sen så finns såklart barnspel för de lite yngre spelarna. Under kategorin kortspel finns de sällskapsspel som främst är uppbyggda av kort. </p>
                    <br />
                    <p className="all_categories">
                    <a href="https://www.worldofboardgames.com/barnspel">Barnspel</a>
                        | 							
                    <a href="https://www.worldofboardgames.com/familjespel">Familjespel</a>
                        | 							
                    <a href="https://www.worldofboardgames.com/kortspel">Kortspel</a>
                        | 							
                    <a href="https://www.worldofboardgames.com/krigsspel">Krigsspel</a>
                        | 							
                    <a href="https://www.worldofboardgames.com/rollspel">Rollspel</a>
                        | 							
                    <a href="https://www.worldofboardgames.com/strategispel">Strategispel</a>
                        | 							
                    <a href="https://www.worldofboardgames.com/vuxen_partyspel">Vuxen/partyspel</a>        
                    </p>
                </section>

                <aside className="aside_products">
                    <img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/clouds.jpg" alt="clouds" />
                </aside>

                <div className="product_display" id="change">
                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat4.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat5.png" alt="kategori" /></a>
                        <div className="desc">
                        <h2>650kr</h2>
                        <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat4.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat5.png" alt="kategori" /></a>
                        <div className="desc">
                        <h2>370kr</h2>
                        <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat4.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat5.png" alt="kategori" /></a>
                        <div className="desc">
                        <h2>150kr</h2>
                        <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat4.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat5.png" alt="kategori" /></a>
                        <div className="desc">
                        <h2>750kr</h2>
                        <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat4.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat5.png" alt="kategori" /></a>
                        <div className="desc">
                        <h2>50kr</h2>
                        <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat4.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat5.png" alt="kategori" /></a>
                        <div className="desc">
                        <h2>75kr</h2>
                        <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat4.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat5.png" alt="kategori" /></a>
                        <div className="desc">
                        <h2>120kr</h2>
                        <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat4.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat5.png" alt="kategori" /></a>
                        <div className="desc">
                        <h2>769kr</h2>
                        <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat4.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat5.png" alt="kategori" /></a>
                        <div className="desc">
                        <h2>750kr</h2>
                        <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat4.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat5.png" alt="kategori" /></a>
                        <div className="desc">
                        <h2>399kr</h2>
                        <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat4.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat5.png" alt="kategori" /></a>
                        <div className="desc">
                        <h2>200kr</h2>
                        <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat4.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat5.png" alt="kategori" /></a>
                        <div className="desc">
                        <h2>750kr</h2>
                        <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat4.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat5.png" alt="kategori" /></a>
                        <div className="desc">
                        <h2>489kr</h2>
                        <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat4.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat5.png" alt="kategori" /></a>
                        <div className="desc">
                        <h2>750kr</h2>
                        <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat4.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat5.png" alt="kategori" /></a>
                        <div className="desc">
                        <h2>50kr</h2>
                        <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat4.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat5.png" alt="kategori" /></a>
                        <div className="desc">
                        <h2>439kr</h2>
                        <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat4.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat5.png" alt="kategori" /></a>
                        <div className="desc">
                        <h2>43kr</h2>
                        <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat4.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat5.png" alt="kategori" /></a>
                        <div className="desc">
                        <h2>539kr</h2>
                        <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat4.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat5.png" alt="kategori" /></a>
                        <div className="desc">
                        <h2>400kr</h2>
                        <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat4.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat5.png" alt="kategori" /></a>
                        <div className="desc">
                        <h2>444kr</h2>
                        <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat4.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat5.png" alt="kategori" /></a>
                        <div className="desc">
                        <h2>747kr</h2>
                        <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat4.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat5.png" alt="kategori" /></a>
                        <div className="desc">
                        <h2>999kr</h2>
                        <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat4.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat5.png" alt="kategori" /></a>
                        <div className="desc">
                        <h2>182kr</h2>
                        <button className="buy" onclick="this.innerHTML='I korgen!'">Köp</button>
                        </div>
                    </div>
                </div>

                <div className="clearfix"></div>

                </div>
            </main>
        );
    }
}
export default Products;