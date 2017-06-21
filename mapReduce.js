var Reduce = (function () {
    function Reduce() {
    }
    Reduce.prototype.test = function () {
        var strings = ["Est", "festus", "clabulare,", "cesaris", "Fidelis", "diatrias", "ducunt", "ad", "calceus", "Est", "festus", "clabulare", "Est", "festus", "clabulare,", "cesaris", "Fidelis", "diatrias", "ducunt", "ad", "calceus", "Est", "festus", "clabulare,", "Hercle,", "nuclear", "vexatum", "iacere", "fidelis"];
        var result = {};
        strings.reduce(function (result, word) {
            result[word] = result[word] ? result[word] + 1 : 1;
            return result;
        }, result);
    };
    return Reduce;
}());
