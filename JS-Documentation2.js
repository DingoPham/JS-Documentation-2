/* Có thể tìm danh mục bài tập và danh mục phần bành cách nhấn tổ hợp Ctrl + F và gõ BT/Phần + số danh mục muốn xem */
/* !!! Sử dụng môi trưởng Console của trình duyệt Website hoặc node.js để làm môi trường chạy các ví dụ bên dưới !!! */

/*-------------------------------- Phần 1: Hiểu về ECMAScript(ES) ---------------------------------*/
//  a) ECMAScript
    /*  - ECMAScript (ES) là một tiêu chuẩn cho ngôn ngữ lập trình JavaScript. Nó định nghĩa cú pháp cơ 
        bản và các tính năng cần thiết để thực thi JavaScript trên các trình duyệt web hoặc môi trường 
        thực thi khác như Node.js. 
        - ECMAScript định nghĩa cách JavaScript hoạt động, bao gồm cú pháp, cấu trúc dữ liệu, kiểu dữ 
        liệu, các đối tượng có sẵn, và các quy tắc xử lý của nó.
        - Các phiên bản của ECMAScript được phát hành theo thời gian, mỗi phiên bản có các cải tiến và 
        bổ sung mới.
                VD: Promise là một tính năng mới và chỉ có bắt đầu 
                từ ES6. Với các chuẩn trước ES6 chúng ta phải sử 
                dụng các phương pháp cũ hơn như callback. Nếu 
                cố tình sử dụng, chương trình sẽ lỗi
    */
//  b) Tại sao cần tìm hiểu về ECMAScript?
    /*  - Đảm bảo sự tương thích: Hiểu về phiên bản cụ thể của ECMAScript giúp ta hiểu rõ cú pháp và 
        tính năng của ngôn ngữ JavaScript, giúp đảm bảo rằng mã nguồn JavaScript có thể chạy đúng 
        trên nhiều trình duyệt khác nhau và môi trường thực thi khác nhau
        - Giúp tối ưu hóa mã: hiểu về ES giúp viết mã 
        hiệu quả hơn, tối ưu hóa hiệu suất và sử dụng, 
        tận dụng được tính năng mới của ngôn ngữ.
        => Việc tuân thủ các tiêu chuẩn này giúp đảm bảo chất 
        lượng và tính đồng nhất của mã nguồn JavaScript.
    */
/*-------------------------------- Phần 2: Xử lý bất đồng bộ ---------------------------------*/
    // Đồng bộ(sync) / Bất đồng bộ(async)
        /* Sync là xử lý đồng bộ: tức là chương trình sẽ chạy theo từng bước, xong tác vụ này mới thực 
        hiện tiếp tác vụ tiếp theo. 
            - Ưu điểm: mã chạy theo đúng thứ tự, các tác vụ được xử lý lần lượt, có thể tránh được các lỗi liên 
            quan đến tiến trình.
            - Nhược điểm: các tác vụ phải chờ nhau. Gây tốn bộ nhớ, tốn thời gian chờ làm chậm hoặc treo 
            chương trình…
        * Async là xử lý bất đồng bộ: các tác vụ có thể được chạy song song hoặc không đồng bộ với các 
        tác vụ khác.
            - Ưu điểm: xử lý được nhiều tác vụ cùng lúc, tăng hiệu suất ứng dụng, giúp ứng dụng linh hoạt hơn, tài 
            nguyên được tận dụng tốt hơn
            Nhược điểm: có thể gây khó khăn khi muốn đồng bộ hoá giữa các tác vụ. VD như cần tác vụ này 
            xong thì mới thực hiện tác vụ khác. Trong một số trường hợp có thể khó khăn trong việc xử lý ngoại 
            lệ (VD: callback hell)...
        */
    // JavaScript là ngôn ngữ Single threaded
        /* JavaScript engine chỉ chạy trong một luồng duy nhất (Single threaded) trong quá trình thực thi.
        Điều này có nghĩa là JavaScript chỉ có thể thực hiện một tác vụ tại một thời điểm 
            => Do đó, khi JavaScript đang thực hiện một công việc nào đó, nó không thể đồng thời thực hiện
            các công việc khác.
            VD: Nếu chúng ta cố tình chèn vào một tác vụ bất đồng bộ như gửi yêu cầu HTTP lấy dữ liệu, việc
            này dẫn đến hiện tượng bị blocking tại tác vụ đó, có thể làm chậm/treo giao diện người dùng.
        * JavaScript có thể thực hiện các tác vụ bất đồng bộ (asynchronous tasks) như việc gọi API, tải tài 
        nguyên từ máy chủ, hoặc xử lý các sự kiện như click hoặc timeout mà không làm treo giao diện
        người dùng (blocking). Điều này thường được thực hiện bằng cách sử dụng các hàm callback, 
        promise, hoặc async/await để xử lý                                                                          
        */
    // Bất đồng bộ trong javascript
        /* Là việc thực hiện nhiều công việc cùng một lúc mà không chờ đợi kết quả của từng công việc
        trước khi bắt đầu công việc tiếp theo.
        * Giúp tránh tình trạng chờ đợi lâu khi thực hiện các hoạt động cần thời gian (như gửi yêu cầu lấy
        dữ liệu từ máy chủ, đọc/ ghi file.)
        * Trong Javascript có 3 cách phổ biến để xử lý bất đồng bộ:
            1) Callback Function.
            2) Promise.
            3) Async/Await
                VD: Khi người dùng muốn xóa dữ liệu thì 
                cần hiển thị một dialog xác nhận và chờ
                nhấn xác nhận của người dùng trước 
                khi thực hiện xóa
        */
                // Hiển thị dilog và chờ xác nhận:
                function confirmDelete() {
                    showConfirmDialog(); //--> hiển thị dialog xác nhận.
                    return new Promise(function (resolve, reject) {
                    // Nếu người dùng nhấn [Đồng ý]
                        okButton.addEventListener("click", function () {
                        resolve(); // Đánh dấu Promise đã hoàn thành khi người dùng chọn OK
                        });
                    // Nếu người dùng nhấn [Huỷ]
                        cancelButton.addEventListener("click", function () {
                        reject(); // Reject Promise nếu người dùng chọn Cancel
                        });
                    });
                }
                // Hàm thực hiện thao tác xoá dữ liệu
                function onDeleteData() {
                    // Gọi hàm thực hiện hiển thị thông báo và chờ xác nhận của người dùng:
                    confirmDelete()
                    .then(()=>{
                    // Thực hiện xoá dữ liệu sau khi người dùng xác nhận..
                    //...
                    })
                    .catch(function (error) {
                    console.error(error.message);
                    })
                    .finally(function () {
                    dialog.style.display = "none"; // Ẩn dialog sau khi hoàn thành
                    });
                }

                // VD: Các bước xử lý bất đồng bộ theo một danh sách khách hàng
                /*  B1: Gọi Api thực hiện lấy dữ 
                    liệu khách hàng
                    B2:  Build data hiển thị thông 
                    tin khách hàng lên table như 
                    hình ảnh.
                    B3: . Mặc định chọn set 
                    hightlight dòng đầu tiên 
                    trong danh sách.
                */
                // VD về xử lý bấy đồng bộ
                    // Lấy dữ liệu khách hàng từ api
                    function getCustomers(){
                        let data = fetchData("https://cukcuk.vn/api/v1/customers");
                        return data;
                    }
                    // Tạo table với dữ liệu khách hàng sau khi lấy được 
                    function renderTable(data){
                        //...
                    }
                    // Thực hiện chọn dòng đầu tiên trong table sau khi tạo table
                    function setSelectFirstRecord (){
                        //...
                    }
                    const customers = getCustomers();
                    renderTable(customers);
                    setSelectFirstRecord();
                    /**
                     * Đoạn mã này sẽ không thực hiện theo đúng kết quả mong muốn:
                        ➔ Table sẽ không được tạo do chưa có dữ liệu trả về.
                        ➔ Việc set chọn dòng đầu tiên sẽ không có ý nghĩa.
                     * Nguyên nhân: Đoạn mã trên đã chạy bất đồng bộ
                    (không chờ đợi). Dữ liệu customers cần đợi api trả
                    về kết quả. Nhưng trong đoạn mã này thì hàm
                    getCustomers sẽ không đợi kết quả từ api và trả về
                    dữ liệu về để tạo table, mà mã sẽ tiếp tục chạy.
                     * Giải pháp: xử lý bất đồng bộ cho đoạn mã này.
                    */
                // VD: Code cho các bước trên
                /* Cách 1: xử lý bất đồng bộ bằng callback function */
                    // Gọi hàm load dữ liệu và truyền callback để thực hiện
                    // set lựa chọn dòng đầu tiên trong bảng dữ liệu:
                    this.loadCustomerData(this.setSelectFirstRecord);

                    loadCustomerData(callback) {
                        var xhr = new XMLHttpRequest();
                        const self = this;
                        xhr.open('GET', 'https://cukcuk.vn/api/v1/customers', true);

                        xhr.onload = function(){
                            if (xhr.status >= 200 && xhr.status < 300){
                                const table = document.querySelector("#tblCustomer");
                                const data = JSON.parse(xhr.responseText);
                                self.buildTableData(table, data);
                                callback();
                            } else{
                                console.error("Request failed with status: ", xhr.status);
                            }
                        };
                        xhr.send();
                    }

                    /**
                     * Hàm thực hiện đặt trạng thái chọn dòng đầu tiên trong bảng dữ liệu
                     */
                    setSelectFirstRecord(){
                        const table = document.querySelector("#tblCustomer");
                        table.querySelector("tbody tr")?.classList.add("row--selected");
                    }
                    // Mở rộng: Callback hell 
                    /**
                     * Callback hell, hay còn gọi là "pyramid of doom", là một tình trạng xảy ra khi bạn sử dụng nhiều
                    callback lồng nhau, làm cho mã nguồn trở nên khó đọc và duy trì
                     * Trong ví dụ này, chúng ta có các hàm getUser, getOrders, và getProducts sử dụng callback để xử lý dữ liệu trả về. Mỗi hàm
                    callback lại chứa một hàm callback khác, tạo ra một cấu trúc lồng nhau sâu. Điều này khiến mã trở nên khó đọc, khó hiểu, và dễ gây lỗi.
                     */
                    getUser(userID, function (user){
                        getOrders(user.id, function (orders){
                            getProducts(orders, function (products){
                                displayProducts(products, function(){
                                    //Các bước xử lý sản phẩm
                                });
                            });
                        });
                    });
                /* Cách 2: Xử lý bất đồng bộ bằng Promise  */ 
                /**
                 * Promise là một đối tượng được sử dụng để thực hiện các tác vụ bất đồng bộ và xử lý kết quả sau
                khi hoàn thành  
                 * Promise giúp quản lý và xử lý các tác vụ bất đồng bộ một cách dễ dàng và hiệu quả, đặc biệt khi
                làm việc với các hoạt động như gọi API, thao tác với tập tin, hoặc thực hiện các tác vụ mạng khác
                */

                /** Một Promise có thể ở trong một trong ba trạng thái sau:
                 * Pending: Trạng thái ban đầu khi một Promise được tạo.
                 * Fulfilled: Trạng thái khi Promise hoàn thành thành công.
                 * Rejected: Trạng thái khi Promise gặp lỗi trong quá trình thực hiện
                 => Tránh được `callback hell` - điểm yếu khi sử dụng callback function
                */
                    // VD sử dụng Promise
                    let myPromise = new Promise((resolve, reject) => {
                        // Thực hiện một tác vụ bất đồng bộ
                        let isTaskSuccessful = true;

                        if(isTaskSuccessful){
                            resolve("Task is completed successfully");
                        } else{
                            reject("Task is not completed");
                        }
                    });

                    // Xử lý kết quả của Promise
                    myPromise.then((message) => {
                        console.log("Success: " + message);
                    }).catch((message) => {
                        console.error("Error: " + message);
                    });

                    // VD xử lý bất đồng bộ với Promise
                    // Gọi Promise
                    getCustomersPromise
                    .then((data) => {
                        self.buildTableData(table, data);
                        self.setSelectFirstRecord();
                    })
                    .catch((error) => {
                        console.error(error);
                    });

                    const getCustomersPromise = new Promise((resolvem, reject) => {
                        var xhr = new XMLHttpRequest();
                        xhr.open('GET', 'https://cukcuk.vn/api/v1/customers', true);

                        xhr.onload = function(){
                            // Nếu thành công (status có mã 2XX)
                            if(xhr.status >= 200 && xhr.status < 300){
                                resolve(data);
                            } else {
                                // Nếu có lỗi (thường se có mã 4XX/5XX)
                                reject
                            }
                        };
                        xhr.send();
                    })
                    // Mở rộng: Promise và Fetch Api
                    /**Fecth API là một công cụ xây dựng sẵn cho việc gửi và nhận dữ
                    liệu qua HTTP (có từ ES6).
                     * Sử dụng thay thế cho XMLHttpRequest
                     * Sử dụng Promise để xử lý bất đồng bộ
                     => Sử dụng Fetch API bản chất là sử dụng thay thế XMLHttpRequest kết hợp với Promise. Giúp cú
                    pháp ngắn gọn, dễ dàng và mạnh mẽ hơn
                    */
                   const self = this;
                   const table = document.querySelector("#tblCustomer");
                   fetch('https://cukcuk.vn/api/v1/customers')
                        .then(res => res.json())
                        .then((data) => {
                            self.buildTableData(table, data);
                            setSelectFirstRecord();
                        })
                        .catch((error) => {
                            console.error(error);
                        })
                /* Cách 3: Xử lý bất đồng bộ bằng Async/Await */
                /* async và await là cú pháp được sử dụng để xử lý các hàm bất đồng bộ một cách đồng bộ hơn, làm
                cho việc viết mã xử lý các tác vụ bất đồng bộ trở nên dễ dàng và dễ đọc hơn
                        * async được sử dụng để chỉ định rằng một
                        hàm sẽ trả về một Promise
                        * `await` được sử dụng để đợi cho đến khi
                        một Promise được giải quyết hoặc bị từ chối
                */
                // VD sử dụng async và await
                function resolveAfter2Seconds(){
                    return new Promise(resolve => {
                        setTimeout(() => {
                            resolve('resolved');
                        }, 2000);
                    });
                }
                async function asyncCall(){
                    console.log('calling');
                    let result = await resolveAfter2Seconds();
                    console.log(result);
                    // Tiếp tục xử lý sau khi Promise được giải quyết
                }

                asyncCall();

                // VD: Xử lý bất đồng bộ bằng Async/Await
                async loadData(){ //async được sử dụng để chỉ định rằng một hàm sẽ trả về một Promise
                    try {
                        const self = this;
                        const table = document.querySelector("#tblCustomer");
                        // Đợi api trả về response xong và nhận kết quả
                        const response = await fetch("https://cukcuk.vn/api/v1/customers"); //`await` được sử dụng để đợi          
                        // Đợi chuyển đổi dữ liệu thành json và nhận kết quả                // cho đến khi một Promise được
                        const data = await response.json();                                 // giải quyết hoặc bị từ chối  
                        self.buildTableData(table, data);
                        self.setSelectFirstRecord();
                    } catch(error){
                        console.error(response.error);
                    }
                }
    // Xử lý bất đồng bộ: Sử dụng Callback, Promise hay async, await?
        /**
         * Không nên sử dụng Callback do có thể xảy ra `callback hell`.
         * Để trình bày code flow thì async/await sẽ thuận tiện hơn .then nhưng sẽ khó debug hơn mặc dù
        Devtool đã hỗ trợ cú pháp async/await.
        => Cân nhắc sử dụng cú pháp async/await và Promise tuỳ từng trường hợp sao cho hợp lý. Hạn chế 
        tối đa việc sử dụng callback
        */

/*-------------------------------- Phần 3: Hướng đối tượng trong JavaScript ---------------------------------*/

/*-------------------------------- Phần 4: Export Module ---------------------------------*/

/*-------------------------------- Phần 5: Web Component ---------------------------------*/

/*-------------------------------- Phần 6: Tổng hợp MISA Coding Convention ---------------------------------*/
