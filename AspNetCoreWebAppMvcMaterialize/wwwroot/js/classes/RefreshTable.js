class RefreshTable {

    identifier = "";
    refreshEntriesPath = "";
    contentElementId = "";
    footerElementId = "";
    searchTermInputElementId = "";
    perPageItemCountMaterializeSelectObject = "";
    page = -1;

    constructor(identifier, page, refreshEntriesPath, contentElementId, footerElementId, searchTermInputElementId, perPageItemCountMaterializeSelectObject) {
        this.identifier = identifier;
        this.page = page;
        this.refreshEntriesPath = refreshEntriesPath;
        this.contentElementId = contentElementId;
        this.footerElementId = footerElementId;
        this.searchTermInputElementId = searchTermInputElementId;
        this.perPageItemCountMaterializeSelectObject = perPageItemCountMaterializeSelectObject;
    }

    refresh() {
        let refreshTableContentElement = document.getElementById(this.contentElementId);
        let refreshTableFooterElement = document.getElementById(this.footerElementId);
        let refreshTableSearchElement = document.getElementById(this.searchTermInputElementId);

        let url = new URL(this.refreshEntriesPath, window.location.origin);

        /* Get a possible entered search term */
        let searchTermValue = refreshTableSearchElement.value;
        if (searchTermValue != null) {
            url.searchParams.append(this.identifier + "_searchTerm", refreshTableSearchElement.value);

            let windowUrl = new URL(window.location);
            windowUrl.searchParams.set(this.identifier + "_searchTerm", searchTermValue);
            history.pushState(null, '', windowUrl);
        }

        /* Get a possible selected per page item count */
        let perPageItemCountSelectedValues =
            this.perPageItemCountMaterializeSelectObject.getSelectedValues();
        if (Array.isArray(perPageItemCountSelectedValues) && perPageItemCountSelectedValues.length > 0) {
            url.searchParams.append(this.identifier + "_perPageItemCount", perPageItemCountSelectedValues[0]);

            let windowUrl = new URL(window.location);
            windowUrl.searchParams.set(this.identifier + "_perPageItemCount", perPageItemCountSelectedValues[0]);
            history.pushState(null, '', windowUrl);
        }

        /* Get a possible page */
        if (this.page != null) {
            url.searchParams.append(this.identifier + "_page", this.page);

            let windowUrl = new URL(window.location);
            windowUrl.searchParams.set(this.identifier + "_page", this.page);
            history.pushState(null, '', windowUrl);
        }

        fetch(url).then(
            (response) => {
                if (!response.ok) {
                    return;
                }

                /* Convert response to text (for HTML) */
                response.text().then((string) => {
                    /* Create new template element and set the response content it */
                    let template = document.createElement("template");
                    template.innerHTML = string;

                    /* Replace the table with the new one */
                    let templateContentTable = template.content.getElementById(this.contentElementId);
                    refreshTableContentElement.replaceWith(templateContentTable);

                    /* Replace the footer with the new one */
                    let templateFooterTable = template.content.getElementById(this.footerElementId);
                    refreshTableFooterElement.replaceWith(templateFooterTable);
                });
            },
            (rejected) => {
            }
        );
    }

    toPage(page) {
        this.page = page;
        this.refresh();
    }
}