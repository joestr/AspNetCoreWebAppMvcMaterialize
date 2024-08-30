import { Dropdown, DropdownOptions } from "./dropdown";
import { Component, BaseOptions, InitElements, MElement } from "./component";
export interface AutocompleteData {
    /**
     * A primitive value that can be converted to string.
     * If "text" is not provided, it will also be used as "option text" as well
     */
    id: string | number;
    /**
     * This optional attribute is used as "display value" for the current entry.
     * When provided, it will also be taken into consideration by the standard search function.
     */
    text?: string;
    /**
     * This optional attribute is used to provide a valid image URL to the current option.
     */
    image?: string;
    /**
     * Optional attributes which describes the option.
     */
    description?: string;
}
export interface AutocompleteOptions extends BaseOptions {
    /**
     * Data object defining autocomplete options with
     * optional icon strings.
     */
    data: AutocompleteData[];
    /**
     * Flag which can be set if multiple values can be selected. The Result will be an Array.
     * @default false
     */
    isMultiSelect: boolean;
    /**
     * Callback for when autocompleted.
     */
    onAutocomplete: (entries: AutocompleteData[]) => void;
    /**
     * Minimum number of characters before autocomplete starts.
     * @default 1
     */
    minLength: number;
    /**
     * The height of the Menu which can be set via css-property.
     * @default '300px'
     */
    maxDropDownHeight: string;
    /**
     * Function is called when the input text is altered and data can also be loaded asynchronously.
     * If the results are collected the items in the list can be updated via the function setMenuItems(collectedItems).
     * @param text Searched text.
     * @param autocomplete Current autocomplete instance.
     */
    onSearch: (text: string, autocomplete: Autocomplete) => void;
    /**
     * If true will render the key from each item directly as HTML.
     * User input MUST be properly sanitized first.
     * @default false
     */
    allowUnsafeHTML: boolean;
    /**
     * Pass options object to select dropdown initialization.
     * @default {}
     */
    dropdownOptions: Partial<DropdownOptions>;
}
export declare class Autocomplete extends Component<AutocompleteOptions> {
    el: HTMLInputElement;
    /** If the autocomplete is open. */
    isOpen: boolean;
    /** Number of matching autocomplete options. */
    count: number;
    /** Index of the current selected option. */
    activeIndex: number;
    private oldVal;
    private $active;
    private _mousedown;
    container: HTMLElement;
    /** Instance of the dropdown plugin for this autocomplete. */
    dropdown: Dropdown;
    static _keydown: boolean;
    selectedValues: AutocompleteData[];
    menuItems: AutocompleteData[];
    constructor(el: HTMLInputElement, options: Partial<AutocompleteOptions>);
    static get defaults(): AutocompleteOptions;
    /**
     * Initializes instance of Autocomplete.
     * @param el HTML element.
     * @param options Component options.
     */
    static init(el: HTMLInputElement, options?: Partial<AutocompleteOptions>): Autocomplete;
    /**
     * Initializes instances of Autocomplete.
     * @param els HTML elements.
     * @param options Component options.
     */
    static init(els: InitElements<HTMLInputElement | MElement>, options?: Partial<AutocompleteOptions>): Autocomplete[];
    static getInstance(el: HTMLElement): Autocomplete;
    destroy(): void;
    _setupEventHandlers(): void;
    _removeEventHandlers(): void;
    _setupDropdown(): void;
    _removeDropdown(): void;
    _handleInputBlur: () => void;
    _handleInputKeyupAndFocus: (e: KeyboardEvent) => void;
    _handleInputKeydown: (e: KeyboardEvent) => void;
    _handleInputClick: () => void;
    _handleContainerMousedownAndTouchstart: () => void;
    _handleContainerMouseupAndTouchend: () => void;
    _resetCurrentElementPosition(): void;
    _resetAutocomplete(): void;
    _highlightPartialText(input: string, label: string): string[];
    _createDropdownItem(entry: AutocompleteData): HTMLLIElement;
    _renderDropdown(): void;
    _setStatusLoading(): void;
    _updateSelectedInfo(): void;
    _refreshInputText(): void;
    _triggerChanged(): void;
    /**
     * Show autocomplete.
     */
    open: () => void;
    /**
     * Hide autocomplete.
     */
    close: () => void;
    /**
     * Updates the visible or selectable items shown in the menu.
     * @param menuItems Items to be available.
     */
    setMenuItems(menuItems: AutocompleteData[]): void;
    /**
     * Sets selected values.
     * @param entries
     */
    setValues(entries: AutocompleteData[]): void;
    /**
     * Select a specific autocomplete option via id-property.
     * @param id The id of a data-entry.
     */
    selectOption(id: number | string): void;
}
//# sourceMappingURL=autocomplete.d.ts.map