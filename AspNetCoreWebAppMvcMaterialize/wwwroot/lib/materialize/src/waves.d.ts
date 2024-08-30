type RGBColor = {
    r: number;
    g: number;
    b: number;
};
type Position = {
    x: number;
    y: number;
};
export declare class Waves {
    private static _offset;
    static renderWaveEffect(targetElement: HTMLElement, position?: Position | null, color?: RGBColor | null): void;
    static Init(): void;
}
export {};
//# sourceMappingURL=waves.d.ts.map