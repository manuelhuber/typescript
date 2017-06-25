const fibonacci = (n : number, a = 1, b = 0) => n === 0 ? b : fibonacci(n - 1, a + b, a);

console.log(fibonacci(10));

function teaser() {

  let tens : string[] = [ '10', '10', '10' ];
  console.log(tens.map(parseInt)); // [10, NaN, 2]

  [ '10', '10', '10' ].map(parseInt) // [10, NaN, 2]
}


class Circle {

  public radius : number;

  public get diameter() : number {
    return this.radius * 2;
  }

  constructor(radius : number) {
    this.radius = radius;
  }

}



