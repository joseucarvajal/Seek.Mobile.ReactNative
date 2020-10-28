export interface IError {
    Title?: any,
};


export interface IErrorData {
    data: IError;
}

export interface IErrorResponse {
    response: IErrorData;
}