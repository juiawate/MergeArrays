
describe('Testing for merging of sorted arrays', function () {


    it('Should return sorted arrays', function () {
        var arr = mergeArraysBinary([1,3,5,6],[2,4,7,8]);
        expect(arr).toEqual([1,2,3,4,5,6,7,8]);
    });

    it('Should return sorted arrays', function () {
        var arr = mergeArraysBinary([1,2,3],[2,4,7,8]);
        expect(arr).toEqual([1,2,2,3,4,7,8]);
    });

    it('Should return sorted arrays', function () {
        var arr = mergeArraysBinary([1,2,3,4],[5,6,7,8]);
        expect(arr).toEqual([1,2,3,4,5,6,7,8]);
    });

    it('Should return sorted arrays', function () {
        var arr = mergeArraysBinary([5,6,7,8],[1,2,3,4]);
        expect(arr).toEqual([1,2,3,4,5,6,7,8]);
    });

    it('Should return sorted arrays', function () {
        var arr = mergeArraysBinary([5,6,7,8],[1,2]);
        expect(arr).toEqual([1,2,5,6,7,8]);
    });

});