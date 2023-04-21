import { ReactElement, ReactFragment, ReactNode } from 'react'

type ReactText = string | number
type ReactChild = ReactElement | ReactText | ReactNode
export default interface ChildrenTypes {
    children: ReactChild | ReactFragment
}
