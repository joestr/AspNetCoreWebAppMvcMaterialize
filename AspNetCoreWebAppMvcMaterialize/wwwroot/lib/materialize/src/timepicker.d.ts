/// <reference types="node" />
import { Modal } from "./modal";
import { Component, BaseOptions, InitElements, MElement, I18nOptions } from "./component";
export type Views = "hours" | "minutes";
export interface TimepickerOptions extends BaseOptions {
    /**
     * Dial radius.
     * @default 135
     */
    dialRadius: number;
    /**
     * Outer radius.
     * @default 105
     */
    outerRadius: number;
    /**
     * Inner radius.
     * @default 70
     */
    innerRadius: number;
    /**
     * Tick radius.
     * @default 20
     */
    tickRadius: number;
    /**
     * Duration of the transition from/to the hours/minutes view.
     * @default 350
     */
    duration: number;
    /**
     * Specify a DOM element OR selector for a DOM element to render
     * the time picker in, by default it will be placed before the input.
     * @default null
     */
    container: HTMLElement | string | null;
    /**
     * Show the clear button in the Timepicker.
     * @default false
     */
    showClearBtn: boolean;
    /**
     * Default time to set on the timepicker 'now' or '13:14'.
     * @default 'now';
     */
    defaultTime: string;
    /**
     * Millisecond offset from the defaultTime.
     * @default 0
     */
    fromNow: number;
    /**
     * Internationalization options.
     */
    i18n: Partial<I18nOptions>;
    /**
     * Automatically close picker when minute is selected.
     * @default false;
     */
    autoClose: boolean;
    /**
     * Use 12 hour AM/PM clock instead of 24 hour clock.
     * @default true
     */
    twelveHour: boolean;
    /**
     * Vibrate device when dragging clock hand.
     * @default true
     */
    vibrate: boolean;
    /**
     * Callback function called before modal is opened.
     * @default null
     */
    onOpenStart: (el: HTMLElement) => void;
    /**
     * Callback function called after modal is opened.
     * @default null
     */
    onOpenEnd: (el: HTMLElement) => void;
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
     * Callback function when a time is selected.
     * @default null
     */
    onSelect: (hour: number, minute: number) => void;
}
type Point = {
    x: number;
    y: number;
};
export declare class Timepicker extends Component<TimepickerOptions> {
    el: HTMLInputElement;
    id: string;
    modal: Modal;
    modalEl: HTMLElement;
    plate: any;
    digitalClock: any;
    inputHours: HTMLInputElement;
    inputMinutes: HTMLInputElement;
    x0: number;
    y0: number;
    moved: boolean;
    dx: number;
    dy: number;
    /**
     * Current view on the timepicker.
     * @default 'hours'
     */
    currentView: Views;
    hand: any;
    minutesView: HTMLElement;
    hours: any;
    minutes: any;
    /** The selected time. */
    time: string;
    /**
     * If the time is AM or PM on twelve-hour clock.
     * @default 'PM'
     */
    amOrPm: "AM" | "PM";
    static _template: any;
    /** If the picker is open. */
    isOpen: boolean;
    /** Vibrate device when dragging clock hand. */
    vibrate: "vibrate" | "webkitVibrate" | null;
    _canvas: HTMLElement;
    hoursView: any;
    spanAmPm: HTMLSpanElement;
    footer: HTMLElement;
    private _amBtn;
    private _pmBtn;
    bg: Element;
    bearing: Element;
    g: Element;
    toggleViewTimer: string | number | NodeJS.Timeout;
    canvas: any;
    vibrateTimer: any;
    constructor(el: HTMLInputElement, options: Partial<TimepickerOptions>);
    static get defaults(): TimepickerOptions;
    /**
     * Initializes instance of Timepicker.
     * @param el HTML element.
     * @param options Component options.
     */
    static init(el: HTMLInputElement, options?: Partial<TimepickerOptions>): Timepicker;
    /**
     * Initializes instances of Timepicker.
     * @param els HTML elements.
     * @param options Component options.
     */
    static init(els: InitElements<HTMLInputElement | MElement>, options?: Partial<TimepickerOptions>): Timepicker[];
    static _addLeadingZero(num: number): string;
    static _createSVGEl(name: string): Element;
    static _Pos(e: TouchEvent | MouseEvent): Point;
    static getInstance(el: HTMLElement): Timepicker;
    destroy(): void;
    _setupEventHandlers(): void;
    _removeEventHandlers(): void;
    _handleInputClick: () => void;
    _handleInputKeydown: (e: KeyboardEvent) => void;
    _handleTimeInputEnterKey: (e: KeyboardEvent) => void;
    _handleClockClickStart: (e: any) => void;
    _handleDocumentClickMove: (e: any) => void;
    _handleDocumentClickEnd: (e: any) => void;
    _insertHTMLIntoDOM(): void;
    _setupModal(): void;
    _setupVariables(): void;
    private _createButton;
    _pickerSetup(): void;
    _clockSetup(): void;
    _buildSVGClock(): void;
    _buildHoursView(): void;
    _buildMinutesView(): void;
    _handleAmPmClick: (e: any) => void;
    _updateAmPmView(): void;
    _updateTimeFromInput(): void;
    /**
     * Show hours or minutes view on timepicker.
     * @param view The name of the view you want to switch to, 'hours' or 'minutes'.
     */
    showView: (view: Views, delay?: number) => void;
    resetClock(delay: any): void;
    _inputFromTextField: () => void;
    drawClockFromTimeInput(value: any, isHours: any): void;
    setHand(x: any, y: any, roundBy5?: boolean): void;
    /**
     * Open timepicker.
     */
    open: () => void;
    /**
     * Close timepicker.
     */
    close: () => void;
    done: (e?: any, clearValue?: any) => void;
    clear: () => void;
}
export {};
//# sourceMappingURL=timepicker.d.ts.map