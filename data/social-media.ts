import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { faDiscord, faFacebookSquare, faReddit, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import LinkItem from '~/data/LinkItem'

export interface SocialMediaItem extends LinkItem {
  icon: IconDefinition,
  frontPage: boolean
}

const items: SocialMediaItem[] = [
  {
    name: 'Forum',
    icon: faComments,
    class: ['forum'],
    href: 'https://forum.e-gulden.org/',
    frontPage: true
  },
  {
    name: 'BitcoinTalk Thread',
    icon: faComments,
    class: ['forum'],
    href: 'https://bitcointalk.org/index.php?topic=843017',
    frontPage: false
  },
  {
    name: 'Facebook',
    icon: faFacebookSquare,
    class: ['facebook'],
    href: 'https://www.facebook.com/EFLFoundation/',
    frontPage: true
  },
  {
    name: 'Twitter',
    icon: faTwitter,
    class: ['twitter'],
    href: 'https://twitter.com/eguldenfoundati',
    frontPage: true
  },
  {
    name: 'Reddit',
    icon: faReddit,
    class: ['reddit'],
    href: 'https://www.reddit.com/r/eflfoundation',
    frontPage: true
  },
  {
    name: 'Discord',
    icon: faDiscord,
    class: ['discord'],
    href: 'https://discord.gg/WPFjR8B',
    frontPage: true
  },
  {
    name: 'Telegram',
    icon: faTelegram,
    class: ['telegram'],
    href: 'https://t.me/joinchat/K5PBq1fK2nPX61j3MWuIAQ',
    frontPage: true
  }
]

export default items
