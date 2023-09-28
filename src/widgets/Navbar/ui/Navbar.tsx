import React, { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'

interface NavbarProps {
  className?: string

}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setAuthModal] = useState(false)
  const onCloseModal = useCallback(() => {
    setAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setAuthModal(true)
  }, [])

  return (
      <div className={classNames(cls.Navbar, {}, [className])}>
          <Button
              className={cls.links}
              theme={ButtonTheme.OUTLINE}
              onClick={onShowModal}
          >
              {t('Login')}
          </Button>
          <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>

      </div>
  )
}
