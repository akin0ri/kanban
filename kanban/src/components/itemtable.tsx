import { useDroppable } from '@dnd-kit/core'

export default function ItemTable(props: any) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };
  const className = isOver ? 'green' : '';


  return (
    <div ref={setNodeRef} className="p-4 border">
      {props.children}
    </div>
  );
}
