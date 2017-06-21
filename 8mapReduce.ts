class Reduce {
    public test() : void {
        let strings : string[] = [ "Est", "festus", "clabulare,", "cesaris", "Fidelis", "diatrias", "ducunt", "ad", "calceus", "Est", "festus", "clabulare", "Est", "festus", "clabulare,", "cesaris", "Fidelis", "diatrias", "ducunt", "ad", "calceus", "Est", "festus", "clabulare,", "Hercle,", "nuclear", "vexatum", "iacere", "fidelis" ];
        let result : { [word : string] : number } = {};
        strings.reduce((result, word) => {
            result[ word ] = result[ word ] ? result[ word ] + 1 : 1;
            return result;
        }, result);
    }
}
