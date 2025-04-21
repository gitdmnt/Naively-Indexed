import { useEffect, useState } from "react";
import { Checkbox } from "@components/Checkbox";

const jsonObjects = import.meta.glob("@public/data/**/*.json", { eager: true });
const checkLists: CheckList[] = Object.values(jsonObjects).map((json) => {
  const data = json as { default: CheckList };
  return data.default;
});

type CheckList = CheckListItem[];

interface CheckListItem {
  id: string;
  label_en: string;
  label_ja: string;
}

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
      {checkLists.map((list: CheckList) =>
        list.map((item) => (
          <Checkbox
            key={item.id}
            id={item.id}
            label={item.label_ja}
            checked={selected[item.id] ?? false}
            onChange={(checked) => handleCheckboxChange(checked, item)}
          />
        ))
      )}
    </div>
  );
};

