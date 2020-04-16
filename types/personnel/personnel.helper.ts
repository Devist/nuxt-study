import { Personnel } from './personnel.interface'

export class LoginHelper implements Personnel.User {
  id: string = ''
  password: string = ''

  updateLogin(user: Personnel.User, fieldsToUpdate: Partial<Personnel.User>) {
    return { ...user, ...fieldsToUpdate }
  }
}
