import React from 'react'
import { Flex, ChartIcon, SwapIcon } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'
// eslint-disable-next-line
import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'
// eslint-disable-next-line
import IconCard, { IconCardData } from '../IconCard'
import GradientLogo from '../GradientLogoSvg'

// eslint-disable-next-line
const txCount = 30841921
// eslint-disable-next-line
const addressCount = 2751624

const Stats = () => {
  // eslint-disable-next-line
  const { t } = useTranslation()
  const data = useGetStats()
// eslint-disable-next-line
  const tvlString = data ? formatLocalisedCompactNumber(data.tvl) : '-'


// eslint-disable-next-line
  const TradesCardData: IconCardData = {
    icon: <SwapIcon color="primary" width="36px" />,
  }
// eslint-disable-next-line
  const StakedCardData: IconCardData = {
    icon: <ChartIcon color="failure" width="36px" />,
  }

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <GradientLogo height="48px" width="48px" mb="24px" />
    </Flex>
  )
}

export default Stats
