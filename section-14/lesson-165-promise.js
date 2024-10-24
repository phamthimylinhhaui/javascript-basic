// Overview
// - Sync
// - Async
// - Nỗi đau
// - Lý thuyết và cách hoạt động
// - Thực hành ví dụ

// sync/async
setTimeout(() => {
    console.log(1)
}, 100)
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

// concept: cách sử dụng
// dùng promise thông qua đối tượng Promise contructor của js

// 1 promise khi thực thi sẽ có 3 trạng thái
//  - pending (đang thực hiện và executor không trả về resolve hay reject)
//  - fulfilled: (resolve)
//  - reject: (reject)

const promise = new Promise(
    // func executor: được thực hiện luôn
    function (resolve, reject) {
    //   trong này sẽ thực hiện logic để có thể trả ra resolve(value) hoặc reject(value)
    //     resolve(['value'])
        resolve('message error')
    });

promise.then(function (result) {
    console.log('executor goi den resolve:', result)
})
    .catch(function (err) {
        console.log('executor goi den reject:', err)
    })
    .finally(function () {
        console.log('executor goi den resolve hoac reject')
    })

