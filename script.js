// Đảm bảo DOM đã được tải hoàn toàn
document.addEventListener("DOMContentLoaded", function() {
    // Lấy tất cả các thẻ dự án
    const projectCards = document.querySelectorAll('.project-card');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeButton = document.querySelector('.close-button');

    // Thêm sự kiện click cho từng thẻ dự án
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            // Lấy hình ảnh từ thẻ dự án
            const imgSrc = this.querySelector('img').src;
            lightboxImg.src = imgSrc; // Cập nhật hình ảnh trong lightbox
            lightbox.style.display = 'flex'; // Hiển thị lightbox
        });
    });

    // Đóng lightbox khi nhấn vào nút đóng
    closeButton.addEventListener('click', function() {
        lightbox.style.display = 'none'; // Ẩn lightbox
    });

    // Đóng lightbox khi nhấn ra ngoài hình ảnh
    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none'; // Ẩn lightbox
        }
    });

    // Hiệu ứng cho thanh tiến độ
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const width = bar.style.width; // Lấy chiều rộng từ style
        bar.style.width = '0'; // Đặt chiều rộng ban đầu là 0
        setTimeout(() => {
            bar.style.width = width; // Tăng chiều rộng đến giá trị ban đầu
        }, 100); // Thời gian trễ để tạo hiệu ứng
    });

    // Hiệu ứng cho các nút liên hệ
    const contactButtons = document.querySelectorAll('.contact-button');
    contactButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)'; // Tăng kích thước khi hover
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)'; // Trở về kích thước ban đầu
        });
    });
});
