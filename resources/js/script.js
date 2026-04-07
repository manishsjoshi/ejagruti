// Simple script for the layout page
console.log('Layout page loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
});

function loadSetup() {
    document.getElementById('right').innerHTML = '<iframe src="resources/docs/setup.pdf" width="100%" height="100%" frameborder="0"></iframe>';
}

function loadExtensions() {
    document.getElementById('right').innerHTML = '<iframe src="resources/docs/AddExtensions.pdf" width="100%" height="100%" frameborder="0"></iframe>';
}