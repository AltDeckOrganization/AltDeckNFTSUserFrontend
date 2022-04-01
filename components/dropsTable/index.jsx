/* eslint-disable @next/next/no-img-element */
import {
  TableCell,
  TableHead,
  TableRow,
  Table,
  TableBody,
} from "@mui/material";
import Link from "next/link";
import { useDarkMode } from "../../context/darkMode";

const DropsTable = ({ rows, scroll }) => {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`w-full mt-5 ${
        scroll && "overflow-x-scroll md:overflow-hidden"
      }`}
    >
      <Table className="min-w-[750px]" size="small">
        <CustomTableHead />
        <TableBody
          className="bg-white"
          sx={{
            "& .MuiTableCell-root": {
              border: "none",
            },
            "& .MuiTableRow-root:hover": {
              backgroundColor: "rgba(79, 201, 195, 0.20)",
            },
          }}
        >
          {rows.map((row, index) => (
            <TableRow
              hover
              key={index}
              tabIndex={-1}
              className={`border-b-0 border-l-4 hover:border-l-orange 
                border-transparent ${
                  index % 2 === 0
                    ? darkMode
                      ? "bg-[#1e8b84] hover:bg-[#6db9b5]"
                      : "bg-[#50C9C314]/10 hover:bg-[#50C9C314]/20"
                    : darkMode
                    ? "bg-black hover:bg-[#6db9b5]"
                    : "bg-white"
                } 
                 cursor-pointer`}
            >
              <TableCell>
                <div className={`flex flex-row items-center`}>
                  <img
                    src={row.image}
                    alt=""
                    className={`w-[40px] h-[40px] rounded-sm mr-2`}
                  />
                  <p
                    className={`py-3 text-[16px] font-medium ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {row.name}
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <p
                  className={`text-[16px] ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  {row.date}
                </p>
              </TableCell>
              <TableCell>
                <div
                  className={`flex text-[16px] ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  {row.icons.map((item, i) => (
                    <a key={i} href={item.link} className="pr-2 md:pr-4">
                      <i
                        className={`${item.iconClass} ${
                          !darkMode ? "text-black" : "text-white"
                        }
                        `}
                      ></i>
                    </a>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <p
                  className={`text-[16px] ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  {row.price}
                </p>
              </TableCell>
              <TableCell>
                <p
                  className={`text-[16px] ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  {row.supply}
                </p>
              </TableCell>
              <TableCell className="w-2/6">
                <p
                  className={`text-[16px] ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur, corrupti! Itaque laudantium architecto
                </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const headCells = [
  { id: "collection", label: "Collection" },
  { id: "date", label: "Launch Date" },
  { id: "links", label: "Links" },
  { id: "price", label: "Mint Price" },
  { id: "supply", label: "Total Supply" },
  { id: "desc", label: "Description" },
];

const CustomTableHead = () => {
  const { darkMode } = useDarkMode();
  return (
    <TableHead className={`bg-transparent ${darkMode && "text-white"}`}>
      <TableRow
        sx={{
          "& .MuiTableCell-root": {
            border: "none",
          },
        }}
      >
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            className="capitalize text-[12px]"
            align={headCell.numeric ? "right" : "left"}
          >
            <p
              className={`font-semibold text-[15px] uppercase pb-2 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {headCell.label}
            </p>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default DropsTable;
