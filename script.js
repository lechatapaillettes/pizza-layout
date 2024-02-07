document.addEventListener('DOMContentLoaded', function() {
    const pricePerItem = 14;
    const priceTag = document.querySelector('.price-tag em');

    document.querySelectorAll('.minus').forEach(function(minusButton) {
        minusButton.addEventListener('click', function() {
            let input = this.parentNode.querySelector('.quantity');
            let count = parseInt(input.value) - 1;
            count = count < 1 ? 1 : count;
            input.value = count;
            input.dispatchEvent(new Event('change'));
            updatePrice(count);
        });
    });

    document.querySelectorAll('.plus').forEach(function(plusButton) {
        plusButton.addEventListener('click', function() {
            let input = this.parentNode.querySelector('.quantity');
            input.value = parseInt(input.value) + 1;
            input.dispatchEvent(new Event('change'));
            updatePrice(parseInt(input.value));
        });
    });

    function updatePrice(quantity) {
        priceTag.textContent = '$' + (pricePerItem * quantity);
    }
});
