/// <reference types="node" />
import { Component, BaseOptions, InitElements, MElement } from "./component";
export interface SliderOptions extends BaseOptions {
    /**
     * Set to false to hide slide indicators.
     * @default true
     */
    indicators: boolean;
    /**
     * Set height of slider.
     * @default 400
     */
    height: number;
    /**
     * Set the duration of the transition animation in ms.
     * @default 500
     */
    duration: number;
    /**
     * Set the duration between transitions in ms.
     * @default 6000
     */
    interval: number;
    /**
     * If slider should pause when keyboard focus is received.
     * @default true
     */
    pauseOnFocus: boolean;
    /**
     * If slider should pause when is hovered by a pointer.
     * @default true
     */
    pauseOnHover: boolean;
    /**
     * Optional function used to generate ARIA label to indicators (for accessibility purposes).
     * @param index Current index, starting from "1".
     * @param current A which indicates whether it is the current element or not
     * @returns a string to be used as label indicator.
     * @default null
     */
    indicatorLabelFunc: (index: number, current: boolean) => string;
}
export declare class Slider extends Component<SliderOptions> {
    /** Index of current slide. */
    activeIndex: number;
    interval: string | number | NodeJS.Timeout;
    eventPause: any;
    _slider: HTMLUListElement;
    _slides: HTMLLIElement[];
    _activeSlide: HTMLLIElement;
    _indicators: HTMLLIElement[];
    _hovered: boolean;
    _focused: boolean;
    _focusCurrent: boolean;
    _sliderId: string;
    constructor(el: HTMLElement, options: Partial<SliderOptions>);
    static get defaults(): SliderOptions;
    /**
     * Initializes instance of Slider.
     * @param el HTML element.
     * @param options Component options.
     */
    static init(el: HTMLElement, options?: Partial<SliderOptions>): Slider;
    /**
     * Initializes instances of Slider.
     * @param els HTML elements.
     * @param options Component options.
     */
    static init(els: InitElements<MElement>, options?: Partial<SliderOptions>): Slider[];
    static getInstance(el: HTMLElement): Slider;
    destroy(): void;
    private _setupEventHandlers;
    private _removeEventHandlers;
    private _handleIndicatorClick;
    private _handleAutoPauseHover;
    private _handleAutoPauseFocus;
    private _handleAutoStartHover;
    private _handleAutoStartFocus;
    private _handleInterval;
    private _animateSlide;
    private _setSliderHeight;
    private _setupIndicators;
    private _removeIndicators;
    set(index: number): void;
    _pause(fromEvent: boolean): void;
    /**
     * Pause slider autoslide.
     */
    pause: () => void;
    /**
     * Start slider autoslide.
     */
    start: () => void;
    /**
     * Move to next slider.
     */
    next: () => void;
    /**
     * Move to prev slider.
     */
    prev: () => void;
}
//# sourceMappingURL=slider.d.ts.map