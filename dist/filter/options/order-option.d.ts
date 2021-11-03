import { ConfigProfile } from '../../profile/config-profile';
import { FilterOption, FilterOptionQuery } from './filter-option';
export declare class OrderOption implements FilterOption {
    setOption(query: FilterOptionQuery, profile: ConfigProfile): void;
    private getOrderCriteria;
    isAuthorized(profile: ConfigProfile): boolean;
}
