import { getAllItemsQty } from "../utils";
import { useSelector } from "react-redux";
import ItemTable from "./ItemTable";
import Overlay from "./Overlay";
import { AppState } from "../interface";

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
        tradeType={"sell"}
        title={tableTitle}
        size="small"
        ariaLabel="a dense table"
      />
      <Overlay />
    </div>
  );
}
