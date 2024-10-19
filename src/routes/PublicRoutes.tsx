import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import HomePage from '../pages/Public/HomePage/HomePage';
import CategoryPage from '../pages/Public/CategoryPage/CategoryPage';
import RupcorcaPage from '../pages/Public/RupcorcaPage';
import SisurJotnoPage from '../pages/Public/SisurJotnoPage';
import RannaORannaGhorPage from '../pages/Public/RannaORannaGhorPage';
import SasthoOSurokkhaPage from '../pages/Public/SasthoOSurokkhaPage';
import GhorerJotnoPage from '../pages/Public/GhorerJotnoPage';
import UddogtaCornerPage from '../pages/Public/UddogtaCornerPage';
import ContactPage from '../pages/Public/ContactPage';
import AboutPage from '../pages/Public/AboutPage';

const PublicRoutes = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/category" element={<CategoryPage />} />
                    <Route path="/rupcorca" element={<RupcorcaPage />} />
                    <Route path="/sisur-jotno" element={<SisurJotnoPage />} />
                    <Route path="/ranna-o-ranna-ghor" element={<RannaORannaGhorPage />} />
                    <Route path="/sastho-o-surokkha" element={<SasthoOSurokkhaPage />} />
                    <Route path="/ghorer-jotno" element={<GhorerJotnoPage />} />
                    <Route path="/uddogta-corner" element={<UddogtaCornerPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Router>
        </>
    );
};

export default PublicRoutes;