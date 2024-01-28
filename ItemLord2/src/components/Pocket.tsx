import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getAllItemsQty } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../redux/reducers";
import { selectItem, setTradeType, toggleOverlay } from "../redux/actions";

export default function Pocket() {
  const dispatch = useDispatch();
  const pocket = useSelector((state: AppState) => state.pocket);
  const pocketSize = useSelector((state: AppState) => state.pocketSize);

  const color = { color: "white", backgroundColor: "black" };

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>
        Your Pants Pocket ({getAllItemsQty(pocket)}/{pocketSize})
      </h3>
      <TableContainer
        component={Paper}
        sx={{
          marginBottom: "5rem",
          ...color,
          maxHeight: 230,
        }}
      >
        <Table stickyHeader size="small" aria-label="a dense table">
          <TableHead>
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
            {pocket.map((item) => (
              <TableRow
                onClick={() => {
                  dispatch(setTradeType("sell"));
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
