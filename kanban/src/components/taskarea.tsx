import { DndContext } from '@dnd-kit/core'
import { useState } from 'react'
import Itembox from './itembox'
import ItemTable from './itemtable'

export default function TaskArea() {
  const [isDropped, setIsDropped] = useState(false)
  const draggableMarkup = <Itembox>Task001</Itembox>

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="p-5 border">{!isDropped ? draggableMarkup : null}</div>
      <ItemTable>{isDropped ? draggableMarkup : 'Drop here'}</ItemTable>
    </DndContext>
  )

  function handleDragEnd(event) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true)
    }
  }
}
