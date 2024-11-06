export interface Vault {
  vaultAddress: string;
  title: string;
  description: string;
  deadline: bigint;
}

export type VaultArrayType = Vault[];
