export type TrainCharacteristics = {
    speed: number;
    force: number;
    engineAmperage: number;
}
export type TTrain = {
    name: string;
    description: string;
    characteristics: TrainCharacteristics[];
}