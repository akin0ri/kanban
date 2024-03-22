import { useDroppable } from '@dnd-kit/core'

export default function ItemTable(props: { children: React.ReactNode }) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable'
  })
  const style = {
    color: isOver ? 'green' : undefined
  }

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  )
}
