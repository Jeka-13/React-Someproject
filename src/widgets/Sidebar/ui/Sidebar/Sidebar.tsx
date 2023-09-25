import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import React, { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import { Button } from 'shared/ui/Button/Button'

interface SidebarProps {
  className?: string

}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => {
    setCollapsed(prev => prev = !prev)
  }

  return (
      <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
          <Button onClick={onToggle}>Toggle</Button>
          <div className={cls.switchers}>
              <ThemeSwitcher/>
              <LangSwitcher className={cls.lang}/>
          </div>
      </div>
  )
}
