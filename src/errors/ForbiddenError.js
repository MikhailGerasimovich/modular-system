import { BaseError } from './BaseError.js';
import { StatusCodes } from 'http-status-codes';

export class ForbiddenError extends BaseError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.FORBIDDEN;
        this.name = 'Forbidden Error';
    }
}