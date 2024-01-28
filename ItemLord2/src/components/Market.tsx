import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { AppState } from "../redux/reducers";
import { useDispatch, useSelector } from "react-redux";
import { selectItem, setTradeType, toggleOverlay } from "../redux/actions";

export default function Market() {
  const dispatch = useDispatch();
  const market = useSelector((state: AppState) => state.market);

  const color = { color: "white", backgroundColor: "black" };

  const getYesterdaysItemPrice = (itemName: string): number | null => {
    const yesterDayItem = market.yesterdaysForSale.find(
      (item) => item.name === itemName
    );
    return yesterDayItem ? yesterDayItem.price : null;
  };

  return (
    <div style={{ height: "23vw" }}>
      <h3 style={{ textAlign: "center" }}>The Market</h3>
      <TableContainer
        component={Paper}
        sx={{
          marginBottom: "5rem",
          ...color,
          maxHeight: 350,
        }}
      >
        <Table stickyHeader aria-label="simple table">
          <TableHead sx={{ position: "stickey" }}>
            <TableRow>
              <TableCell sx={{ backgroundColor: "white" }}>Name</TableCell>
              <TableCell align="right" sx={{ backgroundColor: "white" }}>
                Qty
              </TableCell>
              <TableCell align="right" sx={{ backgroundColor: "white" }}>
                Price
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {market.forSale.map((item) => (
              <TableRow
                onClick={() => {
                  dispatch(setTradeType("buy"));
                  dispatch(selectItem(item));
                  dispatch(toggleOverlay());
                }}
                key={item.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0, ...color },
                  cursor: "pointer",
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ ...color, minWidth: "80px", lineHeight: 2.23 }}
                >
                  {market.yesterdaysForSale &&
                  getYesterdaysItemPrice(item.name) !== null ? (
                    item.price > getYesterdaysItemPrice(item.name)! ? (
                      <ArrowUpwardIcon sx={{ color: "green", fontSize: 20 }} />
                    ) : item.price < getYesterdaysItemPrice(item.name)! ? (
                      <ArrowDownwardIcon sx={{ color: "red", fontSize: 20 }} />
                    ) : (
                      "    "
                    )
                  ) : (
                    "    "
                  )}
                  {item.name}
                </TableCell>
                <TableCell align="right" sx={{ ...color }}>
                  {item.qty}
                </TableCell>
                <TableCell align="right" sx={{ ...color }}>
                  {item.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  );
}
