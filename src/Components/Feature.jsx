import React from 'react';
import Featurebox from './Featurebox';
import fimage1 from "../images/image.webp";
import fimage2 from "../images/image__1_.webp";
import fimage3 from "../images/image__2_.webp";
import fimage4 from "../images/image__3_.webp";
import fimage5 from "../images/image__4_.webp";

function Feature() {
    return (
        <div id='features'>
            <h1>Weapons</h1>
            <div className='a-container'>
                <Featurebox image={fimage1} title="Calibrum" exp="The Rifle" />
                <Featurebox image={fimage2} title="Severum" exp="The Scythe Pistol" />
                <Featurebox image={fimage3} title="Gravitum" exp="The Cannon" />
                <Featurebox image={fimage4} title="Infernum" exp="The Flamethrower" />
                <Featurebox image={fimage5} title="Crescendum" exp="The Chakram" />


            </div>
        </div>
    )
}

export default Feature