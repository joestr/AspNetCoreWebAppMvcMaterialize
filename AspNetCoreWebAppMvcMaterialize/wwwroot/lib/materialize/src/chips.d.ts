import { Autocomplete, AutocompleteOptions } from "./autocomplete";
import { Component, BaseOptions, InitElements, MElement } from "./component";
export interface ChipData {
    /**
     * Unique identifier.
     */
    id: number | string;
    /**
     * Chip text. If not specified, "id" will be used.
     */
    text?: string;
    /**
     * Chip image (URL).
     */
    image?: string;
}
export interface ChipsOptions extends BaseOptions {
    /**
     * Set the chip data.
     * @default []
     */
    data: ChipData[];
    /**
     * Set first placeholder when there are no tags.
     * @default ""
     */
    placeholder: string;
    /**
     * Set second placeholder when adding additional tags.
     * @default ""
     */
    secondaryPlaceholder: string;
    /**
     * Set autocomplete options.
     * @default {}
     */
    autocompleteOptions: Partial<AutocompleteOptions>;
    /**
     * Toggles abililty to add custom value not in autocomplete list.
     * @default false
     */
    autocompleteOnly: boolean;
    /**
     * Set chips limit.
     * @default Infinity
     */
    limit: number;
    /**
     * Specifies class to be used in "close" button (useful when working with Material Symbols icon set).
     * @default 'material-icons'
     */
    closeIconClass: string;
    /**
     * Callback for chip add.
     * @default null
     */
    onChipAdd: (element: HTMLElement, chip: HTMLElement) => void;
    /**
     * Callback for chip select.
     * @default null
     */
    onChipSelect: (element: HTMLElement, chip: HTMLElement) => void;
    /**
     * Callback for chip delete.
     * @default null
     */
    onChipDelete: (element: HTMLElement, chip: HTMLElement) => void;
}
export declare class Chips extends Component<ChipsOptions> {
    /** Array of the current chips data. */
    chipsData: ChipData[];
    /** If the chips has autocomplete enabled. */
    hasAutocomplete: boolean;
    /** Autocomplete instance, if any. */
    autocomplete: Autocomplete;
    _input: HTMLInputElement;
    _label: any;
    _chips: HTMLElement[];
    static _keydown: boolean;
    private _selectedChip;
    constructor(el: HTMLElement, options: Partial<ChipsOptions>);
    static get defaults(): ChipsOptions;
    /**
     * Initializes instance of Chips.
     * @param el HTML element.
     * @param options Component options.
     */
    static init(el: InitElements<MElement>, options?: Partial<ChipsOptions>): Chips;
    /**
     * Initializes instances of Chips.
     * @param els HTML elements.
     * @param options Component options.
     */
    static init(els: InitElements<MElement>, options?: Partial<ChipsOptions>): Chips[];
    static getInstance(el: HTMLElement): Chips;
    getData(): ChipData[];
    destroy(): void;
    _setupEventHandlers(): void;
    _removeEventHandlers(): void;
    _handleChipClick: (e: MouseEvent) => void;
    static _handleChipsKeydown(e: KeyboardEvent): void;
    static _handleChipsKeyup(e: Event): void;
    static _handleChipsBlur(e: Event): void;
    _handleInputFocus: () => void;
    _handleInputBlur: () => void;
    _handleInputKeydown: (e: KeyboardEvent) => void;
    _renderChip(chip: ChipData): HTMLDivElement;
    _renderChips(): void;
    _setupAutocomplete(): void;
    _setupInput(): void;
    _setupLabel(): void;
    _setPlaceholder(): void;
    _isValidAndNotExist(chip: ChipData): boolean;
    /**
     * Add chip to input.
     * @param chip Chip data object
     */
    addChip(chip: ChipData): void;
    /**
     * Delete nth chip.
     * @param chipIndex  Index of chip
     */
    deleteChip(chipIndex: number): void;
    /**
     * Select nth chip.
     * @param chipIndex Index of chip
     */
    selectChip(chipIndex: number): void;
    static Init(): void;
}
//# sourceMappingURL=chips.d.ts.map