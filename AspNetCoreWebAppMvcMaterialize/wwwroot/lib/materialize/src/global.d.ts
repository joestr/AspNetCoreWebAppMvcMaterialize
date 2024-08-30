import { Autocomplete } from './autocomplete';
import { FloatingActionButton } from './buttons';
import { Carousel } from './carousel';
import { CharacterCounter } from './characterCounter';
import { Chips } from './chips';
import { Collapsible } from './collapsible';
import { Datepicker } from './datepicker';
import { Dropdown } from './dropdown';
import { Forms } from './forms';
import { Materialbox } from './materialbox';
import { Modal } from './modal';
import { Parallax } from './parallax';
import { Pushpin } from './pushpin';
import { ScrollSpy } from './scrollspy';
import { FormSelect } from './select';
import { Sidenav } from './sidenav';
import { Slider } from './slider';
import { Tabs } from './tabs';
import { TapTarget } from './tapTarget';
import { Timepicker } from './timepicker';
import { Toast, ToastOptions } from './toasts';
import { Tooltip } from './tooltip';
import { Waves } from './waves';
import { Range } from './range';
import { Utils } from './utils';
export declare class M {
    static version: string;
    static Autocomplete: typeof Autocomplete;
    static Tabs: typeof Tabs;
    static Carousel: typeof Carousel;
    static Dropdown: typeof Dropdown;
    static FloatingActionButton: typeof FloatingActionButton;
    static Chips: typeof Chips;
    static Collapsible: typeof Collapsible;
    static Datepicker: typeof Datepicker;
    static CharacterCounter: typeof CharacterCounter;
    static Forms: typeof Forms;
    static FormSelect: typeof FormSelect;
    static Modal: typeof Modal;
    static Pushpin: typeof Pushpin;
    static Materialbox: typeof Materialbox;
    static Parallax: typeof Parallax;
    static Slider: typeof Slider;
    static Timepicker: typeof Timepicker;
    /** Creates a toast. */
    static toast: (opt: Partial<ToastOptions>) => Toast;
    static Tooltip: typeof Tooltip;
    static Sidenav: typeof Sidenav;
    static TapTarget: typeof TapTarget;
    static ScrollSpy: typeof ScrollSpy;
    static Range: typeof Range;
    static Waves: typeof Waves;
    static Utils: typeof Utils;
    /**
     * Automatically initialize components.
     * @param context Root element to initialize. Defaults to `document.body`.
     */
    static AutoInit(context?: HTMLElement): void;
}
//# sourceMappingURL=global.d.ts.map