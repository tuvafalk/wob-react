import React from "react";
import {Helmet} from "react-helmet";
import Config from "../Config.json";

const TITLE = "Kategorier | " + Config["SITE_TITLE"];
const DESC = "Alla kategiorier"

class Categories extends React.Component{
    render() {
        return(
            <main>
                <Helmet>
                    <title>{TITLE}</title>
                    <meta name="description" content={DESC} />
                    <meta name="theme-color" content={Config.THEME_COLOR} />
                </Helmet>
                <div className="category_display" id="change">
                    <div className="responsive">
                        <div className="gallery">
                            <a target="_blank" href="src/kat4.png"><img src="https://cdn-icons-png.flaticon.com/512/4370/4370499.png" alt="kategori" /></a>
                            <div className="desc" id="flip1"><p>Barnspel</p></div>
                            <div className="exp" id="panel1">Till barnspel räknar vi de spel som främst vänder sig till barn mellan 3 och 10 år. När man väljer spel för barn är det bra att tänka på några olika faktorer som tex speltid, barnens intressen, spelets möjlighet att utveckla olika färdigheter osv. Lämplig speltid beror på barnets förmåga att koncentrera sig.</div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a target="_blank" href="src/kat5.png"><img src="https://cdn-icons-png.flaticon.com/512/2642/2642410.png" alt="kategori" /></a>
                            <div className="desc" id="flip2"><p>Familjespel</p></div>
                            <div className="exp" id="panel2">Familjespel är de spel vi tycker passar bra för hela familjen. Spel som är perfekta att ha med sig under semestrar, högtider eller en helg med släkt och vänner. Oftast kan man spela dessa spel från ungefär 7-8 år och uppåt.</div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a target="_blank" href="src/kat1.png"><img src="https://cdn-icons-png.flaticon.com/512/2822/2822374.png" alt="kategori" /></a>
                            <div className="desc"><p>Krigsspel</p></div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a target="_blank" href="src/kat1.png"><img src="https://cdn-icons-png.flaticon.com/512/3425/3425781.png" alt="kategori" /></a>
                            <div className="desc"><p>Kortspel</p></div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a target="_blank" href="src/kat2.png"><img src="https://cdn-icons-png.flaticon.com/512/3943/3943791.png" alt="kategori" /></a>
                            <div className="desc"><p>Rollspel</p></div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a target="_blank" href="src/kat3.png"><img src="https://cdn-icons-png.flaticon.com/512/9420/9420029.png" alt="kategori" /></a>
                            <div className="desc"><p>Strategispel</p></div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a target="_blank" href="src/kat3.png"><img src="https://cdn-icons-png.flaticon.com/512/2642/2642256.png" alt="kategori" /></a>
                            <div className="desc"><p>Vuxen/partyspel</p></div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a target="_blank" href="src/kat4.png"><img src="https://cdn-icons-png.flaticon.com/512/2417/2417872.png" alt="kategori" /></a>
                            <div className="desc"><p>Tillverkare</p></div>
                        </div>
                    </div>

                    <div className="clearfix"></div>

                </div>
            </main>
        );
    }
}
export default Categories;