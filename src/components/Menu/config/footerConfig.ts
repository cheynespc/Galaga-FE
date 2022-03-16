import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Main Site'),
        href: 'https://www.galagatoken.com/',
      },
      {
        label: t('Community'),
        href: 'https://t.me/galaga_token',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/galagatoken',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.galagatoken.com',
      },
    ],
  },
]
