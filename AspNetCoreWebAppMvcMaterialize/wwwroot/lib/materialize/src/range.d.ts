import { Component, BaseOptions, InitElements, MElement } from "./component";
export interface RangeOptions extends BaseOptions {
}
export declare class Range extends Component<RangeOptions> {
    el: HTMLInputElement;
    private _mousedown;
    value: HTMLElement;
    thumb: HTMLElement;
    constructor(el: HTMLInputElement, options: Partial<RangeOptions>);
    static get defaults(): RangeOptions;
    /**
     * Initializes instance of Range.
     * @param el HTML element.
     * @param options Component options.
     */
    static init(el: HTMLInputElement, options?: Partial<RangeOptions>): Range;
    /**
     * Initializes instances of Range.
     * @param els HTML elements.
     * @param options Component options.
     */
    static init(els: InitElements<HTMLInputElement | MElement>, options?: Partial<RangeOptions>): Range[];
    static getInstance(el: HTMLInputElement): Range;
    destroy(): void;
    _setupEventHandlers(): void;
    _removeEventHandlers(): void;
    _handleRangeChange: () => void;
    _handleRangeMousedownTouchstart: (e: MouseEvent | TouchEvent) => void;
    _handleRangeInputMousemoveTouchmove: () => void;
    _handleRangeMouseupTouchend: () => void;
    _handleRangeBlurMouseoutTouchleave: () => void;
    _setupThumb(): void;
    _removeThumb(): void;
    _showRangeBubble(): void;
    _calcRangeOffset(): number;
    /**
     * Initializes every range input in the current document.
     */
    static Init(): void;
}
//# sourceMappingURL=range.d.ts.map