import Overview from "../images/overview.svg";
import Map from "../images/map.svg";
import Transport from "../images/truck.png";
import Inventory from "../images/box.png";
import Users from "../images/profile.jpg";
import Exit from "../images/exit.webp";

const CategoriesPanel = ({ setCategory }) => {
  const categories = [
    { value: "Overview", image: Overview },
    { value: "Map", image: Map },
    { value: "Transport", image: Transport },
    { value: "Inventory", image: Inventory },
    { value: "Users", image: Users },
    { value: "Exit", image: Exit },
  ];

  return (
    <div className="panel">
      {categories.map((category) => (
        <div key={category.value} onClick={() => setCategory(category.value)}>
          <img
            src={category.image}
            alt={category.value}
            className={category.value + "-img"}
          />
        </div>
      ))}
    </div>
  );
};

export default CategoriesPanel;
