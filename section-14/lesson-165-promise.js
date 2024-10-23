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

// -------------- pain ------------
// callback hell: dữ liệu bị rằng buộc sau phụ thuộc vào trước
// pyramid dom

setTimeout(() => {
    console.log('viec 1');

    setTimeout(() => {
        console.log('viec 2')

        setTimeout(() => {
            console.log('viec 3')
        }, 1000)
    }, 1000)
}, 1000)// callback hell

// concept
