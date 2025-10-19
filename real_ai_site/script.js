// 当页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    // 获取所有 section 和导航链接
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    // 设置 Intersection Observer 选项
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.4
    };

    // 观察各个版块的可见性来高亮当前导航链接
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});