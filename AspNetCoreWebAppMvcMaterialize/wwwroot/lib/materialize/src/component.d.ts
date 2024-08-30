/**
 * Base options for component initialization.
 */
export interface BaseOptions {
}
export type MElement = HTMLElement | Element;
export type InitElements<T extends MElement> = NodeListOf<T> | HTMLCollectionOf<T>;
type ComponentConstructor<T extends Component<O>, O extends BaseOptions> = {
    new (el: HTMLElement, options: Partial<O>): T;
};
type ComponentType<C extends Component<O>, O extends BaseOptions> = ComponentConstructor<C, O> & typeof Component<O>;
export interface I18nOptions {
    cancel: string;
    clear: string;
    done: string;
}
export interface Openable {
    isOpen: boolean;
    open(): void;
    close(): void;
}
/**
 * Base class implementation for Materialize components.
 */
export declare class Component<O extends BaseOptions> {
    /**
     * The DOM element the plugin was initialized with.
     */
    el: HTMLElement;
    /**
     * The options the instance was initialized with.
     */
    options: O;
    /**
     * Constructs component instance and set everything up.
     */
    constructor(el: HTMLElement, options: Partial<O>, classDef: ComponentType<Component<O>, O>);
    /**
     * Initializes component instance.
     * @param el HTML element.
     * @param options Component options.
     * @param classDef Class definition.
     */
    protected static init<I extends HTMLElement, O extends BaseOptions, C extends Component<O>>(el: I, options: O, classDef: ComponentType<C, O>): C;
    /**
     * Initializes component instances.
     * @param els HTML elements.
     * @param options Component options.
     * @param classDef Class definition.
     */
    protected static init<I extends MElement, O extends BaseOptions, C extends Component<O>>(els: InitElements<I>, options: Partial<O>, classDef: ComponentType<C, O>): C[];
    /**
     * Initializes component instances.
     * @param els HTML elements.
     * @param options Component options.
     * @param classDef Class definition.
     */
    protected static init<I extends MElement, O extends BaseOptions, C extends Component<O>>(els: I | InitElements<I>, options: Partial<O>, classDef: ComponentType<C, O>): C | C[];
    /**
     * @returns default options for component instance.
     */
    static get defaults(): BaseOptions;
    /**
     * Retrieves component instance for the given element.
     * @param el Associated HTML Element.
     */
    static getInstance(el: HTMLElement): Component<BaseOptions>;
    /**
     * Destroy plugin instance and teardown.
     */
    destroy(): void;
}
export {};
//# sourceMappingURL=component.d.ts.map