import { useDroppable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import { renderers } from "./fields";

function getRenderer(type) {
  if (type === "spacer") {
    return () => {
      return <div className="spacer">spacer</div>;
    };
  }

  return renderers[type] || (() => <div>No renderer found for {type}</div>);
}

export function Field(props) {
  const { field, overlay, ...rest } = props;
  const { type } = field;

  const Component = getRenderer(type);

  let className = "canvas-field";
  if (overlay) {
    className += " overlay";
  }

  return (
    <div
      className={className}
      contentEditable
      onClick={() => console.log("div Click")}
    >
      <Component onClick={() => console.log("Component Click")} {...rest} />
    </div>
  );
}

function SortableField(props) {
  const { id, index, field } = props;

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({
    id,
    data: {
      index,
      id,
      field
    }
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <div
      class={
        // field.type.includes("title") ||
        field.type.includes("chart") || field.type.includes("table")
          ? "wide"
          : null
      }
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <Field field={field} />
    </div>
  );
}

export default function Canvas(props) {
  const columns = 6;
  const { fields } = props;

  const { listeners, setNodeRef, transform, transition } = useDroppable({
    id: fields.id,
    data: {
      parent: null,
      isContainer: true
    }
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <div ref={setNodeRef} className="canvas" style={style} {...listeners}>
      <div
        className="canvas-fields"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridGap: 10,
          padding: 10
        }}
      >
        {fields?.map((f, i) => (
          <SortableField key={f.id} id={f.id} field={f} index={i} />
        ))}
      </div>
    </div>
  );
}
