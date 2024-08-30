import { Component, BaseOptions, InitElements, MElement } from "./component";
export interface ScrollSpyOptions extends BaseOptions {
    /**
     * Throttle of scroll handler.
     * @default 100
     */
    throttle: number;
    /**
     * Offset for centering element when scrolled to.
     * @default 200
     */
    scrollOffset: number;
    /**
     * Class applied to active elements.
     * @default 'active'
     */
    activeClass: string;
    /**
     * Used to find active element.
     * @default id => 'a[href="#' + id + '"]'
     */
    getActiveElement: (id: string) => string;
}
export declare class ScrollSpy extends Component<ScrollSpyOptions> {
    static _elements: ScrollSpy[];
    static _count: number;
    static _increment: number;
    tickId: number;
    id: any;
    static _elementsInView: ScrollSpy[];
    static _visibleElements: any[];
    static _ticks: number;
    constructor(el: HTMLElement, options: Partial<ScrollSpyOptions>);
    static get defaults(): ScrollSpyOptions;
    /**
     * Initializes instance of ScrollSpy.
     * @param el HTML element.
     * @param options Component options.
     */
    static init(el: HTMLElement, options?: Partial<ScrollSpyOptions>): ScrollSpy;
    /**
     * Initializes instances of ScrollSpy.
     * @param els HTML elements.
     * @param options Component options.
     */
    static init(els: InitElements<MElement>, options?: Partial<ScrollSpyOptions>): ScrollSpy[];
    static getInstance(el: HTMLElement): ScrollSpy;
    destroy(): void;
    _setupEventHandlers(): void;
    _removeEventHandlers(): void;
    _handleThrottledResize: () => void;
    _handleTriggerClick: (e: MouseEvent) => void;
    _handleWindowScroll: () => void;
    static _offset(el: any): {
        top: number;
        left: number;
    };
    static _findElements(top: number, right: number, bottom: number, left: number): ScrollSpy[];
    _enter(): void;
    _exit(): void;
}
//# sourceMappingURL=scrollspy.d.ts.map