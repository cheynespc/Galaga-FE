import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Trade Now.',
  bodyText: 'Trade any token. Just connect your wallet.',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: 'BNB token' },
      { src: 'BTC', alt: 'BTC token' },
      { src: '1UP', alt: '1UP token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Stake Tokens Earn !UP',
  bodyText: 'Galaga Token, Money That Makes Money, Makes Money!',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.galagatoken.com',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: 'Pie chart' },
      { src: 'stonks', alt: 'Stocks chart' },
      { src: 'folder', alt: 'Folder with cake token' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'Get rewarded with 1UP Tokens ',
  bodyText:
    '1UP token is at the base of GalagaDEX. Buy it, farm it, spend it, stake it..',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x0fec44e5f0e7653f04d5b22bebb18fcfde38af75',
    text: 'Buy 1UP',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.galagatoken.com',
    text: 'information',
    external: true,
  },

  images: {
    path: '/images/home/cake/',
    attributes: [
      { src: 'bottom-right', alt: 'Small 3d pancake' },
      { src: 'top-right', alt: 'Small 3d pancake' },
      { src: 'coin', alt: '1UP token' },
      { src: 'top-left', alt: 'Small 3d pancake' },
    ],
  },
}
