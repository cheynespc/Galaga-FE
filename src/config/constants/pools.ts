import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '0xFb4E94EEc6992Aff6B1d0F993dbe025a59782E2D',
      56: '0xFb4E94EEc6992Aff6B1d0F993dbe025a59782E2D',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.01',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 220,
    stakingToken: serializedTokens.glg,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0x0fec44e5f0e7653f04d5b22bebb18fcfde38af75',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.006',
    sortOrder: 999,
    // isFinished: true,
  },
]

export default pools
