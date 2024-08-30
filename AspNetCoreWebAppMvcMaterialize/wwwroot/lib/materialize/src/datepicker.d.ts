import { Modal } from "./modal";
import { BaseOptions, Component, InitElements, MElement, I18nOptions } from "./component";
export interface DateI18nOptions extends I18nOptions {
    previousMonth: string;
    nextMonth: string;
    months: string[];
    monthsShort: string[];
    weekdays: string[];
    weekdaysShort: string[];
    weekdaysAbbrev: string[];
}
export interface DatepickerOptions extends BaseOptions {
    /**
     * Automatically close picker when date is selected.
     * @default false
     */
    autoClose: boolean;
    /**
     * The date output format for the input field value
     * or a function taking the date and outputting the
     * formatted date string.
     * @default 'mmm dd, yyyy'
     */
    format: string | ((d: Date) => string);
    /**
     * Used to create date object from current input string.
     * @default null
     */
    parse: ((value: string, format: string) => Date) | null;
    /**
     * The initial date to view when first opened.
     * @default null
     */
    defaultDate: Date | null;
    /**
     * Make the `defaultDate` the initial selected value.
     * @default false
     */
    setDefaultDate: boolean;
    /**
     * Prevent selection of any date on the weekend.
     * @default false
     */
    disableWeekends: boolean;
    /**
     * Custom function to disable certain days.
     * @default null
     */
    disableDayFn: ((day: Date) => boolean) | null;
    /**
     * First day of week (0: Sunday, 1: Monday etc).
     * @default 0
     */
    firstDay: number;
    /**
     * The earliest date that can be selected.
     * @default null
     */
    minDate: Date | null;
    /**
     * The latest date that can be selected.
     * @default null
     */
    maxDate: Date | null;
    /**
     * Number of years either side, or array of upper/lower range.
     * @default 10
     */
    yearRange: number | number[];
    /**
     * Sort year range in reverse order.
     * @default false
     */
    yearRangeReverse: boolean;
    /**
     * Changes Datepicker to RTL.
     * @default false
     */
    isRTL: boolean;
    /**
     * Show month after year in Datepicker title.
     * @default false
     */
    showMonthAfterYear: boolean;
    /**
     * Render days of the calendar grid that fall in the next
     * or previous month.
     * @default false
     */
    showDaysInNextAndPreviousMonths: boolean;
    /**
     * Specify a DOM element OR selector for a DOM element to render
     * the calendar in, by default it will be placed before the input.
     * @default null
     */
    container: HTMLElement | string | null;
    /**
     * Show the clear button in the datepicker.
     * @default false
     */
    showClearBtn: boolean;
    /**
     * Internationalization options.
     */
    i18n: Partial<DateI18nOptions>;
    /**
     * An array of string returned by `Date.toDateString()`,
     * indicating there are events in the specified days.
     * @default []
     */
    events: string[];
    /**
     * Callback function when date is selected,
     * first parameter is the newly selected date.
     * @default null
     */
    onSelect: ((selectedDate: Date) => void) | null;
    /**
     * Callback function when Datepicker is opened.
     * @default null
     */
    onOpen: (() => void) | null;
    /**
     * Callback function when Datepicker is closed.
     * @default null
     */
    onClose: (() => void) | null;
    /**
     * Callback function when Datepicker HTML is refreshed.
     * @default null
     */
    onDraw: (() => void) | null;
    /** Field used for internal calculations DO NOT CHANGE IT */
    minYear?: any;
    /** Field used for internal calculations DO NOT CHANGE IT */
    maxYear?: any;
    /** Field used for internal calculations DO NOT CHANGE IT */
    minMonth?: any;
    /** Field used for internal calculations DO NOT CHANGE IT */
    maxMonth?: any;
    /** Field used for internal calculations DO NOT CHANGE IT */
    startRange?: any;
    /** Field used for internal calculations DO NOT CHANGE IT */
    endRange?: any;
}
export declare class Datepicker extends Component<DatepickerOptions> {
    el: HTMLInputElement;
    id: string;
    /** If the picker is open. */
    isOpen: boolean;
    modal: Modal;
    calendarEl: HTMLElement;
    /** CLEAR button instance. */
    clearBtn: HTMLElement;
    /** DONE button instance */
    doneBtn: HTMLElement;
    cancelBtn: HTMLElement;
    modalEl: HTMLElement;
    yearTextEl: HTMLElement;
    dateTextEl: HTMLElement;
    /** The selected Date. */
    date: Date;
    formats: any;
    calendars: any;
    private _y;
    private _m;
    static _template: string;
    constructor(el: HTMLInputElement, options: Partial<DatepickerOptions>);
    static get defaults(): DatepickerOptions;
    /**
     * Initializes instance of Datepicker.
     * @param el HTML element.
     * @param options Component options.
     */
    static init(el: HTMLInputElement, options?: Partial<DatepickerOptions>): Datepicker;
    /**
     * Initializes instances of Datepicker.
     * @param els HTML elements.
     * @param options Component options.
     */
    static init(els: InitElements<HTMLInputElement | MElement>, options?: Partial<DatepickerOptions>): Datepicker[];
    static _isDate(obj: any): boolean;
    static _isWeekend(date: any): boolean;
    static _setToStartOfDay(date: any): void;
    static _getDaysInMonth(year: any, month: any): number;
    static _isLeapYear(year: any): boolean;
    static _compareDates(a: any, b: any): boolean;
    static getInstance(el: HTMLElement): Datepicker;
    destroy(): void;
    destroySelects(): void;
    _insertHTMLIntoDOM(): void;
    _setupModal(): void;
    /**
     * Gets a string representation of the selected date.
     */
    toString(format?: string | ((d: Date) => string)): string;
    /**
     * Set a date on the datepicker.
     * @param date Date to set on the datepicker.
     * @param preventOnSelect Undocumented as of 5 March 2018.
     */
    setDate(date?: Date | string, preventOnSelect?: boolean): void;
    /**
     * Sets current date as the input value.
     */
    setInputValue(): void;
    _renderDateDisplay(): void;
    /**
     * Change date view to a specific date on the datepicker.
     * @param date Date to show on the datepicker.
     */
    gotoDate(date: Date): void;
    adjustCalendars(): void;
    adjustCalendar(calendar: any): any;
    nextMonth(): void;
    prevMonth(): void;
    render(year: any, month: any, randId: any): string;
    renderDay(opts: any): string;
    renderRow(days: any, isRTL: any, isRowSelected: any): string;
    renderTable(opts: any, data: any, randId: any): string;
    renderHead(opts: any): string;
    renderBody(rows: any): string;
    renderTitle(instance: any, c: any, year: any, month: any, refYear: any, randId: any): string;
    draw(force?: boolean): void;
    _setupEventHandlers(): void;
    _setupVariables(): void;
    _removeEventHandlers(): void;
    _handleInputClick: () => void;
    _handleInputKeydown: (e: KeyboardEvent) => void;
    _handleCalendarClick: (e: any) => void;
    _handleClearClick: () => void;
    _handleMonthChange: (e: any) => void;
    _handleYearChange: (e: any) => void;
    gotoMonth(month: any): void;
    gotoYear(year: any): void;
    _handleInputChange: (e: Event) => void;
    renderDayName(opts: any, day: any, abbr?: boolean): any;
    _finishSelection: () => void;
    /**
     * Open datepicker.
     */
    open: () => this;
    /**
     * Close datepicker.
     */
    close: () => this;
}
//# sourceMappingURL=datepicker.d.ts.map