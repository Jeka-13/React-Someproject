import { classNames } from './classNames'

describe('classNames', () => {
  test('general test', () => {
    expect(classNames('someClass', { hovered: true }, ['ml-3']))
      .toBe('someClass hovered ml-3')
  })

  test('without mod', () => {
    expect(classNames('someClass', { hovered: false }, ['ml-3']))
      .toBe('someClass ml-3')
  })

  test('combined mod', () => {
    expect(classNames('someClass', { hovered: true, selectable: false }, ['ml-3']))
      .toBe('someClass hovered ml-3')
  })

  test('with mod undefined', () => {
    expect(classNames('someClass', { hovered: true, selectable: undefined }, ['ml-3']))
      .toBe('someClass hovered ml-3')
  })
})
