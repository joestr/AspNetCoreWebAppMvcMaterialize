import { Component, BaseOptions, InitElements, MElement, Openable } from "./component";
export interface FloatingActionButtonOptions extends BaseOptions {
    /**
     * Direction FAB menu opens.
     * @default "top"
     */
    direction: "top" | "right" | "bottom" | "left";
    /**
     * true: FAB menu appears on hover, false: FAB menu appears on click.
     * @default true
     */
    hoverEnabled: boolean;
    /**
     * Enable transit the FAB into a toolbar on click.
     * @default false
     */
    toolbarEnabled: boolean;
}
export declare class FloatingActionButton extends Component<FloatingActionButtonOptions> implements Openable {
    /**
     * Describes open/close state of FAB.
     */
    isOpen: boolean;
    private _anchor;
    private _menu;
    private _floatingBtns;
    private _floatingBtnsReverse;
    offsetY: number;
    offsetX: number;
    btnBottom: number;
    btnLeft: number;
    btnWidth: number;
    constructor(el: HTMLElement, options: Partial<FloatingActionButtonOptions>);
    static get defaults(): FloatingActionButtonOptions;
    /**
     * Initializes instance of FloatingActionButton.
     * @param el HTML element.
     * @param options Component options.
     */
    static init(el: HTMLElement, options?: Partial<FloatingActionButtonOptions>): FloatingActionButton;
    /**
     * Initializes instances of FloatingActionButton.
     * @param els HTML elements.
     * @param options Component options.
     */
    static init(els: InitElements<MElement>, options?: Partial<FloatingActionButtonOptions>): FloatingActionButton[];
    static getInstance(el: HTMLElement): FloatingActionButton;
    destroy(): void;
    _setupEventHandlers(): void;
    _removeEventHandlers(): void;
    _handleFABClick: () => void;
    _handleDocumentClick: (e: MouseEvent) => void;
    /**
     * Open FAB.
     */
    open: () => void;
    /**
     * Close FAB.
     */
    close: () => void;
    _animateInFAB(): void;
    _animateOutFAB(): void;
    _animateInToolbar(): void;
}
//# sourceMappingURL=buttons.d.ts.map