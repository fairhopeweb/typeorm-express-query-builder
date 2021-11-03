import { ExpressQuery } from './express-query';
import { FindManyOptions } from 'typeorm';
import { ConfigProfile } from './profile/config-profile';
export declare class QueryBuilder {
    private expressQuery;
    private typeORMQuery;
    private readonly profile;
    private readonly findOptions;
    private readonly filterFactory;
    constructor(expressQuery: ExpressQuery, profile?: 'enabled' | 'disabled' | ConfigProfile);
    build(): FindManyOptions;
}
