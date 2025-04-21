import { Checkbox } from "@components/Checkbox";

interface CheckboxGroupProps {
  list: CheckList;
  selected: { [checkListId: string]: boolean };
  onChange: (checked: boolean, item: CheckListItem) => void;
}

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  console.log("CheckboxGroup", props.list);
  return (
    <div>
      <p>{props.list.title.ja}</p>
      {props.list.items.map((item) => (
        <Checkbox
          key={item.id}
          id={item.id}
          label={item.label.ja}
          checked={props.selected[item.id] ?? false}
          onChange={(checked) => props.onChange(checked, item)}
        />
      ))}
    </div>
  );
};

