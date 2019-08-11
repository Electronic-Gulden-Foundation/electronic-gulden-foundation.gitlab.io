import {
  faFacebookSquare,
  faReddit,
  faTwitter
} from '~/node_modules/@fortawesome/free-brands-svg-icons'
import { faComments } from '~/node_modules/@fortawesome/free-solid-svg-icons'

export default [
  {
    name: 'socialMedia.forum',
    icon: faComments,
    class: ['forum'],
    href: 'https://forum.e-gulden.org/'
  },
  {
    name: 'socialMedia.facebook',
    icon: faFacebookSquare,
    class: ['facebook'],
    href: 'https://www.facebook.com/EFLFoundation/'
  },
  {
    name: 'socialMedia.twitter',
    icon: faTwitter,
    class: ['twitter'],
    href: 'https://twitter.com/ElecGulden'
  },
  {
    name: 'socialMedia.reddit',
    icon: faReddit,
    class: ['reddit'],
    href: 'https://www.reddit.com/r/eflfoundation'
  }
]
