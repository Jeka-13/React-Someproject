import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice'
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState'
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { username, password, error, isLoading } = useSelector(getLoginState)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    // @ts-expect-error
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, username, password])
  return (
      <div className={classNames(cls.LoginForm, {}, [className])}>
          <Text title={t('Authorization')} />
          {error && <Text text={error} theme={TextTheme.ERROR}/>}
          <Input
              type="text"
              className={cls.input}
              autoFocus={true}
              placeholder={t('Enter username')}
              onChange={onChangeUsername}
              value={username}
          />
          <Input
              type="password"
              className={cls.input}
              placeholder={t('Enter password')}
              onChange={onChangePassword}
              value={password}
          />
          <Button
              theme={ButtonTheme.OUTLINE}
              className={cls.loginBtn}
              onClick={onLoginClick}
              disabled={isLoading}
          >
              {t('Login')}
          </Button>
      </div>
  )
})

LoginForm.displayName = 'LoginForm'
