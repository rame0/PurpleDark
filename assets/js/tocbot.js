import tocbot from "tocbot";

export default function initTocBot() {
    tocbot.init({
        // Where to render the table of contents.
        tocSelector: '.gh-table-of-content',
        // Where to grab the headings to build the table of contents.
        contentSelector: '.gh-content',
        // Which headings to grab inside of the contentSelector element.
        headingSelector: 'h1, h2, h3, h4, h5, h6',
        // Ensure correct positioning
        hasInnerContainers: false,
        // Headings offset between the headings and the top of the document (this is meant for minor adjustments).
        scrollSmoothOffset: -50,
        // Optional callback to change heading labels.
        headingObjectCallback: (x, y) => {

            x.id = x.textContent.replace(" ","------------")
                // replace all non latin or cyrillic characters with dashes
                .replace(/[^a-zA-Z0-9а-яА-Я]/g, '-')
                // clear multiple dashes
                .replace(/-{2,}/ig, '-')
                .toLowerCase();
            y.id = x.id;
            return x
        }
    });
}
