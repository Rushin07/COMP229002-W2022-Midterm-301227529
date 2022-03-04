// Author name: Rushin Barvadia
// Student Id: 301227529
// WebApp name: COMP229022-W2022-Midterm-302117529
console.log('Goes to the client side.');

if (getTitle == "Movie List") {
    let deleteButtons = document.querySelectorAll('.btn-danger');

    for (button of deleteButtons) {
        button.addEventListener('click', (event) => {
            if (!confirm("Are you sure?")) {
                event.preventDefault();
            }
        });
    }
}