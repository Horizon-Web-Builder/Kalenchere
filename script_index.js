//Ce site à été écrit par Horizon Web Builder © 2025 Horizon Web Builder.

document.getElementById("menu-toggle").addEventListener("click", function () {
    this.classList.toggle("active");
    document.getElementById("nav-links").classList.toggle("active");
    
    if (this.classList.contains("active")) {
        this.innerHTML = "<strong>X</strong>";
    } else {
        this.innerHTML = "<strong>☰</strong>";
    }
});
