import { ConfigProfile } from '../../profile/config-profile';
import { FilterOption, FilterOptionQuery } from './filter-option';
export declare class RelationsOption implements FilterOption {
    setOption(query: FilterOptionQuery, profile: ConfigProfile): void;
    isAuthorized(profile: ConfigProfile): boolean;
}
