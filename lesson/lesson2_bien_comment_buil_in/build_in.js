// Giới thiệu 1 số build-in
/**
 * - alert
 * - console: log lỗi
 * - confirm(message): xn lại yes no thì làm gì
 * - prompt(): hiện hộp thoại nhập dl vào
 * - set timeout: xet time mà function sẽ thực hiện (chạy function 1 lần)
 * - set interval: xet time mà function sẽ thực hiện (sau 1 khoảng lại chạy lại)
 * mở rộng: Math.random() random ra chuỗi thời gian bất kỳ
 */
console.log('hello world');
confirm('Do you really want to delete?');
prompt('enter name:');
setTimeout(function () {
    alert('helo day la lam set timeout');
}, 10000);

setInterval(function () {
    console.log('helo day la lam set timeout');
}, 5000);