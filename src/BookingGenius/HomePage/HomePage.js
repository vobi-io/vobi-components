import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import InputSearch from './InputSearch'
import Description from './Description';
import Talents from './Talents'
import WorkingInstructions from './WorkingInstructions'
import Reviews from './Reviews'
import Footer from './Footer'


const Container = styled.div`
    width: 1400px;
    height: 3100px;
    background-color: #ffffff;
`
const BackGround = styled.div`
    width: 100%;
    height: 629px;
    background: url(https://www.hellomagazine.com/imagenes/celebrities/2017101143124/angelina-jolie-womens-rights-harpers-bazaar/0-220-355/angelina-jolie-womens-rights-t.jpg);
    background-repeat: no-repeat;
    background-size: cover;
`


const HomePage = () => (
    <Container>
        <Header />
        <BackGround />
        <InputSearch />
        <Description />
        <Talents title={"Hot Talents"} talents={HotTalents}/>
        <Talents title={"New Talents"} talents={NewTalents}/>
        <WorkingInstructions workingInstructionsContent = { workingInstructionsContent }/>
        <Reviews reviews = {reviews}/>
        <Footer />
    </Container>
)

const reviews = [
    {
        value: 5,
        date: "10 Feb 2018",
        service: "Great service!",
        description: "I’ve been using BookingGenius for at least 2 years. It makes you feel like a tax professional per it helps you to file your taxes correctly while getting the largest tax refund you can legally get.",
        avatar: "https://www.hellomagazine.com/imagenes/celebrities/2017101143124/angelina-jolie-womens-rights-harpers-bazaar/0-220-355/angelina-jolie-womens-rights-t.jpg",
        name: "James Kan",
        profession: "Web developer",
    },
    {
        value: 5,
        date: "10 Feb 2018",
        service: "Great service!",
        description: "I’ve been using BookingGenius for at least 2 years. It makes you feel like a tax professional per it helps you to file your taxes correctly while getting the largest tax refund you can legally get.",
        avatar: "https://www.hellomagazine.com/imagenes/celebrities/2017101143124/angelina-jolie-womens-rights-harpers-bazaar/0-220-355/angelina-jolie-womens-rights-t.jpg",
        name: "Kate Nue",
        profession: "PR consultant",
    }
]

const workingInstructionsContent = {
    instructionsContentBrowse: {
        title: "I. Browse and compare.",
        description: "Compare rates and availability of local entertainers and vendors.",
    },
    instructionsContentSecurity: {
        title: "II. Book securety.",
        description: "Booking through GigSalad ensures payment protection, amazing service, and no-hassle refunds with our Worry-Free Guarantee.",
    },
    instructionsContentEvent: {
        title: "III. Enjoy your event.",
        description: "Sit back, relax, and watch your party come to life.",
    }
}

const NewTalents = [
    {
        avatar: "https://www.hellomagazine.com/imagenes/celebrities/2017101143124/angelina-jolie-womens-rights-harpers-bazaar/0-220-355/angelina-jolie-womens-rights-t.jpg",        
        profession: "SINGER",
        name: "Elisabeth Vekkel",
        reviews: 93,
    },
    {
        avatar: "https://www.hellomagazine.com/imagenes/celebrities/2017101143124/angelina-jolie-womens-rights-harpers-bazaar/0-220-355/angelina-jolie-womens-rights-t.jpg",        
        profession: "MAGICIAN",
        name: "Henry Celigber",
        reviews: 98,
    },
    {
        avatar: "https://www.hellomagazine.com/imagenes/celebrities/2017101143124/angelina-jolie-womens-rights-harpers-bazaar/0-220-355/angelina-jolie-womens-rights-t.jpg",        
        profession: "DJ",
        name: "Pola Makkensy",
        reviews: 134,
    },
]

const HotTalents = [
    {
        avatar: "https://www.hellomagazine.com/imagenes/celebrities/2017101143124/angelina-jolie-womens-rights-harpers-bazaar/0-220-355/angelina-jolie-womens-rights-t.jpg",
        profession: "DANCER",
        name: "David Lakovsky",
        reviews: 93,
    },
    {
        avatar: "https://www.hellomagazine.com/imagenes/celebrities/2017101143124/angelina-jolie-womens-rights-harpers-bazaar/0-220-355/angelina-jolie-womens-rights-t.jpg",
        profession: "SINGER",
        name: "Hue Montorello",
        reviews: 98,
    },
    {
        avatar: "https://www.hellomagazine.com/imagenes/celebrities/2017101143124/angelina-jolie-womens-rights-harpers-bazaar/0-220-355/angelina-jolie-womens-rights-t.jpg",        
        profession: "DJ",
        name: "Lui Nesh",
        reviews: 134,
    },
]

export default HomePage