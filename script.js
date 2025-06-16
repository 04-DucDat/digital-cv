// Cuộn mượt mà khi nhấp vào các liên kết trong navbar
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Ngăn chặn hành động mặc định
        const targetId = this.getAttribute('href'); // Lấy ID của phần mục tiêu
        const targetElement = document.querySelector(targetId); // Tìm phần mục tiêu
        // Cuộn mượt mà đến phần mục tiêu
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Thông báo khi nhấp vào nút "Quay lại trang chủ"
document.querySelector('.back-home-btn').addEventListener('click', function() {
    alert('Bạn đang quay lại trang chủ!');
});