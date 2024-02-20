import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { selectItem, setTradeType, toggleOverlay } from "../redux/actions";
import { Item } from "../types";
import { AppState, ItemTableProps } from "../interfaces";

const ItemTable: React.FC<ItemTableProps> = ({
  items,
  tradeType,
  title,
  size,
  ariaLabel,
}) => {
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
    <>
      <h3 style={{ textAlign: "center" }}>{title}</h3>
      <TableContainer
        component={Paper}
        sx={{
          marginBottom: "5rem",
          ...color,
          maxHeight: 350,
        }}
      >
        <Table stickyHeader size={size} aria-label={ariaLabel}>
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
            {items.map((item: Item) => (
              <TableRow
                onClick={() => {
                  dispatch(setTradeType(tradeType));
                  dispatch(selectItem(item));
                  dispatch(toggleOverlay());
                }}
                key={item.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0, ...color },
                  cursor: "pointer",
                }}
              >
                <TableCell component="th" scope="row" sx={{ ...color }}>
                  {tradeType === "buy" &&
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
    </>
  );
};

export default ItemTable;
