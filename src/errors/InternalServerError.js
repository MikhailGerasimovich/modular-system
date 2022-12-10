import { BaseError } from './BaseError.js';
import { StatusCodes } from 'http-status-codes';

export class InternalServerError extends BaseError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
        this.name = 'INTERNAL SERVER ERROR';
    }
}
