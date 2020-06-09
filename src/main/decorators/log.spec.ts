import { LogControllerDecorator } from './log'
import {
  Controller,
  HttpResponse,
  HttpRequest
} from '../../presentation/protocols'

describe('LogControllerDecorator', () => {
  test('Should call controller handle', async () => {
    class ControllerStrub implements Controller {
      async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const httpResponse = {
          body: {
            name: 'Gabriel'
          },
          statusCode: 200
        }
        return new Promise(resolve => resolve(httpResponse))
      }
    }
    const controllerStub = new ControllerStrub()
    const handleSpy = jest.spyOn(controllerStub, 'handle')
    const sut = new LogControllerDecorator(controllerStub)
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        name: 'any_name',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    await sut.handle(httpRequest)
    expect(handleSpy).toHaveBeenCalledWith(httpRequest)
  })
})
