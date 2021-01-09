import Overview from './Categories/Overview/Overview';
import Map from './Categories/Map/Map';
import Transport from './Categories/Transport/Transport';
import Inventory from './Categories/Inventory/Inventory';
import Users from './Categories/Users/Users';
import Exit from './Categories/Exit/Exit';

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