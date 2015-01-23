/**
 * @overview
 *
 * @version
 * @author xuyuanxiang
 * @date 15/1/23
 * ------------------
 * @overview
 * @version
 * @modifier
 * @date
 * ------------------
 */
angular.module('helloWorld', []).factory('helloWorldService', function () {
    var name;
    return {
        setName: function (val) {
            name = val;
        },
        getName: function () {
            return name;
        }
    }
});