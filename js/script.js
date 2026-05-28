// Đợi DOM tải xong hoàn toàn
document.addEventListener('DOMContentLoaded', () => {
  const btnWelcome = document.getElementById('btn-welcome');
  const welcomeMessage = document.getElementById('welcome-message');

  // Lắng nghe sự kiện click chuột vào button
  btnWelcome.addEventListener('click', () => {
    // Ẩn/hiện dòng thông điệp chào mừng
    if (welcomeMessage.classList.contains('hidden')) {
      welcomeMessage.classList.remove('hidden');
      btnWelcome.textContent = "Ẩn thông điệp";
    } else {
      welcomeMessage.classList.add('hidden');
      btnWelcome.textContent = "Bấm vào đây để xem thông điệp!";
    }
  });
});