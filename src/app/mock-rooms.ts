import { Room } from './room';

export const ROOMS: Room[] = [
    {
        id: 1,
        description: 'Esta é a sala inicial.',
        doors: [2],
        weapon: 0,
        flashlight: 0,
        map: 0
    },
    {
        id: 2,
        description: 'Esta é a segunda sala. Ela tem duas portas, além da entrada.',
        doors: [1, 3, 4],
        weapon: 0.01,
        flashlight: 0.01,
        map: 0.01
    }
];
