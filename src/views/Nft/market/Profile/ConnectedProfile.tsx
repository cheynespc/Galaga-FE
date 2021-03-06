import React from 'react'
import styled from 'styled-components'
import { useAchievementsForAddress, useProfileForAddress } from 'state/profile/hooks'
import { Box } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import { Route, useParams } from 'react-router'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import MarketPageHeader from '../components/MarketPageHeader'
import ProfileHeader from './components/ProfileHeader'
import TabMenu from './components/TabMenu'
import Achievements from './components/Achievements'
import ActivityHistory from './components/ActivityHistory'
import SubMenu from './components/SubMenu'
import useNftsForAddress from './hooks/useNftsForAddress'
import UnconnectedProfileNfts from './components/UnconnectedProfileNfts'

const TabMenuWrapper = styled(Box)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0%);

  ${({ theme }) => theme.mediaQueries.sm} {
    left: auto;
    transform: none;
  }
`

const ConnectedProfile = () => {
  const { accountAddress } = useParams<{ accountAddress: string }>()
  const { profile: profileHookState, isFetching: isProfileFetching } = useProfileForAddress(accountAddress)
  const { profile } = profileHookState || {}
  const { achievements, isFetching: isAchievementFetching } = useAchievementsForAddress(accountAddress)
  const { nfts, isLoading: isNftLoading } = useNftsForAddress(accountAddress, profile, isProfileFetching)

  return (
    <>
      <MarketPageHeader position="relative">
        <ProfileHeader
          accountPath={accountAddress}
          profile={profile}
          achievements={achievements}
          nftCollected={nfts.length}
          isProfileLoading={isProfileFetching}
          isNftLoading={isNftLoading}
          isAchievementsLoading={isAchievementFetching}
        />
        <TabMenuWrapper>
          <TabMenu />
        </TabMenuWrapper>
      </MarketPageHeader>
      <Page style={{ minHeight: 'auto' }}>
        <Route path={`${nftsBaseUrl}/profile/:accountAddress/achievements`}>
          <Achievements achievements={achievements} points={profile?.points} />
        </Route>
        <Route path={`${nftsBaseUrl}/profile/:accountAddress/activity`}>
          <SubMenu />
          <ActivityHistory />
        </Route>
        <Route exact path={`${nftsBaseUrl}/profile/:accountAddress`}>
          <SubMenu />
          <UnconnectedProfileNfts nfts={nfts} isLoading={isNftLoading} />
        </Route>
      </Page>
    </>
  )
}

export default ConnectedProfile
// import React from 'react'
// import styled from 'styled-components'
// import { useProfile } from 'state/profile/hooks'
// import { useWeb3React } from '@web3-react/core'
// import { Box } from '@pancakeswap/uikit'
// import Page from 'components/Layout/Page'
// import { Route } from 'react-router'
// import { useUserNfts } from 'state/nftMarket/hooks'
// import { nftsBaseUrl } from 'views/Nft/market/constants'
// import { useAchievements, useFetchAchievements } from 'state/achievements/hooks'
// // import { AchievementFetchStatus } from 'state/types'
// import { UserNftInitializationState } from 'state/nftMarket/types'
// import useFetchUserNfts from './hooks/useFetchUserNfts'
// import MarketPageHeader from '../components/MarketPageHeader'
// import ProfileHeader from './components/ProfileHeader'
// import TabMenu from './components/TabMenu'
// import Achievements from './components/Achievements'
// import ActivityHistory from './components/ActivityHistory'
// import SubMenu from './components/SubMenu'
// import UserNfts from './components/UserNfts'
//
// const TabMenuWrapper = styled(Box)`
//   position: absolute;
//   bottom: 0;
//   left: 50%;
//   transform: translate(-50%, 0%);
//
//   ${({ theme }) => theme.mediaQueries.sm} {
//     left: auto;
//     transform: none;
//   }
// `
//
// const ConnectedProfile = () => {
//   const { profile, isLoading: isProfileLoading } = useProfile()
//   const { achievements, achievementFetchStatus } = useAchievements()
//   const { account } = useWeb3React()
//   const { userNftsInitializationState, nfts: userNfts } = useUserNfts()
//
//   useFetchAchievements()
//   useFetchUserNfts()
//
//   return (
//     <>
//       <MarketPageHeader position="relative">
//         <ProfileHeader
//           accountPath={account}
//           profile={profile}
//           achievements={achievements}
//           nftCollected={userNfts.length}
//           isProfileLoading={isProfileLoading}
//           isNftLoading={userNftsInitializationState !== UserNftInitializationState.INITIALIZED}
//   //        isAchievementsLoading={achievementFetchStatus !== AchievementFetchStatus.FETCHED}
//         />
//         <TabMenuWrapper>
//           <TabMenu />
//         </TabMenuWrapper>
//       </MarketPageHeader>
//       <Page style={{ minHeight: 'auto' }}>
//         <Route path={`${nftsBaseUrl}/profile/:accountAddress/achievements`}>
//           <Achievements achievements={achievements} points={profile?.points} />
//         </Route>
//         <Route path={`${nftsBaseUrl}/profile/:accountAddress/activity`}>
//           <SubMenu />
//           <ActivityHistory />
//         </Route>
//         <Route exact path={`${nftsBaseUrl}/profile/:accountAddress`}>
//           <SubMenu />
//           <UserNfts />
//         </Route>
//       </Page>
//     </>
//   )
// }
//
// export default ConnectedProfile
