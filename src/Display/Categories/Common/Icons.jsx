import FourSquaresIcon from './four-squares.svg';
import HLines from './three-horizontal-lines.svg';

const Icons = () =>{
    return (
        <>            
            <div className="view-type"><img src={FourSquaresIcon} alt="Four Squares Icon" /></div>
            <div className="view-type"><img src={HLines} alt="Horizontal lines icon" /></div>
        </>
    );
};

export default Icons;