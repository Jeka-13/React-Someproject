import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom'
import { ReactNode } from 'react'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}
interface AppLinkProps extends LinkProps {
  className?: string
  children: ReactNode
  theme?: AppLinkTheme
}

export const AppLink = (props: AppLinkProps) => {
  const {
    to,
    className,
    theme = AppLinkTheme.PRIMARY,
    children,
    ...otherProps
  } = props
  return (
      <Link
            to={to}
            className={classNames(cls.AppLink, { theme }, [className, cls[theme]])}
            {...otherProps}
        >
          {children}
      </Link>
  )
}
