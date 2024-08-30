import { Dropdown, DropdownOptions } from "./dropdown";
import { Component, BaseOptions, InitElements, MElement } from "./component";
export interface FormSelectOptions extends BaseOptions {
    /**
     * Classes to be added to the select wrapper element.
     * @default ""
     */
    classes: string;
    /**
     * Pass options object to select dropdown initialization.
     * @default {}
     */
    dropdownOptions: Partial<DropdownOptions>;
}
type ValueStruct = {
    el: HTMLOptionElement;
    optionEl: HTMLElement;
};
export declare class FormSelect extends Component<FormSelectOptions> {
    el: HTMLSelectElement;
    /** If this is a multiple select. */
    isMultiple: boolean;
    /**
     * Label associated with the current select element.
     * Is "null", if not detected.
     */
    labelEl: HTMLLabelElement;
    /** Dropdown UL element. */
    dropdownOptions: HTMLUListElement;
    /** Text input that shows current selected option. */
    input: HTMLInputElement;
    /** Instance of the dropdown plugin for this select. */
    dropdown: Dropdown;
    /** The select wrapper element. */
    wrapper: HTMLDivElement;
    selectOptions: (HTMLOptionElement | HTMLOptGroupElement)[];
    private _values;
    constructor(el: HTMLSelectElement, options: FormSelectOptions);
    static get defaults(): FormSelectOptions;
    /**
     * Initializes instance of FormSelect.
     * @param el HTML element.
     * @param options Component options.
     */
    static init(el: HTMLSelectElement, options?: Partial<FormSelectOptions>): FormSelect;
    /**
     * Initializes instances of FormSelect.
     * @param els HTML elements.
     * @param options Component options.
     */
    static init(els: InitElements<HTMLSelectElement | MElement>, options?: Partial<FormSelectOptions>): FormSelect[];
    static getInstance(el: HTMLElement): FormSelect;
    destroy(): void;
    _setupEventHandlers(): void;
    _removeEventHandlers(): void;
    _handleSelectChange: () => void;
    _handleOptionClick: (e: MouseEvent | KeyboardEvent) => void;
    _arraysEqual<T, E>(a: T[], b: (E | T)[]): boolean;
    _selectOptionElement(virtualOption: HTMLElement): void;
    _handleInputClick: () => void;
    _setupDropdown(): void;
    _addOptionToValues(realOption: HTMLOptionElement, virtualOption: HTMLElement): void;
    _removeDropdown(): void;
    _createAndAppendOptionWithIcon(realOption: any, type: string): HTMLLIElement;
    _selectValue(value: ValueStruct): void;
    _deselectValue(value: ValueStruct): void;
    _deselectAll(): void;
    _isValueSelected(value: ValueStruct): boolean;
    _toggleEntryFromArray(value: ValueStruct): void;
    _getSelectedOptions(): HTMLOptionElement[];
    _setValueToInput(): void;
    _setSelectedStates(): void;
    _activateOption(ul: HTMLElement, li: HTMLElement): void;
    getSelectedValues(): string[];
}
export {};
//# sourceMappingURL=select.d.ts.map