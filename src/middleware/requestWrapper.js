import { BaseError } from '../errors/BaseError.js';
import { StatusCodes } from 'http-status-codes';

export function requestWrapper(rote) {
    return async (req, res, next) => {
        try {
            await rote(req, res, next);
        } catch (error) {
            console.log(error);

            if (error instanceof BaseError) {
                res.status(error.statusCode).json({
                    code: error.statusCode,
                    name: error.name,
                    message: error.message,
                });
            } else {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    code: StatusCodes.INTERNAL_SERVER_ERROR,
                    name: error.name,
                    message: error.message,
                });
            }
            next(error);
        }
        };
}
