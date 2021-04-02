import Link from 'next/link'

import {
  NavigationWrapper,
  NavigationWrapperContent,
  NavigationWrapperContentList
} from './styles'

const Navigation = () => (
  <NavigationWrapper>
    <NavigationWrapperContent>
      <NavigationWrapperContentList>
        <Link href="/">Home</Link>
      </NavigationWrapperContentList>
      <NavigationWrapperContentList>
        <Link href="/about">Sobre</Link>
      </NavigationWrapperContentList>
      <NavigationWrapperContentList>
        <Link href="/about">Portfolio</Link>
      </NavigationWrapperContentList>
      <NavigationWrapperContentList>
        <Link href="/about">Blog</Link>
      </NavigationWrapperContentList>
      <NavigationWrapperContentList>
        <Link href="/about">Contato</Link>
      </NavigationWrapperContentList>
    </NavigationWrapperContent>
  </NavigationWrapper>
)

export default Navigation
