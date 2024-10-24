// content.js
console.log('[erd-ad-remover] extension loaded');

let cnt = 0;
var itv = setInterval(() => {
    // 페이지 로드 후 실행
    console.log('[erd-ad-remover] try to remove ads...');
    const targetElement = document.querySelector('.erd-ads-area');
    if (targetElement && targetElement.style.display !== 'none') {
        targetElement.style.display = 'none';
        document.querySelector('.erd-container').style.width = '100%';
        const canvas = document.getElementById('erdCanvas');
        canvas.width = window.innerWidth - 100;
        clearInterval(itv);
    }
    cnt++;
    if (cnt > 100) {
        clearInterval(itv);
    }
}, 500);