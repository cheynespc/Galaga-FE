import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: '1UP',
    lpAddresses: {
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
      97: '0x0fec44e5f0e7653f04d5b22bebb18fcfde38af75',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  },
  {
   pid: 1,
   lpSymbol: '1UP-BNB LP',
   lpAddresses: {
     97: '0xa4f96785cfc65cfb5e0fab0e5be5083a78cbec74',
     56: '0xf46d8a5e3b6deda7537d3f09666a1577e4cc7547',
   },
   token: serializedTokens.cake,
   quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: '1UP-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x2eb43494e8b6a65f792402c669879fa1b9501af4',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 3,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
  {
    pid: 4,
    lpSymbol: 'GLG-BNB LP',
    lpAddresses: {
      97: '0xa4f96785cfc65cfb5e0fab0e5be5083a78cbec74',
      56: '0xa4f96785cfc65cfb5e0fab0e5be5083a78cbec74',
    },
    token: serializedTokens.glg,
    quoteToken: serializedTokens.wbnb,
  },
]

export default farms
