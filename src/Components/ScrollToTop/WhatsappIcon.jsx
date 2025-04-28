import React from 'react';
import { SiWhatsapp } from "react-icons/si";
import './whatsapp.css'
const WhatsappIcon = () => {
    return (<>
        <div className='whatsappIcon_fix'>
            <a
                href="https://wa.me/919687553179text=Hello%20RIYANSH%20EXIM%20LLP%2C%20I%20have%20a%20question."
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
            >           <SiWhatsapp className='iconwhatss' />
            </a>
        </div>
        {/* "https://wa.me/919687553179" */}

    </>

    );
};

export default WhatsappIcon;