export type TTrainCharacteristics = {
    speed: number;
    force: number;
    engineAmperage: number;
}
export type TTrain = {
    name: string;
    description: string;
    characteristics: TTrainCharacteristics[];
}