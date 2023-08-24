const tabs = document.querySelector(`.tabs`);
const tabButtons = tabs.querySelectorAll(`[role=tab]`);
const tabPanels = tabs.querySelectorAll(`[role=tabpanel]`);

function handleTabClick(event) {
    tabPanels.forEach(function(panel) {
        panel.hidden = true;
    })
    tabButtons.forEach(function(tab) {
        tab.ariaSelected = false;
    })
    event.currentTarget.ariaSelected = true;
    const id = event.currentTarget.id;
    const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    tabPanel.hidden = false;
}

tabButtons.forEach(function(button) {
    button.addEventListener(`click`, handleTabClick);
})
