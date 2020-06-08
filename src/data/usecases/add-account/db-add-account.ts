import {
  AddAccount,
  AddAccountModel
} from '../../../domain/usecases/add-account'
import { AccountModel } from '../../../domain/models/account'
import { Encrypter } from '../../protocols/encrypter'

export class DBAddAccount implements AddAccount {
  private readonly ecrypter: Encrypter

  constructor(encrypter: Encrypter) {
    this.ecrypter = encrypter
  }

  async add(account: AddAccountModel): Promise<AccountModel> {
    await this.ecrypter.encrypt(account.password)
    return new Promise(resolve => resolve(null))
  }
}
