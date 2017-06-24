class Reduce {
    test() {
        let strings = ["Est", "festus", "clabulare,", "cesaris", "Fidelis", "diatrias", "ducunt", "ad", "calceus", "Est", "festus", "clabulare", "Est", "festus", "clabulare,", "cesaris", "Fidelis", "diatrias", "ducunt", "ad", "calceus", "Est", "festus", "clabulare,", "Hercle,", "nuclear", "vexatum", "iacere", "fidelis"];
        let result = {};
        strings.reduce((result, word) => {
            result[word] = result[word] ? result[word] + 1 : 1;
            return result;
        }, result);
    }
}
