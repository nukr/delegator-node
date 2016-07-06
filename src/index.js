export default function create_delegator (cases) {
  return function delegator (...args) {
    let delegate
    const key = args.shift()
    if (cases.hasOwnProperty(key)) {
      delegate = cases[key]
    } else {
      delegate = cases._default
    }
    return delegate.apply(null, args)
  }
}
