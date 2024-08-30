import { Edges } from './edges';
import { Bounding } from './bounding';
/**
 * Class with utilitary functions for global usage.
 */
export declare class Utils {
    /** Specifies wether tab is pressed or not. */
    static tabPressed: boolean;
    /** Specifies wether there is a key pressed. */
    static keyDown: boolean;
    /**
     * Key maps.
     */
    static keys: {
        TAB: string[];
        ENTER: string[];
        ESC: string[];
        BACKSPACE: string[];
        ARROW_UP: string[];
        ARROW_DOWN: string[];
        ARROW_LEFT: string[];
        ARROW_RIGHT: string[];
        DELETE: string[];
    };
    /**
     * Detects when a key is pressed.
     * @param e Event instance.
     */
    static docHandleKeydown(e: KeyboardEvent): void;
    /**
     * Detects when a key is released.
     * @param e Event instance.
     */
    static docHandleKeyup(e: KeyboardEvent): void;
    /**
     * Detects when document is focused.
     * @param e Event instance.
     */
    static docHandleFocus(e: FocusEvent): void;
    /**
     * Detects when document is not focused.
     * @param e Event instance.
     */
    static docHandleBlur(e: FocusEvent): void;
    /**
     * Generates a unique string identifier.
     */
    static guid(): string;
    /**
     * Checks for exceeded edges
     * @param container Container element.
     * @param bounding Bounding rect.
     * @param offset Element offset.
     */
    static checkWithinContainer(container: HTMLElement, bounding: Bounding, offset: number): Edges;
    /**
     * Checks if element can be aligned in multiple directions.
     * @param el Element to be inspected.
     * @param container Container element.
     * @param bounding Bounding rect.
     * @param offset Element offset.
     */
    static checkPossibleAlignments(el: HTMLElement, container: HTMLElement, bounding: Bounding, offset: number): {
        top: boolean;
        right: boolean;
        bottom: boolean;
        left: boolean;
        spaceOnTop: number;
        spaceOnRight: number;
        spaceOnBottom: number;
        spaceOnLeft: number;
    };
    /**
     * Retrieves target element id from trigger.
     * @param trigger Trigger element.
     */
    static getIdFromTrigger(trigger: HTMLElement): string;
    /**
     * Retrieves document scroll postion from top.
     */
    static getDocumentScrollTop(): number;
    /**
     * Retrieves document scroll postion from left.
     */
    static getDocumentScrollLeft(): number;
    /**
     * Fires the given function after a certain ammount of time.
     * @param func Function to be fired.
     * @param wait Wait time.
     * @param options Additional options.
     */
    static throttle(func: Function, wait: number, options?: Partial<{
        leading: boolean;
        trailing: boolean;
    }>): () => any;
}
//# sourceMappingURL=utils.d.ts.map