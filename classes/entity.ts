import * as rl from 'raylib'

export class entity {
  name: string
  x: number
  y: number
  speed: number

  constructor(name: string, speed: number) {
    this.name = name
    this.speed = speed
    this.x = 10
    this.y = 10
  }

  movement(): void {
    if (rl.IsKeyDown(rl.KEY_W)) {
      this.y -= this.speed
    }
    if (rl.IsKeyDown(rl.KEY_S)) {
      this.y += this.speed
    }
    if (rl.IsKeyDown(rl.KEY_D)) {
      this.x += this.speed
    }
    if (rl.IsKeyDown(rl.KEY_A)) {
      this.x -= this.speed
    }

  }

  render(): void {
    rl.DrawCircle(this.x, this.y, 32, rl.RED)
  }

}
