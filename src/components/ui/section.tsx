import * as React from "react"
import { Container } from "./container"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType
  containerClassName?: string
  noContainer?: boolean
}

export function Section({
  className,
  containerClassName,
  as: Component = "section",
  noContainer = false,
  children,
  ...props
}: SectionProps) {
  const content = noContainer ? (
    children
  ) : (
    <Container className={containerClassName}>{children}</Container>
  )

  return (
    <Component
      className={`py-16 md:py-24 lg:py-32 ${className || ""}`}
      {...props}
    >
      {content}
    </Component>
  )
}
