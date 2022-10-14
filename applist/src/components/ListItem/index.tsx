import { Item } from "../../types/item";
import * as C from "./styles";

type Props = {
  item: Item;
  onChange: (id: number, done: boolean) => void;
  onDelete: (id: number) => void;
};

export function ListItem({ item, onChange, onDelete }: Props) {
  return (
    <C.Container done={item.done}>
      <div>
        <input
          className="checkbox"
          type="checkbox"
          checked={item.done}
          onChange={(e) => onChange(item.id, e.target.checked)}
        />
        <label>{item.name}</label>
      </div>
      <input
        className="delete"
        type="button"
        value="Excluir"
        onClick={() => onDelete(item.id)}
      />
    </C.Container>
  );
}
