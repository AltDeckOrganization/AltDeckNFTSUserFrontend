/* eslint-disable @next/next/no-img-element */
import {
  TableCell,
  TableHead,
  TableRow,
  Table,
  TableBody,
} from "@mui/material";
import Image from "next/image";

const StatsTable = ({ rows }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow-md sm:rounded-lg">
            <table className="min-w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  {rows.map((row) => (
                    <th
                      scope="col"
                      key={row.name}
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      {row.name}
                    </th>
                  ))}
                </tr>

                <tr>
                  {rows.map((row) => (
                    <th
                      scope="col"
                      key={row.name}
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      {row.name}
                    </th>
                  ))}
                </tr>
              </thead>
            </table>
            <table className="min-w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Color
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Price
                  </th>
                  <th scope="col" className="relative py-3 px-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    Sliver
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    Laptop
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    $2999
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                    <a
                      href="#"
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>

                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple Imac 27
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    White
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    Desktop Pc
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    $1999
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                    <a
                      href="#"
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>

                <tr className="bg-white dark:bg-gray-800">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple Magic Mouse 2
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    White
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    Accessories
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    $99
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                    <a
                      href="#"
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    // <div
    //   className="w-full mt-5"
    // >
    //   <Table
    //     className="min-w-[750px]" size="small"
    //   >
    //     <CustomTableHead />
    //     <TableBody className="bg-white"
    //       sx={{
    //         "& .MuiTableCell-root": {
    //           border: "none",
    //         },
    //         "& .MuiTableRow-root:hover": {
    //           backgroundColor: "rgba(79, 201, 195, 0.20)"
    //         },
    //       }}
    //     >
    //       {rows.map((row, index) => (
    //         <TableRow
    //           hover
    //           tabIndex={-1}
    //           key={index}
    //           className={`border-b-0 border-l-4 hover:border-l-orange
    //             border-transparent ${index % 2 === 0 ? "bg-[#50C9C314]/10" : "bg-white"}
    //             hover:bg-[#50C9C314]/20 cursor-pointer`
    //           }
    //         >
    //           <TableCell>
    //             <div className={`flex flex-row items-center`}>
    //               <img
    //                 src={row.image}
    //                 alt=""
    //                 className={`w-[30px] h-[30px] rounded-md mr-2`}
    //               />
    //               <p className="py-3 text-sm font-medium text-gray2">{row.name}</p>
    //             </div>
    //           </TableCell>
    //           <TableCell align="right">
    //             <p className="font-medium text-black">{row.floor} ETH</p>
    //           </TableCell>
    //           <TableCell align="right">
    //             <p className="font-medium text-black">{row.volume} ETH</p>
    //           </TableCell>
    //           <TableCell align="right">
    //             <p className="font-medium text-green-500">{row.volumePercent}%</p>
    //           </TableCell>
    //           <TableCell align="right">
    //             <p className="font-medium text-black">{row.avgPrice} ETH</p>
    //           </TableCell>
    //           <TableCell align="right">
    //             <p className="font-medium text-red-400">{row.avgPricePercent}%</p>
    //           </TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </div>
  );
};

const headCells = [
  { id: "collection", label: "Collection" },
  { id: "floor", label: "AD Floor Price", numeric: true },
  { id: "volume", label: "Volume", numeric: true },
  { id: "volume percent", label: "Volume %", numeric: true },
  { id: "avg price", label: "Avg Price", numeric: true },
  { id: "avg price %", label: "Avg Price %", numeric: true },
];

const CustomTableHead = () => {
  return (
    <TableHead className="bg-transparent">
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
            <p className="font-bold">{headCell.label}</p>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default StatsTable;
