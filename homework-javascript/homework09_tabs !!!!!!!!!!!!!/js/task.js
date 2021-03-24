// Задание
// Реализовать переключение вкладок (табы) на чистом Javascript.

// Технические требования:

// В папке tabs лежит разметка для вкладок. Нужно, чтобы по нажатию на вкладку отображался конкретный текст для нужной вкладки. 
// При этом остальной текст должен быть скрыт. В комментариях указано, какой текст должен отображаться для какой вкладки.
// Разметку можно менять, добавлять нужные классы, id, атрибуты, теги.
// Нужно предусмотреть, что текст на вкладках может меняться, и что вкладки могут добавляться и удаляться. При этом нужно, 
// чтобы функция, написанная в джаваскрипте, из-за таких правок не переставала работать.

let tab = function(){
    const tabsTitle = document.querySelectorAll('.tabs-title');
    const tabsContent = document.querySelectorAll('.tabs-content-li');
    
    tabsTitle.forEach(el => {
        el.addEventListener('click', (event) => {
            let currentIndex = switchTab(event.target);
            switchContent(currentIndex);
        })
    
    })
    function switchTab(tab){
        tabsTitle.forEach((item, index) => {
            item.classList.remove('active');
            if (item === tab){
                item.classList.add('active');
                 currentIndex = index;
            }
    
        })
        return currentIndex;
    }
    function switchContent(currentIndex){
        tabsContent.forEach((item, index) => {
            item.classList.remove('active');
            if (index === currentIndex){
                item.classList.add('active');
                
            }
        })
    }
}

tab();
