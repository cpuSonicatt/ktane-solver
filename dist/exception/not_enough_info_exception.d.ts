import { BombInfo } from "../common/bomb_info";
export declare class NotEnoughInfoException extends Error {
    required: BombInfo[];
    constructor(m: string, s: BombInfo[]);
}
