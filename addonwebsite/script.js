// Change the background color of the header when scrolling
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Toggle the visibility of the all addons section
var allAddonsButton = document.querySelector('#all-addons-button');
var allAddonsSection = document.querySelector('.addon-list');
allAddonsButton.addEventListener('click', function() {
    allAddonsSection.classList.toggle('hidden');
});

// Display a confirmation message when downloading an addon
var downloadButtons = document.querySelectorAll('.addon-list a');
downloadButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        var addonName = this.parentNode.querySelector('h3').textContent;
        var confirmationMessage = 'Do you want to download the addon "' + addonName + '"?';
        if (confirm(confirmationMessage)) {
            window.location = this.href;
        }
    });
});
