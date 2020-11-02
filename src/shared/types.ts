export interface IError {
    title?: any,
};

export interface IErrorData {
    data: IError;
}

export interface IErrorResponse {
    response: IErrorData;
}

export interface IApplicationUser
{
    id: string,
    userName: string,
    normalizedUserName?: string,
    email?: string,
    normalizedEmail?: string,
    emailConfirmed?: true,
    phoneNumber: string,
    phoneNumberConfirmed: true,
    accessFailedCount: 0,
    makeFirstNamePublic: true,
    makeLastNamePublic: true,
    makeBirthDatePublic: true,
    genderId: 0,
    gender: {
      name: string;
      id: number;
    }
  }