import { useDraggable } from "@dnd-kit/core";
import { nanoid } from "nanoid";
import { useRef } from "react";
import { Typography, Divider } from "@mui/material";

import { fields } from "./fields";

export function SidebarField(props) {
  const { field, overlay } = props;
  const { title } = field;

  let className = "sidebar-field";
  if (overlay) {
    className += " overlay";
  }

  return <div className={className}>{title}</div>;
}

function DraggableSidebarField(props) {
  const { field, ...rest } = props;

  const id = useRef(nanoid());

  const { attributes, listeners, setNodeRef } = useDraggable({
    id: id.current,
    data: {
      field,
      fromSidebar: true
    }
  });

  return (
    <div
      ref={setNodeRef}
      className="sidebar-field"
      {...listeners}
      {...attributes}
    >
      <SidebarField field={field} {...rest} />
    </div>
  );
}

export default function Sidebar(props) {
  const { fieldsRegKey } = props;

  return (
    <div key={fieldsRegKey} className="sidebar">
      {/* <Typography textAlign="center" variant="h6" marginBottom="64px">
        {" "}
        Elements Gallery{" "}
      </Typography> */}

      {fields.map((f) => (
        <DraggableSidebarField key={f.type} field={f} />
      ))}
    </div>
  );
}
