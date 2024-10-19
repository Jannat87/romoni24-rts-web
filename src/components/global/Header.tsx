import React from 'react';

interface siteInfo {
    title: number;
    name: string;
    description: string;
    url: string;
    image: string;
}
const Header = () => {
    const a = 100;
   const siteInfo = {
        "title": 12,
        "name": "Romoni24",
        "description": "Romoni24",
        "url": "https://romoni24.com",
        "image": "https://romoni24.com/images/logo.png"
    }
    return (
        <>
            <div className="container">
                <h1>{siteInfo.name}</h1>
                {a}
                {siteInfo.title}
            </div>
        </>
    );
};

export default Header;