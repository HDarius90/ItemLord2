import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import {
  addCash,
  addItemToMarket,
  addItemToPocket,
  removeItemFromMarket,
  removeItemFromPocket,
  setInputValue,
  toggleOverlay,
} from "../redux/actions";
import { AppState } from "../redux/reducers";
import { capitalizeFirstLetter } from "../utils";

export default function Overlay() {
  const market = useSelector((state: AppState) => state.market);
  const stats = useSelector((state: AppState) => state.stats);
  const inputValue = useSelector((state: AppState) => state.inputValue);
  const selectedItem = useSelector((state: AppState) => state.selectedItem);
  const tradeType = useSelector((state: AppState) => state.tradeType);
  const isOverlayOpen = useSelector((state: AppState) => state.isOverlayOpen);
  const dispatch = useDispatch();

  const itemInMarket = market.forSale.find(
    (item) => item.name === selectedItem.name
  );

  const getMaxToTrade = (): number => {
    if (tradeType === "buy") {
      const canAfford = Math.floor(stats.cash / selectedItem.price);
      if (selectedItem.qty < canAfford) {
        return selectedItem.qty;
      }
      return canAfford;
    }
    return selectedItem.qty;
  };

  const handleClose = () => {
    dispatch(toggleOverlay());
    dispatch(setInputValue(0));
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const inputValue = parseInt(event.target.value);
    dispatch(setInputValue(inputValue));
  };

  const handleDump = () => {
    dispatch(removeItemFromPocket(selectedItem.name, inputValue));
    dispatch(toggleOverlay());
    dispatch(setInputValue(0));
  };

  const handleSell = () => {
    dispatch(removeItemFromPocket(selectedItem.name, inputValue));
    dispatch(addItemToMarket(selectedItem, inputValue));
    dispatch(addCash(inputValue * itemInMarket!.price));
    dispatch(toggleOverlay());
    dispatch(setInputValue(0));
  };

  const handleBuy = () => {
    dispatch(removeItemFromMarket(selectedItem.name, inputValue));
    dispatch(addItemToPocket(selectedItem, inputValue));
    dispatch(addCash(-inputValue * selectedItem.price));
    dispatch(toggleOverlay());
    dispatch(setInputValue(0));
  };

  const isValid = () => {
    if (inputValue > 0 && inputValue <= getMaxToTrade()) {
      return false;
    }
    return true;
  };

  return (
    <>
      <Dialog
        open={isOverlayOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ color: "black" }}>
          {itemInMarket ? capitalizeFirstLetter(tradeType) : "Dump"}
          ing {selectedItem.name}
        </DialogTitle>
        <DialogContent>
          {itemInMarket ? (
            <>
              <DialogContentText id="alert-dialog-description">
                {selectedItem.name} is currently{" "}
                {tradeType === "buy"
                  ? `selling for $${selectedItem.price}`
                  : `being bought for ${itemInMarket.price}`}
              </DialogContentText>
              <DialogContentText id="alert-dialog-description2">
                {tradeType === "sell"
                  ? `You have ${getMaxToTrade()} units to sell`
                  : `Whith your available founds, you can buy ${getMaxToTrade()} units`}
              </DialogContentText>
            </>
          ) : (
            <>
              {" "}
              <DialogContentText id="alert-dialog-description">
                The market has no use for {selectedItem.name} today, if you
                really need to get it off your hand, pumping it is an option...
              </DialogContentText>
              <DialogContentText id="alert-dialog-description2">
                {`You have ${getMaxToTrade()} units to dump`}
              </DialogContentText>
              <DialogContentText
                sx={{ marginTop: "1rem" }}
                id="alert-dialog-description2"
              >
                How mutch do you wish to dump?
              </DialogContentText>
            </>
          )}

          <TextField
            autoFocus
            margin="dense"
            id="tradeAmount"
            label="Trade Amount"
            type="number"
            fullWidth
            variant="standard"
            value={inputValue}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          {itemInMarket ? (
            tradeType === "buy" ? (
              <Button onClick={handleBuy} disabled={isValid()}>
                Buy
              </Button>
            ) : (
              <Button onClick={handleSell} disabled={isValid()}>
                Sell
              </Button>
            )
          ) : (
            <Button onClick={handleDump} disabled={isValid()}>
              Dump
            </Button>
          )}

          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
