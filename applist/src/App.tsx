import { useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";

function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "test example", done: false },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];

    newList.push({ id: list.length + 1, name: taskName, done: false });

    setList(newList);
  };

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];

    for (let i in newList) {
      if (newList[i].id === id) newList[i].done = done;
    }

    setList(newList);
  };

  const DeleteTask = (id: number) => {
    let newList = [...list];

    for (let i in newList) {
      if (newList[i].id === id) {
        let index = newList.indexOf(newList[i]);

        if (index > -1) newList.splice(index, 1);
      }
    }

    setList(newList);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            onChange={handleTaskChange}
            onDelete={DeleteTask}
          />
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;
