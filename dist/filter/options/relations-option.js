"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationsOption = void 0;
class RelationsOption {
    setOption(query, profile) {
        if (!this.isAuthorized(profile)) {
            delete query.source['with'];
            return;
        }
        if (!query.source['with']) {
            return;
        }
        const relations = query.source['with'].split(',');
        query.target['relations'] = relations;
        delete query.source['with'];
    }
    isAuthorized(profile) {
        if (profile.options.relations.status === 'disabled') {
            return false;
        }
        return true;
    }
}
exports.RelationsOption = RelationsOption;
//# sourceMappingURL=relations-option.js.map