import test from 'ava'
import create_delegator from '../src'

test('match case', (t) => {
  const cases = {
    alpha: (...args) => `alpha ${args.length}`,
    beta: (...args) => `beta ${args.length}`,
    _default: (...args) => `default ${args.length}`
  }
  const delegator = create_delegator(cases)
  const result = delegator('alpha', 1, 2, 3)
  t.is(result, 'alpha 3')
})

test('wrong case', (t) => {
  const cases = {
    alpha: (...args) => `alpha ${args.length}`,
    beta: (...args) => `beta ${args.length}`,
    _default: (...args) => `default ${args.length}`
  }
  const delegator = create_delegator(cases)
  const result = delegator('xx', 1, 2, 3)
  t.is(result, 'default 3')
})

test('no args', (t) => {
  const cases = {
    alpha: (...args) => `alpha ${args.length}`,
    beta: (...args) => `beta ${args.length}`,
    _default: (...args) => `default ${args.length}`
  }
  const delegator = create_delegator(cases)
  const result = delegator()
  t.is(result, 'default 0')
})
