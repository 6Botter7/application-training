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

        this.buttonActions = Object.freeze({
            generate: this.generate.bind(this),
            display: this.display.bind(this),
            clear: this.clear.bind(this)
        });
    }

    async connectedCallback() {
        this.shadowRoot.innerHTML = await fetch(this.html).then(result => result.text());

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

        return records;
    }

    async generate() {
        this.records = await this.createRecords(21);
    }

    async display(records) {
        const list = this.shadowRoot.querySelector("#list-items");
        const fragment = document.createDocumentFragment();

        for(let i = 0; i < this.records.length; i++) {
            const item = document.createElement("li");
            item.textContent = this.records[i].name;
            fragment.appendChild(item);
        }

        list.appendChild(fragment);
    }

    async clear() {
        this.records = [];
        const list = this.shadowRoot.querySelector("#list-items");
        list.innerHTML = "";
    }

    async click(event) {

        const buttonId = event.target.id;

        if (this.buttonActions[buttonId]) {
            await this.buttonActions[buttonId]();
        }
    }

}

customElements.define("list-component", ListComponent);