import {step} from "../main";

export let frame: any

export function createFrame(width, height) {
    frame = {width, height, blocks: [], players: {}}
}

export function addPlayer(name, x, y) {
    frame.players[name] = {x, y}
}

export function addBlock(x, y, w, h) {
    frame.blocks.push({x, y, w, h})
}


export function input(...moves) {
    const fixed = moves.map(item => {
        const [player, action] = item.split('_');
        return {player, action}
    })
    frame = step(frame, fixed)
    Object.values(frame.players).forEach((player: any) => {
        delete player.w;
        delete player.h;
    })
}

