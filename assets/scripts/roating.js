const filterArea = document.querySelector(".filter");
const printFileNamesBtn = filterArea.querySelector(".print-fileNames-btn");
const printPublicPagesBtn = filterArea.querySelector(".print-public-pages-btn");

const fileNames = [
    "index.html",
    "styles.css",
    "script.js",
    "about.html",
    "contact.html",
    "home.html",
    "blog-post-1.html",
    "blog-post-2.html",
    "services.html",
    "portfolio.html",
    "projects.html",
    "gallery.html",
    "faq.html",
    "terms.html",
    "privacy-policy.html",
];

const publicPages = fileNames.filter((fileName) => {
    return fileName.endsWith(".html");
});

printFileNamesBtn.addEventListener("click", () => {
    console.dir(fileNames);
});

printPublicPagesBtn.addEventListener("click", () => {
    console.dir(publicPages);
});
