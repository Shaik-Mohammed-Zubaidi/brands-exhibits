import Profile  from './profile.jpg';

const Cards = () =>{
    return (
        <div className="user-cards" >
            <div><img src={Profile} alt="profile" /> Name<button className="view-inv" >VIEW INVENTORY</button></div>
            <div><img src={Profile} alt="profile" /> Name<button className="view-inv" >VIEW INVENTORY</button></div>
            <div><img src={Profile} alt="profile" /> Name<button className="view-inv" >VIEW INVENTORY</button></div>
            <div><img src={Profile} alt="profile" /> Name<button className="view-inv" >VIEW INVENTORY</button></div>
            <div><img src={Profile} alt="profile" /> Name<button className="view-inv" >VIEW INVENTORY</button></div>
            <div><img src={Profile} alt="profile" /> Name<button className="view-inv" >VIEW INVENTORY</button></div>
            <div><img src={Profile} alt="profile" /> Name<button className="view-inv" >VIEW INVENTORY</button></div>
            <div><img src={Profile} alt="profile" /> Name<button className="view-inv" >VIEW INVENTORY</button></div>
            <div><img src={Profile} alt="profile" /> Name<button className="view-inv" >VIEW INVENTORY</button></div>
            <div><img src={Profile} alt="profile" /> Name<button className="view-inv" >VIEW INVENTORY</button></div>
            <div><img src={Profile} alt="profile" /> Name<button className="view-inv" >VIEW INVENTORY</button></div>
            <div><img src={Profile} alt="profile" /> Name<button className="view-inv" >VIEW INVENTORY</button></div>
        </div>
    );
};

export default Cards;