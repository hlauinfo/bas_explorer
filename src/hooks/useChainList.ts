// import { useEffect } from "react";
// import { uniqBy } from "lodash";
import { IChain as Chain } from "../models/chain";
import React from "react";

// const mergeChainSets = (c1: Chain[], c2: Chain[]) => uniqBy(c1.concat(c2), "name");

export default function() {
  const [chains, setChains] = React.useState<Chain[]>([
    {
      name: "Ankr BAS",
      network: "testnet",
      rpc: ["https://rpc.dev-01.bas.ankr.com/"],
      graphUrl: "https://explorer.dev-01.bas.ankr.com/graphiql",
    },
    {
      name: "CUBE BAS",
      network: "testnet",
      rpc: ["https://bas-cube-testnet.nodereal.io/"],
      graphUrl: "https://bas-cube-testnet-explorer.nodereal.io/graphiql",
    },
    {
      name: "Project Galaxy BAS",
      network: "testnet",
      rpc: ["https://bas-galaxy-testnet.nodereal.io/"],
      graphUrl: "https://bas-galaxy-testnet-explorer.nodereal.io/graphiql",
    },
    {
      name: "Aries BAS",
      network: "testnet",
      rpc: ["https://bas-aries-public.nodereal.io/"],
      graphUrl: "https://bas-aries-testnet-explorer.nodereal.io/graphiql",
    },
  ]);

  // uncomment once we add 'chain list provider' concept. This list blows.

  // useEffect(() => {
  //   if (chains === undefined) {
  //     fetch("https://chainid.network/chains.json")
  //       .then((r) => r.json())
  //       .then((chainIdNetwork) => {
  //         const filteredChains = chainIdNetwork.filter((c: Chain) => {
  //           if (c.rpc.length === 0) {
  //             return false;
  //           }
  //           return true;
  //         });
  //         if (chains) {
  //           setChains(mergeChainSets(chains, filteredChains));
  //         } else {
  //           setChains(filteredChains);
  //         };
  //       });
  //   }
  // }, [chains]);

  return [chains, setChains];
}
