import * as React from "react";
import { Typography, IconButton, Grid } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import TxList from "../TxList";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { Transaction } from "@etclabscore/ethereum-json-rpc";

export interface IProps {
  setTransactions: (transactions: Transaction[]) => void;
  transactions: Transaction[];
  from: number;
  to: number;
  disableNext?: boolean;
  disablePrev?: boolean;
  onNext?: () => void;
  onPrev?: () => void;
  style?: any;
}

const AddressTransactions: React.FC<IProps> = (props) => {
  const { t } = useTranslation();
  return (
    <div style={props.style}>
      <TxList transactions={props.transactions || []} showBlockNumber={true}></TxList>
    </div>
  );
};

export default AddressTransactions;
