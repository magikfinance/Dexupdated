import { MenuEntry } from '@mozartfinance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://magik.farm/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: '',
      },
      {
        label: 'Docs',
        href: 'https://magikdotfinance.gitbook.io/docs/',
      },
      {
        label: 'Blog',
        href: '',
      },
    ],
  },
  {
    label: 'Audit by IB',
    icon: 'TicketIcon',
    href: '',
  },
]

export default config
