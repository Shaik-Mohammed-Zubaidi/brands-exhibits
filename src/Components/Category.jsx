import Overview from './Categories/Overview';
import Map from './Categories/Map';
import Transport from './Categories/Transport';
import Inventory from './Categories/Inventory';
import Users from './Categories/Users';
import Exit from './Categories/Exit';

const Category = ({category}) =>{
    return (
        <>
            <Overview visibility={category==="Overview"} />
            <Map visibility={category==="Map"} />
            <Transport visibility={category==="Transport"} />
            <Inventory visibility={category==="Inventory"} />
            <Users visibility={category==="Users"} />
            <Exit visibility={category==="Exit"} />
        </>
    );
};

export default Category;