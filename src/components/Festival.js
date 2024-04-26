import React from 'react';
import './Festival.css'; // Import CSS file for styling

const Festival = () => {
    return (
        <div className="festival-container">
            <div className="flash-card">
                <h2>PAN INDIAN FESTIVALS</h2>
                <p>Celebrations that are observed across India, transcending regional boundaries and encompassing diverse cultural and religious traditions.</p>
                <p>Types: Diwali, Holi, Navratri, Durga Puja, Eid, Christmas, and more.</p>
            </div>
            <div className="flash-card">
                <h2>FOLK FESTIVALS</h2>
                <p>Festivities rooted in the cultural heritage of specific communities or regions, often featuring traditional music, dance, and rituals passed down through generations.</p>
                <p>Types: Bihu, Onam, Baisakhi, Pongal, Lohri, and more.</p>
            </div>
            <div className="flash-card">
                <h2>TRIBAL FESTIVALS</h2>
                <p>Celebrations unique to indigenous tribal communities, showcasing their customs, rituals, and spiritual practices, often linked to nature and agriculture.</p>
                <p>Types: Hornbill Festival, Bastar Dussehra, Garia Puja, and more.</p>
            </div>
            <div className="flash-card">
                <h2>FAIRS & PILGRIMAGES</h2>
                <p>Events that combine religious significance with commerce, attracting pilgrims and visitors to sacred sites and marketplaces, fostering spiritual devotion and cultural exchange.</p>
                <p>Types: Kumbh Mela, Pushkar Fair, Sonepur Cattle Fair, and more.</p>
            </div>
        </div>
    );
}

export default Festival;