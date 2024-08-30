/// <reference types="node" />
import { Component, BaseOptions, InitElements, MElement } from "./component";
export interface CarouselOptions extends BaseOptions {
    /**
     * Transition duration in milliseconds.
     * @default 200
     */
    duration: number;
    /**
     * Perspective zoom. If 0, all items are the same size.
     * @default -100
     */
    dist: number;
    /**
     * Set the spacing of the center item.
     * @default 0
     */
    shift: number;
    /**
     * Set the padding between non center items.
     * @default 0
     */
    padding: number;
    /**
     * Set the number of visible items.
     * @default 5
     */
    numVisible: number;
    /**
     * Make the carousel a full width slider like the second example.
     * @default false
     */
    fullWidth: boolean;
    /**
     * Set to true to show indicators.
     * @default false
     */
    indicators: boolean;
    /**
     * Don't wrap around and cycle through items.
     * @default false
     */
    noWrap: boolean;
    /**
     * Callback for when a new slide is cycled to.
     * @default null
     */
    onCycleTo: (current: Element, dragged: boolean) => void;
}
export declare class Carousel extends Component<CarouselOptions> {
    hasMultipleSlides: boolean;
    showIndicators: boolean;
    noWrap: boolean;
    /** If the carousel is being clicked or tapped. */
    pressed: boolean;
    /** If the carousel is currently being dragged. */
    dragged: boolean;
    offset: number;
    target: number;
    images: HTMLElement[];
    itemWidth: any;
    itemHeight: any;
    dim: number;
    _indicators: any;
    count: number;
    xform: string;
    verticalDragged: boolean;
    reference: any;
    referenceY: any;
    velocity: number;
    frame: number;
    timestamp: number;
    ticker: string | number | NodeJS.Timeout;
    amplitude: number;
    /** The index of the center carousel item. */
    center: number;
    imageHeight: any;
    scrollingTimeout: any;
    oneTimeCallback: any;
    constructor(el: HTMLElement, options: Partial<CarouselOptions>);
    static get defaults(): CarouselOptions;
    /**
     * Initializes instance of Carousel.
     * @param el HTML element.
     * @param options Component options.
     */
    static init(el: HTMLElement, options?: Partial<CarouselOptions>): Carousel;
    /**
     * Initializes instances of Carousel.
     * @param els HTML elements.
     * @param options Component options.
     */
    static init(els: InitElements<MElement>, options?: Partial<CarouselOptions>): Carousel[];
    static getInstance(el: HTMLElement): Carousel;
    destroy(): void;
    _setupEventHandlers(): void;
    _removeEventHandlers(): void;
    _handleThrottledResize: () => void;
    _handleCarouselTap: (e: MouseEvent | TouchEvent) => void;
    _handleCarouselDrag: (e: MouseEvent | TouchEvent) => boolean;
    _handleCarouselRelease: (e: MouseEvent | TouchEvent) => boolean;
    _handleCarouselClick: (e: MouseEvent | TouchEvent) => boolean;
    _handleIndicatorClick: (e: Event) => void;
    _handleResize: () => void;
    _setCarouselHeight(imageOnly?: boolean): void;
    _xpos(e: MouseEvent | TouchEvent): number;
    _ypos(e: MouseEvent | TouchEvent): number;
    _wrap(x: number): any;
    _track: () => void;
    _autoScroll: () => void;
    _scroll(x?: number): void;
    _updateItemStyle(el: HTMLElement, opacity: number, zIndex: number, transform: string): void;
    _cycleTo(n: number, callback?: CarouselOptions["onCycleTo"]): void;
    /**
     * Move carousel to next slide or go forward a given amount of slides.
     * @param n How many times the carousel slides.
     */
    next(n?: number): void;
    /**
     * Move carousel to previous slide or go back a given amount of slides.
     * @param n How many times the carousel slides.
     */
    prev(n?: number): void;
    /**
     * Move carousel to nth slide.
     * @param n Index of slide.
     * @param callback "onCycleTo" optional callback.
     */
    set(n: number, callback?: CarouselOptions["onCycleTo"]): void;
}
//# sourceMappingURL=carousel.d.ts.map