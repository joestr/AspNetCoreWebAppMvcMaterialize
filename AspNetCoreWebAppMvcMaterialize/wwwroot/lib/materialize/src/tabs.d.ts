import { Component, BaseOptions, InitElements, MElement } from "./component";
export interface TabsOptions extends BaseOptions {
    /**
     * Transition duration in milliseconds.
     * @default 300
     */
    duration: number;
    /**
     * Callback for when a new tab content is shown.
     * @default null
     */
    onShow: (newContent: Element) => void;
    /**
     * Set to true to enable swipeable tabs.
     * This also uses the responsiveThreshold option.
     * @default false
     */
    swipeable: boolean;
    /**
     * The maximum width of the screen, in pixels,
     * where the swipeable functionality initializes.
     * @default infinity
     */
    responsiveThreshold: number;
}
export declare class Tabs extends Component<TabsOptions> {
    _tabLinks: NodeListOf<HTMLAnchorElement>;
    _index: number;
    _indicator: HTMLLIElement;
    _tabWidth: number;
    _tabsWidth: number;
    _tabsCarousel: any;
    _activeTabLink: any;
    _content: any;
    constructor(el: HTMLElement, options: Partial<TabsOptions>);
    static get defaults(): TabsOptions;
    /**
     * Initializes instance of Tabs.
     * @param el HTML element.
     * @param options Component options.
     */
    static init(el: HTMLElement, options?: Partial<TabsOptions>): Tabs;
    /**
     * Initializes instances of Tabs.
     * @param els HTML elements.
     * @param options Component options.
     */
    static init(els: InitElements<MElement>, options?: Partial<TabsOptions>): Tabs[];
    static getInstance(el: HTMLElement): Tabs;
    destroy(): void;
    /**
     * The index of tab that is currently shown.
     */
    get index(): number;
    _setupEventHandlers(): void;
    _removeEventHandlers(): void;
    _handleWindowResize: () => void;
    _handleTabClick: (e: MouseEvent) => void;
    _createIndicator(): void;
    _setupActiveTabLink(): void;
    _setupSwipeableTabs(): void;
    _teardownSwipeableTabs(): void;
    _setupNormalTabs(): void;
    _teardownNormalTabs(): void;
    _setTabsAndTabWidth(): void;
    _calcRightPos(el: any): number;
    _calcLeftPos(el: any): number;
    /**
     * Recalculate tab indicator position. This is useful when
     * the indicator position is not correct.
     */
    updateTabIndicator(): void;
    _animateIndicator(prevIndex: any): void;
    /**
     * Show tab content that corresponds to the tab with the id.
     * @param tabId The id of the tab that you want to switch to.
     */
    select(tabId: string): void;
}
//# sourceMappingURL=tabs.d.ts.map