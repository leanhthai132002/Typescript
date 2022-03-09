var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log(123123);
var a = 123123;
var showUser = function (user) {
    var thaila = {
        id: 1,
        name: 'ThaiLa',
        birthday: '04/04/1999'
    };
    return __assign(__assign({}, thaila), { id: 2 });
};
showUser({ id: 3, name: 'thaila', birthday: '1/1/1999' });
var show = function (name) {
    var id = 20;
    return id;
};
console.log("Bien a sau khi bien dich", showUser);
