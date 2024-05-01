import { DndContext } from '@dnd-kit/core'
import { useState } from 'react'
import Itembox from './itembox'
import ItemTable from './itemtable'

export default function TaskArea() {
  const containers = ['A', 'B', 'C', 'D'];
  const [parent, setParent] = useState(null);
  const draggableMarkup = (
    <Itembox id="draggable">task 1</Itembox>
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {parent === null ? draggableMarkup : null}

      {containers.map((id) => (
        <ItemTable key={id} id={id}>
          {parent === id ? draggableMarkup : 'タスク置き場'}
        </ItemTable>
      ))}
    </DndContext>
  );

  function handleDragEnd(event:any) {
    const {over} = event;

    setParent(over ? over.id : null);
  }
}
