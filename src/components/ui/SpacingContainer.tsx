import { ReactNode } from "react"


const SpacingContainer = ({children, className}: {className?: string, children: ReactNode}) => {
  return (
    <div className={className}>
        {children}
    </div>
  )
}

export default SpacingContainer