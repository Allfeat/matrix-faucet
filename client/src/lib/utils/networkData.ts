import { base } from "$app/paths";
import { PUBLIC_FAUCET_SYMPHONIE_URL } from "$env/static/public";

export interface ChainData {
  name: string;
  id: number;
}

export interface NetworkData {
  networkName: string;
  currency: string;
  chains: ChainData[];
  endpoint: string;
  explorer: string;
}

export const Symphonie: NetworkData = {
  networkName: "Symphonie Testnet",
  currency: "$SPI",
  chains: [
    { name: "Symphonie Live", id: -1 },
  ],
  endpoint: PUBLIC_FAUCET_SYMPHONIE_URL as string,
  explorer: "https://app.allfeat.network",
};

export const Networks: { network: NetworkData; url: string }[] = [
  { network: Symphonie, url: (base as string) || "/" },
];

export function getChainName(network: NetworkData, id: number): string | null {
  const index = network.chains.findIndex((ch) => ch.id === id);
  if (index < 0) {
    return null;
  }
  return network.chains[index].name;
}
