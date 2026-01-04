import TimeIcon from '../assets/timeicon.png'
import PeopleIcon from '../assets/peopleicon.png'

import './styles/CampaignCard.css'

import {useState, useEffect} from 'react';


const CampaignCard = ({ campaign }) =>{

    const progressPercent = ((campaign.people.current / campaign.people.capacity) * 100)

    const [timeRemaining, setTimeRemaining] = useState(campaign.timeLeft);
    useEffect(() => {
        const cardTimer = setInterval(() => {
            setTimeRemaining(prev => prev - 1);
        }, 1000)

        return () => clearInterval(cardTimer);
    }, []);

    const formatTime = (seconds) => {
        if (seconds <=0) return "Expired";

        const days = Math.floor(seconds / 86400); 
        const hours = Math.floor((seconds % 86400) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        if (days > 0) return `${days}days ${hours}:${minutes}:${remainingSeconds}`
        return `${hours}:${minutes}:${remainingSeconds}`
    }

    return (
        <>
            <article className="card" data-id={campaign.id}>
                    <div className="card_img_container">
                        <div className="card_category">
                            {campaign.category}
                        </div>
                        <div className="card_time">
                            <div className="time_img">
                                <img src={TimeIcon}></img>
                            </div>
                            <span><time className={`remaining-time--${campaign.id}`} aria-live="polite">{formatTime(timeRemaining)}</time> left</span>
                        </div>
                        <img src={campaign.image} alt={`${campaign.title} image`}/>
                    </div>
                    <div className="card_metaProgressContainer">
                        <div className="card_meta">
                            <h3>{campaign.title}</h3>
                            <span>{campaign.price} PLN per person for a group of {campaign.people.capacity}</span>
                        </div>
                        <div className="card_people_meter">
                            <img src={PeopleIcon} alt="People Icon"/>
                            <span>{`${campaign.people.current}/${campaign.people.capacity}`} people joined</span>
                        </div>
                        <div className="card_progressBar">
                            <div className="progress" style={{width: `${progressPercent}%`}}></div>
                        </div>
                        <div className="currentCapacityContainer">
                            <p>{campaign.people.current} joined</p>
                            <p>Goal: {campaign.people.capacity}</p>
                        </div>
                    </div>
                    <div className='price_button_container'>
                        <div className="card_price">
                            <p>Current price</p>
                            <span>{campaign.price} PLN</span>
                        </div>
                        <div className="card_Button">
                            <button className="join_button">Join Campaign</button>
                        </div>
                    </div>
            </article>
        </>
    )
}

export default CampaignCard;