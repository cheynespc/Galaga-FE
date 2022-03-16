import tokens from './tokens'
import { SerializedFarmConfig } from './types'

const priceHelperLps: SerializedFarmConfig[] = [
  /**
   * These LPs are just used to help with price calculation for MasterChef LPs (farms.ts).
   * This list is added to the MasterChefLps and passed to fetchFarm. The calls to get contract information about the token/quoteToken in the LP are still made.
   * The absence of a PID means the masterchef contract calls are skipped for this farm.
   * Prices are then fetched for all farms (masterchef + priceHelperLps).
   * Before storing to redux, farms without a PID are filtered out.
   */
  {
    pid: 1,
    lpSymbol: '1UP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xf46d8a5e3b6deda7537d3f09666a1577e4cc7547',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
]

export default priceHelperLps
