import { Component, BaseOptions, InitElements, MElement } from "./component";
export type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';
export interface TooltipOptions extends BaseOptions {
    /**
     * Delay time before tooltip disappears.
     * @default 200
     */
    exitDelay: number;
    /**
     * Delay time before tooltip appears.
     * @default 0
     */
    enterDelay: number;
    /**
     * Element Id for the tooltip.
     * @default ""
     */
    tooltipId?: string;
    /**
     * Text string for the tooltip.
     * @default ""
     */
    text: string;
    /**
     * Set distance tooltip appears away from its activator
     * excluding transitionMovement.
     * @default 5
     */
    margin: number;
    /**
     * Enter transition duration.
     * @default 300
     */
    inDuration: number;
    /**
     * Opacity of the tooltip.
     * @default 1
     */
    opacity: number;
    /**
     * Exit transition duration.
     * @default 250
     */
    outDuration: number;
    /**
     * Set the direction of the tooltip.
     * @default 'bottom'
     */
    position: TooltipPosition;
    /**
     * Amount in px that the tooltip moves during its transition.
     * @default 10
     */
    transitionMovement: number;
}
export declare class Tooltip extends Component<TooltipOptions> {
    /**
     * If tooltip is open.
     */
    isOpen: boolean;
    /**
     * If tooltip is hovered.
     */
    isHovered: boolean;
    /**
     * If tooltip is focused.
     */
    isFocused: boolean;
    tooltipEl: HTMLElement;
    private _exitDelayTimeout;
    private _enterDelayTimeout;
    xMovement: number;
    yMovement: number;
    constructor(el: HTMLElement, options: Partial<TooltipOptions>);
    static get defaults(): TooltipOptions;
    /**
     * Initializes instance of Tooltip.
     * @param el HTML element.
     * @param options Component options.
     */
    static init(el: HTMLElement, options?: Partial<TooltipOptions>): Tooltip;
    /**
     * Initializes instances of Tooltip.
     * @param els HTML elements.
     * @param options Component options.
     */
    static init(els: InitElements<MElement>, options?: Partial<TooltipOptions>): Tooltip[];
    static getInstance(el: HTMLElement): Tooltip;
    destroy(): void;
    _appendTooltipEl(): void;
    _setTooltipContent(tooltipContentEl: HTMLElement): void;
    _updateTooltipContent(): void;
    _setupEventHandlers(): void;
    _removeEventHandlers(): void;
    /**
     * Show tooltip.
     */
    open: (isManual: boolean) => void;
    /**
     * Hide tooltip.
     */
    close: () => void;
    _setExitDelayTimeout(): void;
    _setEnterDelayTimeout(isManual: any): void;
    _positionTooltip(): void;
    _repositionWithinScreen(x: number, y: number, width: number, height: number): {
        x: number;
        y: number;
    };
    _animateIn(): void;
    _animateOut(): void;
    _handleMouseEnter: () => void;
    _handleMouseLeave: () => void;
    _handleFocus: () => void;
    _handleBlur: () => void;
    _getAttributeOptions(): Partial<TooltipOptions>;
}
//# sourceMappingURL=tooltip.d.ts.map