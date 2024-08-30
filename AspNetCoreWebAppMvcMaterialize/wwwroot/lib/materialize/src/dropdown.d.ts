/// <reference types="node" />
import { Component, BaseOptions, InitElements, MElement, Openable } from "./component";
export interface DropdownOptions extends BaseOptions {
    /**
     * Defines the edge the menu is aligned to.
     * @default 'left'
     */
    alignment: 'left' | 'right';
    /**
     * If true, automatically focus dropdown el for keyboard.
     * @default true
     */
    autoFocus: boolean;
    /**
     * If true, constrainWidth to the size of the dropdown activator.
     * @default true
     */
    constrainWidth: boolean;
    /**
     * Provide an element that will be the bounding container of the dropdown.
     * @default null
     */
    container: Element;
    /**
     * If false, the dropdown will show below the trigger.
     * @default true
     */
    coverTrigger: boolean;
    /**
     * If true, close dropdown on item click.
     * @default true
     */
    closeOnClick: boolean;
    /**
     * If true, the dropdown will open on hover.
     * @default false
     */
    hover: boolean;
    /**
     * The duration of the transition enter in milliseconds.
     * @default 150
     */
    inDuration: number;
    /**
     * The duration of the transition out in milliseconds.
     * @default 250
     */
    outDuration: number;
    /**
     * Function called when dropdown starts entering.
     * @default null
     */
    onOpenStart: (el: HTMLElement) => void;
    /**
     * Function called when dropdown finishes entering.
     * @default null
     */
    onOpenEnd: (el: HTMLElement) => void;
    /**
     * Function called when dropdown starts exiting.
     * @default null
     */
    onCloseStart: (el: HTMLElement) => void;
    /**
     * Function called when dropdown finishes exiting.
     * @default null
     */
    onCloseEnd: (el: HTMLElement) => void;
    /**
     * Function called when item is clicked.
     * @default null
     */
    onItemClick: (el: HTMLLIElement) => void;
}
export declare class Dropdown extends Component<DropdownOptions> implements Openable {
    static _dropdowns: Dropdown[];
    /** ID of the dropdown element. */
    id: string;
    /** The DOM element of the dropdown. */
    dropdownEl: HTMLElement;
    /** If the dropdown is open. */
    isOpen: boolean;
    /** If the dropdown content is scrollable. */
    isScrollable: boolean;
    isTouchMoving: boolean;
    /** The index of the item focused. */
    focusedIndex: number;
    filterQuery: any[];
    filterTimeout: NodeJS.Timeout;
    constructor(el: HTMLElement, options: Partial<DropdownOptions>);
    static get defaults(): DropdownOptions;
    /**
     * Initializes instance of Dropdown.
     * @param el HTML element.
     * @param options Component options.
     */
    static init(el: HTMLElement, options?: Partial<DropdownOptions>): Dropdown;
    /**
     * Initializes instances of Dropdown.
     * @param els HTML elements.
     * @param options Component options.
     */
    static init(els: InitElements<MElement>, options?: Partial<DropdownOptions>): Dropdown[];
    static getInstance(el: HTMLElement): Dropdown;
    destroy(): void;
    _setupEventHandlers(): void;
    _removeEventHandlers(): void;
    _setupTemporaryEventHandlers(): void;
    _removeTemporaryEventHandlers(): void;
    _handleClick: (e: MouseEvent) => void;
    _handleMouseEnter: () => void;
    _handleMouseLeave: (e: MouseEvent) => void;
    _handleDocumentClick: (e: MouseEvent) => void;
    _handleTriggerKeydown: (e: KeyboardEvent) => void;
    _handleDocumentTouchmove: (e: TouchEvent) => void;
    _handleDropdownClick: (e: MouseEvent) => void;
    _handleDropdownKeydown: (e: KeyboardEvent) => void;
    _handleWindowResize: (e: Event) => void;
    _resetFilterQuery: () => void;
    _resetDropdownStyles(): void;
    _moveDropdown(containerEl?: HTMLElement): void;
    _makeDropdownFocusable(): void;
    _focusFocusedItem(): void;
    _getDropdownPosition(closestOverflowParent: HTMLElement): {
        x: number;
        y: number;
        verticalAlignment: string;
        horizontalAlignment: "left" | "right";
        height: number;
        width: number;
    };
    _animateIn(): void;
    _animateOut(): void;
    private _getClosestAncestor;
    _placeDropdown(): void;
    /**
     * Open dropdown.
     */
    open: () => void;
    /**
     * Close dropdown.
     */
    close: () => void;
    /**
     * While dropdown is open, you can recalculate its dimensions if its contents have changed.
     */
    recalculateDimensions: () => void;
}
//# sourceMappingURL=dropdown.d.ts.map