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
describe('hello world service tests', function () {

    var helloWorldService;

    beforeEach(module('helloWorld'));

    beforeEach(inject(function (_helloWorldService_) {
        helloWorldService = _helloWorldService_;
    }));

    it('set name', function () {
        var name = 'test';
        helloWorldService.setName(name);

        expect(helloWorldService.getName()).toEqual(name);
    })

});