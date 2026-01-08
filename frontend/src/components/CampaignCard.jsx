import TimeIcon from '../assets/timeicon.png'
import PeopleIcon from '../assets/peopleicon.png'

import './styles/CampaignCard.css'

import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


const CampaignCard = ({ campaign }) => {

    const progressPercent = ((campaign.people.current / campaign.people.capacity) * 100)

    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const deadlineTime = new Date(campaign.deadline).getTime();
        return Math.max(0, Math.floor((deadlineTime - now) / 1000));
    };

    const [timeRemaining, setTimeRemaining] = useState(calculateTimeLeft());

    useEffect(() => {
        const cardTimer = setInterval(() => {
            setTimeRemaining(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(cardTimer);
    }, [campaign.deadline]);

    const formatTime = (seconds) => {
        if (seconds <= 0) return "Expired";

        const days = Math.floor(seconds / 86400); 
        const hours = Math.floor((seconds % 86400) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        const pad = (num) => String(num).padStart(2, '0');

        if (days > 0) return `${days}d ${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`
        return `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`
    }

    return (
        <>
            <Link to={`/campaign/${campaign.id}`}>
                <article className="card" data-id={campaign. id}>
                    <div className="card_img_container">
                        <div
                            className="card_category"
                            style={{ backgroundColor: campaign.category.color }}
                        >
                            {campaign.category.icon} {campaign.category. name}
                        </div>
                        <div className="card_time">
                            <div className="time_img">
                                <img src={TimeIcon} alt="Time icon" />
                            </div>
                            <span>
                                <time className={`remaining-time--${campaign.id}`} aria-live="polite">
                                    {formatTime(timeRemaining)}
                                </time> left
                            </span>
                        </div>
                        <img src={campaign.image} alt={`${campaign.title} image`} />
                    </div>
                    <div className="card_metaProgressContainer">
                        <div className="card_meta">
                            <h3>{campaign.title}</h3>
                            <span>{campaign.pricing.currentPrice} PLN per person for a group of {campaign.people.capacity}</span>
                        </div>
                        <div className="card_people_meter">
                            <img src={PeopleIcon} alt="People Icon" />
                            <span>{`${campaign.people.current}/${campaign.people.capacity}`} people joined</span>
                        </div>
                        <div className="card_progressBar">
                            <div className="progress" style={{width: `${progressPercent}%`}}></div>
                        </div>
                        <div className="currentCapacityContainer">
                            <p>{campaign.people.current} joined</p>
                            <p>Goal: {campaign.people. capacity}</p>
                        </div>
                    </div>
                    <div className="card_price_tiers">
                        <h4>Pricing</h4>
                        <ul>
                            {campaign.pricing.tiers.map((tier, index) => {
                                const isActive =
                                    campaign.people.current >= tier.min &&
                                    (tier.max === null || campaign.people.current <= tier.max);
                
                                return (
                                    <li key={index} className={isActive ? 'active' : ''}>
                                        <span className="tier-range">
                                            {tier.min} - {tier.max || '+'} people
                                        </span>
                                        <div className='tier-price-container'>
                                            <span className="tier-price">
                                                {tier.pricePerPerson} PLN
                                            </span>
                                            {isActive && <span className="tier-badge">✓</span>}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className='price_button_container'>
                        <div className="card_price">
                            <p>Current price</p>
                            <span>{campaign.pricing.currentPrice} PLN</span>
                        </div>
                        <div className="card_Button">
                            <button className="join_button">Join Campaign</button>
                        </div>
                    </div>
                </article>
            </Link>
        </>
    )
}

export default CampaignCard;