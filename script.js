document.querySelector('#hamburguer-title-menu')
    .addEventListener('click', () => {
        const cont_links = document.querySelectorAll('.cont-menu ul li');
        const links_menu = document.querySelectorAll('.link_menu');
        document.querySelector('.cont-menu').classList.toggle('disabled_cont');
        document.querySelector('.cont-preople-footer').classList.toggle('disable');
        document.querySelector('.logo-title-menu').classList.toggle('disable');
        
        for(let y = 0; y < cont_links.length; y++){
            cont_links[y].classList.toggle('align_icons_links')
        }

        for (let i = 0; i < links_menu.length; i++){
        links_menu[i].classList.toggle('disable')
        }
    })