import { useState } from "react";
import CategoriesPanel from "./CategoriesPanel";
import Category from './Category';

const Display = () =>{

    const [category, setCategory] = useState("Overview");

    return (
        <div className="display" >
            <CategoriesPanel setCategory={setCategory} />
            <Category category={category} />
        </div>
    );
};

export default Display;