import { useEffect, useState } from "react";
import { CheckboxGroup } from "@components/CheckboxGroup";

const jsonObjects = import.meta.glob("@public/data/**/*.json", { eager: true });
const checkLists = Object.values(jsonObjects).map((json) => {
  const data = json as { default: CheckList };
  return data.default;
});

const CHECKLIST_KEY = "selectedCheckList";

export const IndexElement = () => {
  const [selected, setSelected] = useState<{ [checkListId: string]: boolean }>(
    {}
  );

  const handleCheckboxChange = (checked: boolean, item: CheckListItem) => {
    const newValue = !checked;
    const newSelected = {
      ...selected,
      [item.id]: newValue,
    };

    setSelected(newSelected);
    localStorage.setItem(CHECKLIST_KEY, JSON.stringify(newSelected));
    console.log("selected", newSelected);
  };

  useEffect(() => {
    const storedSelected = localStorage.getItem(CHECKLIST_KEY);
    if (storedSelected) {
      const parsedSelected = JSON.parse(storedSelected);
      setSelected(parsedSelected);
    }
    console.log("selected", selected);
  }, []);

  return (
    <div>
      {checkLists.map((list) => (
        <CheckboxGroup
          key={list.title.en}
          list={list}
          selected={selected}
          onChange={handleCheckboxChange}
        />
      ))}
    </div>
  );
};

