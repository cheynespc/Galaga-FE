import React from 'react'
import styled from 'styled-components'
import { Flex } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
// eslint-disable-next-line
import ConnectWalletButton from 'components/ConnectWalletButton'
import Container from 'components/Layout/Container'
// eslint-disable-next-line
import { useWeb3React } from '@web3-react/core'
// eslint-disable-next-line
import SunburstSvg from './SunburstSvg'
// eslint-disable-next-line
import CompositeImage from './CompositeImage'
// eslint-disable-next-line
const BgWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`
// eslint-disable-next-line
const StyledSunburst = styled(SunburstSvg)`
  height: 350%;
  width: 350%;

  ${({ theme }) => theme.mediaQueries.xl} {
    height: 400%;
    width: 400%;
  }
`
// eslint-disable-next-line
const Wrapper = styled(Flex)`
  z-index: 1;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`
// eslint-disable-next-line
const FloatingPancakesWrapper = styled(Container)`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  visibility: hidden;

  ${({ theme }) => theme.mediaQueries.md} {
    visibility: visible;
  }
`
// eslint-disable-next-line
const TopLeftImgWrapper = styled(Flex)`
  position: absolute;
  left: 0;
  top: 0;
`
// eslint-disable-next-line
const BottomRightImgWrapper = styled(Flex)`
  position: absolute;
  right: 0;
  bottom: 0;
`
// eslint-disable-next-line
const topLeftImage = {
  path: '/images/home/flying-pancakes/',
  attributes: [
    { src: '1-bottom', alt: 'Pancake flying on the bottom' },
    { src: '1-left', alt: 'Pancake flying on the left' },
    { src: '1-top', alt: 'Pancake flying on the top' },
  ],
}
// eslint-disable-next-line
const bottomRightImage = {
  path: '/images/home/flying-pancakes/',
  attributes: [
    { src: '2-bottom', alt: 'Pancake flying on the bottom' },
    { src: '2-top', alt: 'Pancake flying on the top' },
    { src: '2-right', alt: 'Pancake flying on the right' },
  ],
}
// eslint-disable-next-line
const Footer = () => {
  // eslint-disable-next-line
  const { t } = useTranslation()
  // eslint-disable-next-line
  const { account } = useWeb3React()

  return (
    <>
      <BgWrapper>
        <Flex alignItems="center" justifyContent="center" width="100%" height="100%">
          <StyledSunburst />
        </Flex>
      </BgWrapper>
    </>
  )
}

export default Footer
