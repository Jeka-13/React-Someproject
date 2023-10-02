import React, { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()
  const onCloseModal = useCallback(() => {
    setAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setAuthModal(true)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (authData) {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                    className={cls.links}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onLogout}
                >
                {t('Logout')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>

        </div>
    )
  }
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
