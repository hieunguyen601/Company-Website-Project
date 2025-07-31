import databiz from '../assets/images/client-databiz.svg';
import audiophile from '../assets/images/client-audiophile.svg';
import meet from '../assets/images/client-meet.svg';
import maker from '../assets/images/client-maker.svg';
import './LeftCard.css';
function LeftCard() {
    return (
        <>
            <div class="left-card">
                <div class="title-section">
                <h1 class="title">Make</h1>
                <h1 class="title">remote work</h1>
                </div>
                <p class="description">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <button type="button" class="btn btn-dark  learn-more-button">Learn more</button>
                <div class="companies">
                <img src={databiz} alt="databiz"/>
                <img src={audiophile} alt="audiophile"/>
                <img src={meet} alt="meet"/>
                <img src={maker} alt="maker"/>
                </div>
            </div>
        </>
    );
}

export default LeftCard;