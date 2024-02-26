import { useSelector } from "react-redux";
import ItemTable from "./ItemTable";
import Overlay from "./Overlay";
import { AppState } from "../interface";

export default function Market() {
  const market = useSelector((state: AppState) => state.market);
  const tableTitle = "The Market";
  return (
    <div>
      <ItemTable
        items={market.forSale}
        tradeType={"buy"}
        title={tableTitle}
        size="medium"
        ariaLabel="simple table"
      />
      <Overlay />
    </div>
  );
}
