import { getAllItemsQty } from "../utils";
import { useSelector } from "react-redux";
import { AppState } from "../redux/reducers";
import ItemTable from "./ItemTable";

export default function Pocket() {
  const pocket = useSelector((state: AppState) => state.pocket);
  const pocketSize = useSelector((state: AppState) => state.pocketSize);
  const tableTitle = `Your Pants Pocket ${getAllItemsQty(
    pocket
  )}/${pocketSize}`;
  return (
    <div>
      <ItemTable
        items={pocket}
        tradeType={"buy"}
        title={tableTitle}
        size="small"
        ariaLabel="a dense table"
      />
    </div>
  );
}
