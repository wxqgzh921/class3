console.log('script start')
setTimeout(function () {
    new Promise((r) => {
        console.log('111'); r()
    }).then(() => {
        console.log('222')
    })
    console.log('timeout')
}, 0)

new Promise((r) => {
    console.log('1'); r()
}).then(() => {
    console.log('2')
    setTimeout(function () {
        new Promise((r) => {
            console.log('1111'); r()
        }).then(() => {
            console.log('2222')
        })
        console.log('timeout2')
    }, 0)
}).then(() => {
    console.log('3')
})
console.log('script end')


// 先执行同步任务 在执行异步任务，异步分为微任务和宏任务  先执行微任务再执行宏任务   代码自上而下运行

// script start
// 1
// script end 
// 2
// 3
// 111 
// timeout
// 222
// 1111
// timeout2
// 2222
