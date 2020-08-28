import React from 'react';
import './styles.css'
import bgImg from '../../assets/img/influencer.png'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhyMarketing from '../../components/home/WhyMarketing.jsx'

const Home = () => {
    return (
        <div className='main'>
            <influence>
                <Header/>
                <div className='text'>
                    <h1>Connecting Brands with Influencers</h1>
                    <p>Find the perfect content creators for your influencer
                        marketing campaigns</p>
                    <div className='btn-primary'>Get started</div>
                </div>
                <img src={bgImg}/>
            </influence>
            <WhyMarketing/>
            <Footer/>
        </div>
    );
}

export default Home;
