export class ListComponent extends HTMLElement {
    get html() {
        return import.meta.url.replace(".js", ".html");
    }

    get shadowDom() {
        return true;
    }

    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    async connectedCallback() {
        this.shadowRoot.innerHTML = await fetch(this.html).then(result => result.text());
        console.log("List connected");

        this.clickHandler = this.click.bind(this);
        const buttons = this.shadowRoot.querySelectorAll("#footer button");
        buttons.forEach(button => {
            button.addEventListener("click", this.clickHandler);
        });

        this.records = []
    }

    async disconnectedCallback() {
        console.log("List disconnected");

        const buttons = this.shadowRoot.querySelectorAll("#footer button");
        buttons.forEach(button => {
            button.removeEventListener("click", this.clickHandler);
        });
        this.clickHandler = null;
    }

    async createRecords(numberOfRecords) {
        const records = [];
        for (let i = 0; i < numberOfRecords; i++) {
            records.push({id: i, name: `Record ${i}`});
        }
        console.log(records);

        return records;
    }

    /**
     * @method displayList - will display the list of records based on the name property of the list of records
     * @param records {[object]}
     * @return {Promise<void>}
     */
    async displayList(records) {
        const list = this.shadowRoot.querySelector("#list-items");
        const fragment = document.createDocumentFragment();

        for(let i = 0; i < records.length; i++) {
            const item = document.createElement("li");
            item.textContent = records[i].name;
            fragment.appendChild(item);
        }

        list.appendChild(fragment);
    }

    async click(event) {
        console.log("click");

        if (event.target.id === "generate") {
            this.records = await this.createRecords(21);
            alert(`Generated ${this.records.length} records`);
        }

        if (event.target.id === "display") {
            if (this.records.length === 0) {
                alert("No records to display");
                return;
            }
            await this.displayList(this.records);
        }

        if (event.target.id === "clear") {
            this.records = [];
            const list = this.shadowRoot.querySelector("#list-items");
            alert("List cleared");
            list.innerHTML = "";
        }
    }

}

customElements.define("list-component", ListComponent);