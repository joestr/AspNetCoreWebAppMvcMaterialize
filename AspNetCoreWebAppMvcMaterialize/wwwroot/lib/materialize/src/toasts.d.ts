/// <reference types="node" />
import { BaseOptions } from "./component";
export interface ToastOptions extends BaseOptions {
    /**
     * The content of the Toast.
     * @default ""
     */
    text: string;
    /**
     * Element Id for the tooltip.
     * @default ""
     */
    toastId?: string;
    /**
     * Length in ms the Toast stays before dismissal.
     * @default 4000
     */
    displayLength: number;
    /**
     * Transition in duration in milliseconds.
     * @default 300
     */
    inDuration: number;
    /**
     * Transition out duration in milliseconds.
     * @default 375
     */
    outDuration: number;
    /**
     * Classes to be added to the toast element.
     * @default ""
     */
    classes: string;
    /**
     * Callback function called when toast is dismissed.
     * @default null
     */
    completeCallback: () => void;
    /**
     * The percentage of the toast's width it takes fora drag
     * to dismiss a Toast.
     * @default 0.8
     */
    activationPercent: number;
}
export declare class Toast {
    /** The toast element. */
    el: HTMLElement;
    /**
     * The remaining amount of time in ms that the toast
     * will stay before dismissal.
     */
    timeRemaining: number;
    /**
     * Describes the current pan state of the Toast.
     */
    panning: boolean;
    options: ToastOptions;
    message: string;
    counterInterval: NodeJS.Timeout;
    wasSwiped: boolean;
    startingXPos: number;
    xPos: number;
    time: number;
    deltaX: number;
    velocityX: number;
    static _toasts: Toast[];
    static _container: any;
    static _draggedToast: Toast;
    constructor(options: Partial<ToastOptions>);
    static get defaults(): ToastOptions;
    static getInstance(el: HTMLElement): Toast;
    static _createContainer(): void;
    static _removeContainer(): void;
    static _onDragStart(e: TouchEvent | MouseEvent): void;
    static _onDragMove(e: TouchEvent | MouseEvent): void;
    static _onDragEnd(): void;
    static _xPos(e: TouchEvent | MouseEvent): number;
    /**
     * dismiss all toasts.
     */
    static dismissAll(): void;
    _createToast(): HTMLElement;
    _animateIn(): void;
    /**
     * Create setInterval which automatically removes toast when timeRemaining >= 0
     * has been reached.
     */
    _setTimer(): void;
    /**
     * Dismiss toast with animation.
     */
    dismiss(): void;
}
//# sourceMappingURL=toasts.d.ts.map