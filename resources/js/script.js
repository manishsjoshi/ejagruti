// Simple script for the layout page
console.log('Layout page loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');

    const treeView = document.querySelector('.tree-view');
    if (treeView) {
        // Make all top-level sections collapsed by default
        const topLevelLis = treeView.querySelectorAll(':scope > li');
        topLevelLis.forEach(li => {
            if (li.querySelector('ul')) {
                li.classList.add('collapsed');
            }
        });

        // Handle all clicks on treeview
        treeView.addEventListener('click', function(event) {
            const link = event.target.closest('a[data-pdf]');
            const li = event.target.closest('li');
            
            // If a link is clicked, load the PDF
            if (link) {
                event.preventDefault();
                const pdfFile = link.getAttribute('data-pdf');
                console.log('Loading PDF:', pdfFile);
                loadPDF(pdfFile);
                return;
            }
            
            // If a top-level section header is clicked (and not a link), toggle collapse
            if (li && li.querySelector('ul') && Array.from(treeView.children).includes(li)) {
                console.log('Toggling collapse for:', li.textContent.split('\n')[0].trim());
                li.classList.toggle('collapsed');
            }
        });
    }
});


function loadPDF(pdfFile) {
    const bottomRight = document.getElementById('bottom_right');
    if (bottomRight) {
        bottomRight.innerHTML = `<iframe src="resources/docs/${pdfFile}" width="100%" height="100%" frameborder="0"></iframe>`;
    }
}

function loadSetup() {
    document.getElementById('right').innerHTML = '<iframe src="resources/docs/setup.pdf" width="100%" height="100%" frameborder="0"></iframe>';
}

function loadExtensions() {
    document.getElementById('right').innerHTML = '<iframe src="resources/docs/AddExtensions.pdf" width="100%" height="100%" frameborder="0"></iframe>';
}