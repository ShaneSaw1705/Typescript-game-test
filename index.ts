import * as r from 'raylib'
import { entity } from './classes/entity'

const screenWidth = 900
const screenHeight = 450
r.SetConfigFlags(r.FLAG_WINDOW_RESIZABLE)
r.InitWindow(screenWidth, screenHeight, "test typescript game")
r.SetTargetFPS(60)

const player: entity = new entity('test', 5)

while (!r.WindowShouldClose()) {
  player.movement()
  r.BeginDrawing();
  r.ClearBackground(r.GRAY)
  player.render()
  r.EndDrawing()
}
r.CloseWindow()   
