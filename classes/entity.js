"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.entity = void 0;
const rl = __importStar(require("raylib"));
class entity {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
        this.x = 10;
        this.y = 10;
    }
    movement() {
        if (rl.IsKeyDown(rl.KEY_W)) {
            this.y -= this.speed;
        }
        if (rl.IsKeyDown(rl.KEY_S)) {
            this.y += this.speed;
        }
        if (rl.IsKeyDown(rl.KEY_D)) {
            this.x += this.speed;
        }
        if (rl.IsKeyDown(rl.KEY_A)) {
            this.x -= this.speed;
        }
    }
    render() {
        rl.DrawCircle(this.x, this.y, 32, rl.RED);
    }
}
exports.entity = entity;
