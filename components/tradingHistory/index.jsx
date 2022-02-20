import * as React from "react";
import Avatar from "@mui/material/Avatar";
import trading from "./Trading.module.css";
import Container from "@mui/material/Container";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.black,
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#50c9c314",
  },
}));

function createData(name, calories, fat, carbs, protein, number, id) {
  return { name, calories, fat, carbs, protein, number, id };
}

const rows = [
  createData(
    "LISTING",
    159,
    "4.5 ETH",
    "Jean",
    "Hvyw....hk8",
    "About 8 hours ago",
    12
  ),
  createData(
    "SALE",
    159,
    "8.5 ETH",
    "Jean",
    "Hvyw....hk8",
    "About 8 hours ago",
    13
  ),
  createData(
    "LISTING",
    159,
    "8.5 ETH",
    "Jean",
    "Hvyw....hk8",
    "About 8 hours ago",
    14
  ),
  createData(
    "SALE",
    159,
    "8.5 ETH",
    "Jean",
    "Hvyw....hk8",
    "About 8 hours ago",
    15
  ),
];

function TradingHistory() {
  return (
    <div className={`${trading.maindivoftrading}`}>
      <Container>
        <h5 className={`${trading.maindivheading}`}>Trading History</h5>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Event</StyledTableCell>
                <StyledTableCell align="center">Item</StyledTableCell>
                <StyledTableCell align="center">Price</StyledTableCell>
                <StyledTableCell align="center">From</StyledTableCell>
                <StyledTableCell align="center">To </StyledTableCell>
                <StyledTableCell align="center">Date </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.name === "LISTING" ? (
                      <div className={`${trading.iconpluslisting}`}>
                        <LocalOfferOutlinedIcon />
                        <p className={`${trading.listing}`}>LISTING</p>
                      </div>
                    ) : (
                      <div className={`${trading.iconpluslisting}`}>
                        <ShoppingCartOutlinedIcon />
                        <p className={`${trading.listing}`}>SALE</p>
                      </div>
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <div className={`${trading.iconpluslisting1122}`}>
                      <Avatar alt="Remy Sharp" src="/images/avatar2.png" />
                      <div className={`${trading.textalignoftex}`}>
                        <p>Abstact Smoke Red </p>
                        <p>10000 </p>
                      </div>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.fat}</StyledTableCell>
                  <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.protein}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.number}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default TradingHistory;
