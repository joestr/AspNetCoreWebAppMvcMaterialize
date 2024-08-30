import { Component, BaseOptions, InitElements, MElement } from "./component";
export interface CollapsibleOptions extends BaseOptions {
    /**
     * If accordion versus collapsible.
     * @default true
     */
    accordion: boolean;
    /**
     * Transition in duration in milliseconds.
     * @default 300
     */
    inDuration: number;
    /**
     * Transition out duration in milliseconds.
     * @default 300
     */
    outDuration: number;
    /**
     * Callback function called before collapsible is opened.
     * @default null
     */
    onOpenStart: (el: Element) => void;
    /**
     * Callback function called after collapsible is opened.
     * @default null
     */
    onOpenEnd: (el: Element) => void;
    /**
     * Callback function called before collapsible is closed.
     * @default null
     */
    onCloseStart: (el: Element) => void;
    /**
     * Callback function called after collapsible is closed.
     * @default null
     */
    onCloseEnd: (el: Element) => void;
}
export declare class Collapsible extends Component<CollapsibleOptions> {
    private _headers;
    constructor(el: HTMLElement, options: Partial<CollapsibleOptions>);
    static get defaults(): CollapsibleOptions;
    /**
     * Initializes instance of Collapsible.
     * @param el HTML element.
     * @param options Component options.
     */
    static init(el: HTMLElement, options?: Partial<CollapsibleOptions>): Collapsible;
    /**
     * Initializes instances of Collapsible.
     * @param els HTML elements.
     * @param options Component options.
     */
    static init(els: InitElements<MElement>, options?: Partial<CollapsibleOptions>): Collapsible[];
    static getInstance(el: HTMLElement): Collapsible;
    destroy(): void;
    _setupEventHandlers(): void;
    _removeEventHandlers(): void;
    _handleCollapsibleClick: (e: MouseEvent | KeyboardEvent) => void;
    _handleCollapsibleKeydown: (e: KeyboardEvent) => void;
    private _setExpanded;
    _animateIn(index: number): void;
    _animateOut(index: number): void;
    /**
     * Open collapsible section.
     * @param n Nth section to open.
     */
    open: (index: number) => void;
    /**
     * Close collapsible section.
     * @param n Nth section to close.
     */
    close: (index: number) => void;
}
//# sourceMappingURL=collapsible.d.ts.map