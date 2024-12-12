import { useSelector } from "react-redux";
import { AppState } from "../redux/reducers";
import ItemTable from "./ItemTable";
import Overlay from "./Overlay";

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
