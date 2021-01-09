import FourSquaresIcon from './fourSquare.png';
import VLines from './verticalLines.webp';

const Icons = () =>{
    return (
        <>            
            <div className="view-type"><img src={FourSquaresIcon} alt="Four Squares Icon" /></div>
            <div className="view-type"><img src={VLines} alt="Vertical lines icon" /></div>
        </>
    );
};

export default Icons;