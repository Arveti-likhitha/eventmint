import React, { useEffect, useState } from 'react'
import Header from './Header'
import Chatbot from '../chatbot'
import Heading from './heading'
import Loader from './Loader'
import Footer from './Footer'
import SportsImageSlider from './SportsImageSlider'
import SportsList from "./SportsList";


const SportsActivitiesPage = () => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
        setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader loading={loading} />;
    }
    return (
    <div>
        <Header onSearch={setSearchTerm} />
        <Chatbot />
        <Heading />
        <SportsImageSlider />
        <SportsList searchTerm={searchTerm}/>
        <Footer />
    </div>
  )
}

export default SportsActivitiesPage