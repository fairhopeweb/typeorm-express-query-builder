"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectOption = void 0;
class SelectOption {
    setOption(query, profile) {
        if (!this.isAuthorized(profile)) {
            delete query.source['select'];
            return;
        }
        if (!query.source['select']) {
            return;
        }
        const fields = query.source['select'].split(',');
        query.target['select'] = fields;
        delete query.source['select'];
    }
    isAuthorized(profile) {
        if (profile.options.select.status === 'disabled') {
            return false;
        }
        return true;
    }
}
exports.SelectOption = SelectOption;
//# sourceMappingURL=select-option.js.map