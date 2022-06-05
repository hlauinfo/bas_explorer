import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { hexToNumber } from "@etclabscore/eserialize";

function TxListItem({ tx, showblockNumber }: { tx: any, showblockNumber?: boolean }) {
  return (
    <TableRow>
      {showblockNumber && <TableCell>{hexToNumber(tx.blockNumber)}</TableCell>}

      <TableCell>
        <Link
          component={({ className, children }: { children: any, className: string }) => (
            <RouterLink className={className} to={`/tx/${tx.hash}`} >
              {children}
            </RouterLink>
          )}>
          {tx.hash}
        </Link>
      </TableCell>

      <TableCell>
        <Link
          component={({ className, children }: { children: any, className: string }) => (
            <RouterLink className={className} to={`/address/${tx.from || tx.fromAddressHash}`} >
              {children}
            </RouterLink>
          )}>
          {tx.from || tx.fromAddressHash}
        </Link>
      </TableCell>

      <TableCell>
        {tx.toAddressHash !== null ?
          <Link
            component={({ className, children }: { children: any, className: string }) => (
              <RouterLink className={className} to={`/address/${tx.to || tx.toAddressHash}`} >
                {children}
              </RouterLink>
            )}>
            {tx.to || tx.toAddressHash}
          </Link>
          : null}
      </TableCell>

      <TableCell>{hexToNumber(tx.transactionIndex) || tx.index}</TableCell>
      <TableCell>{hexToNumber(tx.value)}</TableCell>
      <TableCell>{tx.status}</TableCell>
    </TableRow>
  );
}

export interface ITxListProps {
  transactions: any[];
  showBlockNumber?: boolean;
}

function TxList(props: ITxListProps) {
  if (props.transactions.length === 0) { return null; }

  return (
    <Table>
      <TableHead>
        <TableRow>
          {props.showBlockNumber && <TableCell>Block Number</TableCell>}
          <TableCell>Hash</TableCell>
          <TableCell>From</TableCell>
          <TableCell>To</TableCell>
          <TableCell>Index</TableCell>
          <TableCell>Value</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {props.transactions.map(
          (tx: any) =>
            <TxListItem key={tx.hash} tx={tx} showblockNumber={props.showBlockNumber} />,
        )}
      </TableBody>
    </Table>
  );
}

export default TxList;
