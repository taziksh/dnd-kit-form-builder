import { ReactComponent as BarChartSvg } from "./BarChart.svg";
import { ReactComponent as TableSvg } from "./Table.svg";
import { Typography, Card, Stack } from "@mui/material";

// These will be available from the sidebar
export const fields = [
  // {
  //   type: "input",
  //   title: "Text Input"
  // },
  // {
  //   type: "select",
  //   title: "Select"
  // },
  {
    type: "title",
    title: "Title"
  },
  {
    type: "text",
    title: "Paragraph"
  },
  // {
  //   type: "button",
  //   title: "Button"
  // },
  // {
  //   type: "textarea",
  //   title: "Text Area"
  // },
  {
    type: "chart",
    title: "Chart"
  },
  {
    type: "table",
    title: "Table"
  }
];

// These define how we render the field
export const renderers = {
  input: () => (
    <input
      class="wide"
      type="text"
      placeholder="This is a text input"
      contentEditable={true}
    />
  ),
  textarea: () => <textarea rows="5" contentEditable />,
  select: () => (
    <select>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
  ),
  title: () => (
    <Card>
      {" "}
      <Typography
        variant="h1"
        class="dotted"
        sx={{ color: "black", textAlign: "center" }}
      >
        Report Title
      </Typography>
    </Card>
  ),
  text: () => (
    <Card>
      <Typography class="dotted" sx={{ color: "black", textAlign: "center" }}>
        Paragraph Title
      </Typography>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </Card>
  ),
  button: () => <button>Button</button>,
  chart: () => (
    <Card
      sx={{
        justifyContent: "center"
        // alignItems: "center",
      }}
    >
      <Typography class="dotted" sx={{ color: "black", textAlign: "center" }}>
        Chart Title
      </Typography>
      <Stack>
        <BarChartSvg />
      </Stack>
    </Card>
  ),
  table: () => (
    <Card
      sx={{
        justifyContent: "center",
        background: "white"
      }}
    >
      <Typography class="dotted" sx={{ color: "black", textAlign: "center" }}>
        Table Title
      </Typography>
      <Stack>
        <TableSvg />
      </Stack>
    </Card>
  )
};
