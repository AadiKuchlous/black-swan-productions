let all_cards = document.getElementsByClassName("person-card");

// Add animation to info card on hover
for (let card of all_cards) {
  card.addEventListener('mouseenter',
    ((card) => {
      return () => {
        console.log(card.querySelector('.person-info'));

        card.querySelector('.person-info').classList.add('slideup');
      }
    })(card)
  );

  card.addEventListener('mouseleave',
    ((card) => {
      return () => {
        console.log(card.querySelector('.person-info'));

        card.querySelector('.person-info').classList.remove('slideup');
      }
    })(card)
  );

}
