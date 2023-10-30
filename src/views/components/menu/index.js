window.addEventListener('scroll', function () {
    var scroll = window.scrollY
    if (scroll >= 1) {
        document.getElementById('menu').classList.add("ativo")
    } else {
        document.getElementById('menu').classList.remove("ativo")
    }
})

let menuPrincipal = `
<div  class="menu" id="menu">
    <nav class="nav-principal">
        <a href="/">Inicio</a>
        <a href="#/jedi">Jedi</a>
    </nav>

</div>
`

export default menuPrincipal;