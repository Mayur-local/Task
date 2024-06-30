import { useEffect, useState } from "react";
const Task2 = () => {
  const [parentChecked, setParentChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [childCount, setchildCount] = useState(0);
  const options = ["Child 1", "Child 2", "Child 3"];
  const label = "Parent Checkbox";

  const handleParentCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setParentChecked(isChecked);
    if (isChecked) {
      let newCheckedItems = new Set(options.map((option, index) => index));
      setCheckedItems(newCheckedItems);
    } else {
      setCheckedItems(new Set());
    }
  };

  const handleChildCheckboxChange = (index) => (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setCheckedItems(new Set(checkedItems).add(index));
      setchildCount((childCount) => childCount++);
    } else {
      const newCheckedItems = new Set(checkedItems);
      newCheckedItems.delete(index);
      setCheckedItems(newCheckedItems);
      setchildCount((childCount) => childCount--);
    }
    setParentChecked(checkedItems.size === options.length - 1);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={parentChecked}
          onChange={handleParentCheckboxChange}
        />
        {label}
        {` the Count ${childCount}`}
      </label>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={checkedItems.has(index)}
                onChange={handleChildCheckboxChange(index)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Task2;
