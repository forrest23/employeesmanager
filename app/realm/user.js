'use strict';

import Realm from 'realm';

class User extends Realm.Object {}
User.schema = {
    name: 'User',
    properties: {
        name: 'string',
        userNo: 'string',
        gesture:'string',
    },
};

export default new Realm({schema: [User]});