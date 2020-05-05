import React from 'react';
import { Button } from 'antd';

/********************
  Draw Circle
********************/
class Circle {
  x: number;
  y: number;
  c: number;
  v: number;
  ctx: number;
  v: Object;
  constructor(x: number, y: number, c: number) {}
  public init(x: number, y: number, c: number) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.v = {
      x: rand(-1, 1),
      y: rand(-1, 1),
    };
  }
}

export default function WFHAnimation() {
  //define parameters
  const splitNum = 16;

  //draw circles
  const rand = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return (
    <div>
      <Button>Stay At home</Button>
      <Button>Reset</Button>
      <div></div>
      <div>
        note: adapted from https://codepen.io/toshiya-marukubo/pen/YzyXKaK
        showcase of HTML canvas
      </div>
    </div>
  );
}
