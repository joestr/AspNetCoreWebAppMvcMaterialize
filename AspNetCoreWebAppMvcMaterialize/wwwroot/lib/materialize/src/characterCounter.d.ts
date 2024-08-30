import { Component, BaseOptions, InitElements, MElement } from "./component";
export interface CharacterCounterOptions extends BaseOptions {
}
type InputElement = HTMLInputElement | HTMLTextAreaElement;
export declare class CharacterCounter extends Component<{}> {
    el: InputElement;
    /** Stores the reference to the counter HTML element. */
    counterEl: HTMLSpanElement;
    /** Specifies whether the input is valid or not. */
    isInvalid: boolean;
    /** Specifies whether the input text has valid length or not. */
    isValidLength: boolean;
    constructor(el: HTMLInputElement | HTMLTextAreaElement, options: Partial<CharacterCounterOptions>);
    static get defaults(): CharacterCounterOptions;
    /**
     * Initializes instance of CharacterCounter.
     * @param el HTML element.
     * @param options Component options.
     */
    static init(el: InputElement, options?: Partial<CharacterCounterOptions>): CharacterCounter;
    /**
     * Initializes instances of CharacterCounter.
     * @param els HTML elements.
     * @param options Component options.
     */
    static init(els: InitElements<InputElement | MElement>, options?: Partial<CharacterCounterOptions>): CharacterCounter[];
    static getInstance(el: InputElement): CharacterCounter;
    destroy(): void;
    _setupEventHandlers(): void;
    _removeEventHandlers(): void;
    _setupCounter(): void;
    _removeCounter(): void;
    updateCounter: () => void;
    _validateInput(): void;
}
export {};
//# sourceMappingURL=characterCounter.d.ts.map