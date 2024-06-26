import { useDraggable } from '@dnd-kit/core'

export default function Itembox(props: any) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;


  return (
    <button ref={setNodeRef} style={style} className="p-3 bg-primary " {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}
