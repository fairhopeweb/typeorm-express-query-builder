"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderOption = void 0;
class OrderOption {
    setOption(query, profile) {
        if (!this.isAuthorized(profile)) {
            delete query.source['order'];
            return;
        }
        if (!query.source['order']) {
            return;
        }
        const orderFields = query.source['order'].split(',');
        for (const field of orderFields) {
            const orderCriteria = this.getOrderCriteria(field);
            query.target['order'] = Object.assign(Object.assign({}, query.target['order']), { [field.substr(1, field.length)]: orderCriteria });
        }
        delete query.source['order'];
    }
    getOrderCriteria(field) {
        if (field.startsWith('+')) {
            return 'ASC';
        }
        else if (field.startsWith('-')) {
            return 'DESC';
        }
        else {
            throw new Error(`No order set for <${field}>. Prefix with one of these: [+, -]`);
        }
    }
    isAuthorized(profile) {
        if (profile.options.ordering.status === 'disabled') {
            return false;
        }
        return true;
    }
}
exports.OrderOption = OrderOption;
//# sourceMappingURL=order-option.js.map