import Overview from "../Images/overview.svg";
import Map from "../Images/map.svg";
import Transport from "../Images/truck.png";
import Inventory from "../Images/box.png";
import Users from "../Images/profile.jpg";
import Exit from "../Images/exit.webp";

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
