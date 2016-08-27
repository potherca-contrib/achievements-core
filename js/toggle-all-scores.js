/**
 * When clicked, the button added by this module toggles the visibility of the 
 * scores of all of the profiles in the list by toggling a class on the container. 
 */
;(function (root, p_sContainerSelector, p_sToggleClass) {
    'use strict';

    var oContainer, oButton;

    function toggleScores (){
        var bView, sBackgroundColor, sColor, sText;

        bView = oContainer.classList.toggle(p_sToggleClass);

        if (bView) {
            sBackgroundColor = 'rgb(255,255,255)';
            sColor = 'rgb( 250, 182, 9)';
            sText = 'Score always visible';
        } else {
            sBackgroundColor = 'rgb( 250, 182, 9)';
            sColor = 'rgb(255,255,255)';
            sText = 'Score visible on hover';
        }
        oButton.textContent = sText;
        oButton.style.backgroundColor = sBackgroundColor;
        oButton.style.color = sColor;
    }
    
    oContainer = document.querySelector(p_sContainerSelector);
    oButton = document.createElement('div');
    oButton.textContent = 'Score visible on hover';
    oButton.setAttribute('style', '\
        position: fixed;\
        top: 0;\
        right: 0;\
        margin: 0.5em;\
        padding: 0.25em 0.5em;\
        border-radius: 1em;\
        color: rgb(255,255,255);\
        border: 0.1em solid rgb( 250, 182, 9);\
        background-color: rgb( 250, 182, 9);\
        cursor: pointer;\
    ');
    oContainer.appendChild(oButton);

    oButton.addEventListener('click', toggleScores);
}(window, '.profile-list', 'show-all-scores'))
/*EOF*/