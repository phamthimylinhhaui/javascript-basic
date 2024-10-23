// Overview
// - Sync
// - Async
// - Nỗi đau
// - Lý thuyết và cách hoạt động
// - Thực hành ví dụ

// sync/async
setTimeout(() => {
    console.log(1)}, 100)
console.log(2)
// 2 1 callback gop phan biet ham có thao tác bất đồng bộ khi nào đã được thực hiện

// 1 số phương thức asyn: setTimeout, setInterval, fetch, xmlHTTP, đọc file ..
