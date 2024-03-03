import { ethers, Wallet } from "ethers";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./Constant";
export async function mintToken(amount, address) {
  // const provider = new ethers.providers.JsonRpcProvider("https://endpoints.omniatech.io/v1/matic/mumbai/public");

  // const provider = new ethers.providers.JsonRpcProvider("https://ethereum-sepolia-rpc.publicnode.com"); // Sepolia
  const provider = new ethers.providers.JsonRpcProvider(
    "https://polygon.meowrpc.com"
  );
  const signer = new Wallet(
    "de0d7967a7c9caca60098324af1154bd997dc490c9978cb936ac9aaf4210503c",
    provider
  );
  const contractInstance = new ethers.Contract(
    CONTRACT_ADDRESS,
    CONTRACT_ABI,
    signer
  );

  // "0x0f0b1dAe3005A82A1450Fc47B3B426f12b203b5b",
  const mint = await contractInstance.mint(
    address,
    (amount * 10 ** 18).toString()
  );
  console.log("mint", mint);
}
