const menuBurger = document.getElementById('btn-burger');
const elementAsideMenu = document.getElementById('aside-menu');
menuBurger.addEventListener('click', () => {
    menuBurger.setAttribute("class", "image");
    elementAsideMenu.innerHTML = `
        <aside onmouseleave="closeMenu()" class="container-fluid">
            <div class="row">
                <div class="col-md-2 sidebar">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link active aside-a-style" href="/">Home</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link aside-a-style" href="#">Sobre</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link aside-a-style" href="#">Projetos ECO</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link aside-a-style" href="#">Orçamentos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link aside-a-style" href="#">Serviços</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link aside-a-style" href="#">Contato</a>
                        </li>
                    </ul>
                </div>      
            </div>
        </aside>
        `
});

function closeMenu() {
    elementAsideMenu.innerHTML = "";
}


