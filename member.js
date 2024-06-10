function skillsMember() {
  const member = document.querySelector('.member');
  const memberHeader = document.querySelector('.member-header');
  memberHeader.addEventListener('click', () => {
    member.classList.toggle('show-member');
  });
}