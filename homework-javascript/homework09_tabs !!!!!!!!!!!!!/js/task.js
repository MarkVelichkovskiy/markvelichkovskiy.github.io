'use strict';

let tabs = document.querySelectorAll('.tabs li');

tabs.forEach(function(tab, index){
    tab.addEventListener('click', function(){
        let currentTabData = document.querySelector('.tab-content[data-tab-content="' + this.dataset.tabTrigger + '"]');

        document.querySelector('.tabs-content li.is-open').classList.remove('is-open');
        document.querySelector('.tabs li.active').classList.remove('active');
        currentTabData.classList.add('is-open');
        this.classList.add('active');
    });
});