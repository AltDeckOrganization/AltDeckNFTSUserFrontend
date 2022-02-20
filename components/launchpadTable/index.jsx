/* eslint-disable @next/next/no-img-element */
import {
  TableCell,
  TableHead,
  TableRow,
  Table,
  TableBody
} from "@mui/material";

const LaunchpadTable = ({rows}) => {
  return (
<div
      className="w-full mt-5"
    >
      <Table
        className="min-w-[750px]" size="small"
      >
        <CustomTableHead />
        <TableBody className="bg-white"
          sx={{
            "& .MuiTableCell-root": {
              border: "none",
            },
            "& .MuiTableRow-root:hover": {
              backgroundColor: "rgba(79, 201, 195, 0.20)"
            },
          }}
        >
          {rows.map((row, index) => (
            <TableRow
              hover
              tabIndex={-1}
              key={index}
              className={`border-b-0 border-l-4 hover:border-l-orange 
                border-transparent ${index % 2 === 0 ? "bg-[#50C9C314]/10" : "bg-white"} 
                hover:bg-[#50C9C314]/20 cursor-pointer`
              }
            >
              <TableCell>
                <div className={`flex flex-row items-center`}>
                  <img 
                    src={row.image}
                    alt=""
                    className={`w-[40px] h-[40px] rounded-sm mr-2`}
                  />
                  <p className="py-3 text-[16px] font-medium text-gray2">{row.name}</p>
                </div>
              </TableCell>
              <TableCell>
                <p className="text-black text-[16px]">{row.price} SOL</p>
              </TableCell>
              <TableCell>
                <p className="text-black text-[16px]">{row.tokens}</p>
              </TableCell>
              <TableCell>
                <p className="text-black text-[16px]">{row.date}</p>
              </TableCell>
              <TableCell>
                <p className="text-black text-[16px]">{row.filled}%</p>
              </TableCell>
              <TableCell>
                <p className="text-black text-[16px]">{row.status}</p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

const headCells = [
  { id: "collection", label: "Collection" },
  { id: "price", label: "Token Price" },
  { id: "tokens", label: "Tokens" },
  { id: "date", label: "Launch Date" },
  { id: "filled", label: "Filled" },
  { id: "status", label: "Status" }
];

const CustomTableHead = () => {
  return(
    <TableHead className="bg-transparent">
      <TableRow
        sx={{
          "& .MuiTableCell-root": {
            border: "none"
          }
        }}
      >
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            className="capitalize text-[12px]"
            align={headCell.numeric ? "right" : "left"}
          >
            <p className="font-medium text-[#50C9C3] text-[15px] uppercase pb-2">{headCell.label}</p>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default LaunchpadTable;
