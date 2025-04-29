// Get the sidebar and bars icon elements
const sidebar = document.getElementById('sidebar');
const barsIcon = document.getElementById('bars');

// Add an event listener to the bars icon to toggle the sidebar
barsIcon.addEventListener('click', () => {
  // Toggle the visibility of the sidebar
  sidebar.classList.toggle('invisible');
});