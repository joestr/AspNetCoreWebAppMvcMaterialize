import { Component, BaseOptions, InitElements, MElement } from "./component";
export interface PushpinOptions extends BaseOptions {
    /**
     * The distance in pixels from the top of the page where
     * the element becomes fixed.
     * @default 0
     */
    top: number;
    /**
     * The distance in pixels from the top of the page where
     * the elements stops being fixed.
     * @default Infinity
     */
    bottom: number;
    /**
     * The offset from the top the element will be fixed at.
     * @default 0
     */
    offset: number;
    /**
     * Callback function called when pushpin position changes.
     * You are provided with a position string.
     * @default null
     */
    onPositionChange: (position: "pinned" | "pin-top" | "pin-bottom") => void;
}
export declare class Pushpin extends Component<PushpinOptions> {
    static _pushpins: any[];
    originalOffset: any;
    constructor(el: HTMLElement, options: Partial<PushpinOptions>);
    static get defaults(): PushpinOptions;
    /**
     * Initializes instance of Pushpin.
     * @param el HTML element.
     * @param options Component options.
     */
    static init(el: HTMLElement, options?: Partial<PushpinOptions>): Pushpin;
    /**
     * Initializes instances of Pushpin.
     * @param els HTML elements.
     * @param options Component options.
     */
    static init(els: InitElements<MElement>, options?: Partial<PushpinOptions>): Pushpin[];
    static getInstance(el: HTMLElement): Pushpin;
    destroy(): void;
    static _updateElements(): void;
    _setupEventHandlers(): void;
    _removeEventHandlers(): void;
    _updatePosition(): void;
    _removePinClasses(): void;
}
//# sourceMappingURL=pushpin.d.ts.map