import Bottle from './bottle.svg';

const Stocks = () =>{
    return (
        <div className="stocks" >
            <div className="stock">
                <img src={Bottle} alt="brand"/>
                <div>
                    <div>Name</div>
                    <div>Stock: 2650</div>
                </div>
            </div>
            <div className="stock">
                <img src={Bottle} alt="brand"/>
                <div>
                    <div>Name</div>
                    <div>Stock: 2650</div>
                </div>
            </div>
            <div className="stock">
                <img src={Bottle} alt="brand"/>
                <div>
                    <div>Name</div>
                    <div>Stock: 2650</div>
                </div>
            </div>
            <div className="stock">
                <img src={Bottle} alt="brand"/>
                <div>
                    <div>Name</div>
                    <div>Stock: 2650</div>
                </div>
            </div>
        </div>
    );
};

export default Stocks;