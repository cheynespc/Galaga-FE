import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'GalagaDEX',
  description:
    'Newest Farming Exchange from the creators of Galaga Token stake now to earn rewards.',
  image: 'https://testingdex.galagatoken.com/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('GalagaDEX')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('GalagaDEX')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('GalagaDEX')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('GalagaDEX')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('GalagaDEX')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('GalagaDEX')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('GalagaDEX')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('GalagaDEX')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('GalagaDEX')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('GalagaDEX')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('GalagaDEX')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('GalagaDEX')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('GalagaDEX')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('GalagaDEX')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('GalagaDEX')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('GalagaDEX')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('GalagaDEX')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('GalagaDEX')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('GalagaDEX Info & Analytics')}`,
        description: 'View statistics for GalagaDEX exchange.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('GalagaDEX Info & Analytics')}`,
        description: 'View statistics for GalagaDEX exchange.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('GalagaDEX Info & Analytics')}`,
        description: 'View statistics for GalagaDEX exchange.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('GalagaDEX')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('GalagaDEX')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('GalagaDEX')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('GalagaDEX')}`,
      }
    default:
      return null
  }
}
