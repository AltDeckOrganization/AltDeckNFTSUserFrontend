/* eslint-disable @next/next/no-img-element */
import { 
  TableCell,
  TableHead, 
  TableRow,
  Table,
  TableBody
} from "@mui/material";
import Image from "next/image";


const StatsTable = ({rows}) => {
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
                    className={`w-[30px] h-[30px] rounded-md mr-2`}
                  />
                  <p className="py-3 text-sm font-medium text-gray2">{row.name}</p>
                </div>
              </TableCell>
              <TableCell align="right">
                <p className="font-medium text-black">{row.floor} SOL</p>
              </TableCell>
              <TableCell align="right">
                <p className="font-medium text-black">{row.volume} SOL</p>
              </TableCell>
              <TableCell align="right">
                <p className="font-medium text-green-500">{row.volumePercent}%</p>
              </TableCell>
              <TableCell align="right">
                <p className="font-medium text-black">{row.avgPrice} SOL</p>
              </TableCell>
              <TableCell align="right">
                <p className="font-medium text-red-400">{row.avgPricePercent}%</p>
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
  { id: "floor", label: "AD Floor Price", numeric: true },
  { id: "volume", label: "Volume", numeric: true },
  { id: "volume percent" , label: "Volume %", numeric: true },
  { id: "avg price", label: "Avg Price", numeric: true },
  { id: "avg price %", label: "Avg Price %", numeric: true },
];


const CustomTableHead = () => {
  return (
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
            <p className="font-bold">{headCell.label}</p>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default StatsTable;
