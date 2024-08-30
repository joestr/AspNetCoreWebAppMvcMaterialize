import { Component, BaseOptions, InitElements, MElement } from "./component";
export interface ParallaxOptions extends BaseOptions {
    /**
     * The minimum width of the screen, in pixels, where the parallax functionality starts working.
     * @default 0
     */
    responsiveThreshold: number;
}
export declare class Parallax extends Component<ParallaxOptions> {
    private _enabled;
    private _img;
    static _parallaxes: Parallax[];
    static _handleScrollThrottled: () => any;
    static _handleWindowResizeThrottled: () => any;
    constructor(el: HTMLElement, options: Partial<ParallaxOptions>);
    static get defaults(): ParallaxOptions;
    /**
     * Initializes instance of Parallax.
     * @param el HTML element.
     * @param options Component options.
     */
    static init(el: HTMLElement, options?: Partial<ParallaxOptions>): Parallax;
    /**
     * Initializes instances of Parallax.
     * @param els HTML elements.
     * @param options Component options.
     */
    static init(els: InitElements<MElement>, options?: Partial<ParallaxOptions>): Parallax[];
    static getInstance(el: HTMLElement): Parallax;
    destroy(): void;
    static _handleScroll(): void;
    static _handleWindowResize(): void;
    _setupEventHandlers(): void;
    _removeEventHandlers(): void;
    _setupStyles(): void;
    _handleImageLoad: () => void;
    private _offset;
    _updateParallax(): void;
}
//# sourceMappingURL=parallax.d.ts.map