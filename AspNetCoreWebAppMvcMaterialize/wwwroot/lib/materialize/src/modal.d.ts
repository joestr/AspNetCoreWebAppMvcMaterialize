import { Component, BaseOptions, InitElements, MElement } from "./component";
export interface ModalOptions extends BaseOptions {
    /**
     * Opacity of the modal overlay.
     * @default 0.5
     */
    opacity: number;
    /**
     * Transition in duration in milliseconds.
     * @default 250
     */
    inDuration: number;
    /**
     * Transition out duration in milliseconds.
     * @default 250
     */
    outDuration: number;
    /**
     * Prevent page from scrolling while modal is open.
     * @default true
     */
    preventScrolling: boolean;
    /**
     * Callback function called before modal is opened.
     * @default null
     */
    onOpenStart: (this: Modal, el: HTMLElement) => void;
    /**
     * Callback function called after modal is opened.
     * @default null
     */
    onOpenEnd: (this: Modal, el: HTMLElement) => void;
    /**
     * Callback function called before modal is closed.
     * @default null
     */
    onCloseStart: (el: HTMLElement) => void;
    /**
     * Callback function called after modal is closed.
     * @default null
     */
    onCloseEnd: (el: HTMLElement) => void;
    /**
     * Allow modal to be dismissed by keyboard or overlay click.
     * @default true
     */
    dismissible: boolean;
    /**
     * Starting top offset.
     * @default '4%'
     */
    startingTop: string;
    /**
     * Ending top offset.
     * @default '10%'
     */
    endingTop: string;
}
export declare class Modal extends Component<ModalOptions> {
    static _modalsOpen: number;
    static _count: number;
    /**
     * ID of the modal element.
     */
    id: string;
    /**
     * If the modal is open.
     */
    isOpen: boolean;
    private _openingTrigger;
    private _overlay;
    private _nthModalOpened;
    constructor(el: HTMLElement, options: Partial<ModalOptions>);
    static get defaults(): {
        opacity: number;
        inDuration: number;
        outDuration: number;
        onOpenStart: any;
        onOpenEnd: any;
        onCloseStart: any;
        onCloseEnd: any;
        preventScrolling: boolean;
        dismissible: boolean;
        startingTop: string;
        endingTop: string;
    };
    /**
     * Initializes instance of Modal.
     * @param el HTML element.
     * @param options Component options.
     */
    static init(el: HTMLElement, options?: Partial<ModalOptions>): Modal;
    /**
     * Initializes instances of Modal.
     * @param els HTML elements.
     * @param options Component options.
     */
    static init(els: InitElements<MElement>, options?: Partial<ModalOptions>): Modal[];
    static getInstance(el: HTMLElement): Modal;
    destroy(): void;
    _setupEventHandlers(): void;
    _removeEventHandlers(): void;
    _handleTriggerClick: (e: MouseEvent) => void;
    _handleOverlayClick: () => void;
    _handleModalCloseClick: (e: MouseEvent) => void;
    _handleKeydown: (e: KeyboardEvent) => void;
    _handleFocus: (e: FocusEvent) => void;
    _animateIn(): void;
    _animateOut(): void;
    /**
     * Open modal.
     */
    open: (trigger?: HTMLElement) => Modal;
    /**
     * Close modal.
     */
    close: () => this;
}
//# sourceMappingURL=modal.d.ts.map