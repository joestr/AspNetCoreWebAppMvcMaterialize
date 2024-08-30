import { Component, BaseOptions, InitElements, MElement, Openable } from "./component";
export interface TapTargetOptions extends BaseOptions {
    /**
     * Callback function called when Tap Target is opened.
     * @default null
     */
    onOpen: (origin: HTMLElement) => void;
    /**
     * Callback function called when Tap Target is closed.
     * @default null
     */
    onClose: (origin: HTMLElement) => void;
}
export declare class TapTarget extends Component<TapTargetOptions> implements Openable {
    /**
     * If the tap target is open.
     */
    isOpen: boolean;
    private wrapper;
    private _origin;
    private originEl;
    private waveEl;
    private contentEl;
    constructor(el: HTMLElement, options: Partial<TapTargetOptions>);
    static get defaults(): TapTargetOptions;
    /**
     * Initializes instance of TapTarget.
     * @param el HTML element.
     * @param options Component options.
     */
    static init(el: HTMLElement, options?: Partial<TapTargetOptions>): TapTarget;
    /**
     * Initializes instances of TapTarget.
     * @param els HTML elements.
     * @param options Component options.
     */
    static init(els: InitElements<MElement>, options?: Partial<TapTargetOptions>): TapTarget[];
    static getInstance(el: HTMLElement): TapTarget;
    destroy(): void;
    _setupEventHandlers(): void;
    _removeEventHandlers(): void;
    _handleThrottledResize: () => void;
    _handleTargetClick: () => void;
    _handleOriginClick: () => void;
    _handleResize: () => void;
    _handleDocumentClick: (e: MouseEvent | TouchEvent) => void;
    _setup(): void;
    private _offset;
    _calculatePositioning(): void;
    /**
     * Open Tap Target.
     */
    open: () => void;
    /**
     * Close Tap Target.
     */
    close: () => void;
}
//# sourceMappingURL=tapTarget.d.ts.map