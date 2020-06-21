import { User } from '../models/User'

test('It should be ok', () => {
  const user = new User()

  user.name = 'Jack'

  expect(user.name).toEqual('Jack')
})
