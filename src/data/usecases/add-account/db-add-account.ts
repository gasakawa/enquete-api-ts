import {
  AddAccount,
  AddAccountModel,
  AccountModel,
  Encrypter
} from './db-add-account-protocols'

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
