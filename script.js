function generateLottoNumbers() {
    // Clear previous numbers if any
    const numbersContainer = document.getElementById('numbers-container');
    numbersContainer.innerHTML = '';

    // Generate 6 unique random numbers
    const numbers = [];
    while (numbers.length < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1; // Lotto numbers are from 1 to 45
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }

    // Display numbers on the screen with animation
    numbers.forEach(number => {
        const numberElement = document.createElement('div');
        numberElement.classList.add('bg-blue-500', 'text-white', 'font-bold', 'rounded-full', 'text-xl', 'w-12', 'h-12', 'flex', 'items-center', 'justify-center', 'm-2', 'animate-bounceIn');
        numberElement.textContent = number;
        numbersContainer.appendChild(numberElement);
    });

    // Show SweetAlert2 modal
    Swal.fire({
        title: 'Generated Lotto Numbers',
        html: `<div class="flex flex-wrap justify-center">${numbers.map(num => `<div class="bg-blue-500 text-white font-bold rounded-full text-xl w-12 h-12 flex items-center justify-center m-2">${num}</div>`).join('')}</div>`,
        icon: 'success',
        showCloseButton: true,
        confirmButtonText: 'OK'
    });
}

// Event listener for the "Generate Numbers" button
document.getElementById('generate-btn').addEventListener('click', generateLottoNumbers);
