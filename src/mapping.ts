import { BigInt } from "@graphprotocol/graph-ts"
import { Arb } from "../generated/schema"
import { ArbCall } from '../generated/orfeed/orfeed'

export function handlearb(call: ArbCall): void {
  let id = call.transaction.hash.toHex()
  let arb = new Arb(id)
  arb.fundsReturnToAddress = call.inputs.fundsReturnToAddress
  arb.liquidityProviderContractAddress = call.inputs.liquidityProviderContractAddress
  arb.tokens = call.inputs.tokens.toString()
  arb.amount = call.inputs.amount
  arb.exchanges = call.inputs.exchanges.toString()
  arb.arbResp = call.outputs.arbResp
  arb.save()
}
