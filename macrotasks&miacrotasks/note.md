1.任务队列
js是单线程，即同一个时间只能做一件事，主要用途是用户交互以及dom操作。单线程要排队，如果前一个任务耗时过长，就会阻塞后续任务。所以此时就出现了同步和异步。二者都需要在主线程中执行。
异步任务需要进入任务队列进行排队
<1>同步任务到主线程上执行，形成一个执行栈
<2>js会将主线程执行栈中的异步任务放进任务队列中排队
<3>一旦主线程中的同步任务执行完后，空闲，才会去执行异步任务

宏任务：macrotasks : setTimeout,setInterval,setImmediate,I/O,UI rendering
微任务：microtasks ： process，,Promise,MutationObserver

nextTick 既可以是宏任务又可以是微任务