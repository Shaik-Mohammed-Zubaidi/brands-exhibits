import ClockT from './clock-svg.svg';
import LocateMe from './location-svg.svg';
import Circle from './circle.svg';

const Stocks = () =>{
    return (
        <div className="stocks" >
            <div className="stock">
                <div><img src={Circle} alt="brand"/><h4>Stock1</h4> </div>
                <div><img src={LocateMe} alt="locate" /><p>Xyz</p> </div>
                <div><img src={ClockT} alt="clock"/><p>time</p> </div>
                <div>Percentage - 82% </div>
                <div>Stock: 22645</div>
            </div>
            <div className="stock">
                <div><img src={Circle} alt="brand"/><h4>Stock2</h4> </div>
                <div><img src={LocateMe} alt="locate" /><p>Xyz</p> </div>
                <div><img src={ClockT} alt="clock"/><p>time</p> </div>
                <div>Percentage - 82% </div>
                <div>Stock: 22645</div>
            </div>
            <div className="stock">
                <div><img src={Circle} alt="brand"/><h4>Stock3</h4> </div>
                <div><img src={LocateMe} alt="locate" /><p>Xyz</p> </div>
                <div><img src={ClockT} alt="clock"/><p>time</p> </div>
                <div>Percentage - 82% </div>
                <div>Stock: 22645</div>
            </div>
            <div className="stock">
                <div><img src={Circle} alt="brand"/><h4>Stock4</h4> </div>
                <div><img src={LocateMe} alt="locate" /><p>Xyz</p> </div>
                <div><img src={ClockT} alt="clock"/><p>time</p> </div>
                <div>Percentage - 82% </div>
                <div>Stock: 22645</div>
            </div>
        </div>
    );
};

export default Stocks;