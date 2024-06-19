document.getElementById('image').addEventListener('click', function() {
    if (this.classList.contains('border-red')) {
        this.classList.remove('border-red');
    } else if (!this.classList.contains('border-red')) {
        this.classList.add('border-red');
    } else {
        // Este else es un lugar para manejar cualquier caso no previsto, aunque aquí no se usará.
    }
});
