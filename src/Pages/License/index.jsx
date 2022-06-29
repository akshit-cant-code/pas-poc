import Nav from "../../Layouts/Content/Nav";
import Content from "./../../Layouts/Content/index";
import EnhancedTable from "./../../Components/EnhancedTable";
import Graph from "./../../Pages/Graph/Graph"
import DateRange from "../Graph/DateRange";
import { useEffect, useState } from "react";

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Product Key",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "Feature",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "Limit",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "Expiration",
  },
];

// {
//   id: "description",
//   numeric: false,
//   disablePadding: false,
//   label: "Description",
// },
// {
//   id: "options",
//   numeric: true,
//   disablePadding: false,
//   label: "Options",
// },
const createData = (name, calories, fat, carbs, protein) => {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
};

const data = [
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Donut", 452, 25.0, 51, 4.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Honeycomb", 408, 3.2, 87, 6.5),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Jelly Bean", 375, 0.0, 94, 0.0),
  createData("KitKat", 518, 26.0, 65, 7.0),
];

const License = () => {
  const [licData, setLicData] = useState([]);

  useEffect(() => {
    setLicData(data);
  }, []);

  return (
    <Nav>
      <Content>
        {/* <EnhancedTable headCells={headCells} data={licData} /> */}
        <DateRange/>
      </Content>
    </Nav>
  );
};

export default License;
