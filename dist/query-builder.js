"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBuilder = void 0;
const filter_factory_1 = require("./filter/filter-factory");
const container_1 = require("./filter/options/container");
const loader_1 = require("./profile/loader");
class QueryBuilder {
    constructor(expressQuery, profile) {
        this.expressQuery = expressQuery;
        this.typeORMQuery = {};
        this.profile = (0, loader_1.loadProfile)(profile);
        this.findOptions = new container_1.OptionsCollection();
        this.filterFactory = new filter_factory_1.FilterFactory();
    }
    build() {
        for (const option of this.findOptions.options) {
            option.setOption({
                source: this.expressQuery,
                target: this.typeORMQuery,
            }, this.profile);
        }
        for (const queryItem in this.expressQuery) {
            const filter = this.filterFactory.get({
                query: this.typeORMQuery,
                key: queryItem,
                value: this.expressQuery[queryItem],
            });
            filter.buildQuery();
        }
        return this.typeORMQuery;
    }
}
exports.QueryBuilder = QueryBuilder;
//# sourceMappingURL=query-builder.js.map