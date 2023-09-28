import React, { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface NavbarProps {
  className?: string

}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setAuthModal] = useState(false)
  const onToggleModal = useCallback(() => {
    setAuthModal(prev => !prev)
  }, [])
  return (
      <div className={classNames(cls.Navbar, {}, [className])}>
          <Button
              className={cls.links}
              theme={ButtonTheme.OUTLINE}
              onClick={onToggleModal}
          >
              {t('Login')}
          </Button>
          {/* eslint-disable-next-line i18next/no-literal-string */}
          <Modal isOpen={isAuthModal} onClose={onToggleModal}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, veniam?
          </Modal>

      </div>
  )
}
