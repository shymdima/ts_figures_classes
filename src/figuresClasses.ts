export interface Figure {
  shape: 'triangle' | 'rectangle' | 'circle';
  color: 'red' | 'green' | 'blue';
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Figure['shape'] = 'triangle';

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (
      this.a + this.b <= this.c ||
      this.a + this.c <= this.b ||
      this.b + this.c <= this.a
    ) {
      throw new Error('not triangle');
    } else if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('not triangle');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Number(area.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Figure['shape'] = 'circle';

  constructor(
    public color: Figure['color'],
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius is 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Figure['shape'] = 'rectangle';

  constructor(
    public color: Figure['color'],
    public width: number,
    public length: number,
  ) {
    if (width <= 0 || length <= 0) {
      throw new Error('cannot 0');
    }
  }

  getArea(): number {
    return Number((this.width * this.length).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
