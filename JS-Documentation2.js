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

/*-------------------------------- Phần 3: Hướng đối tượng trong JavaScript ---------------------------------*/

/*-------------------------------- Phần 4: Export Module ---------------------------------*/

/*-------------------------------- Phần 5: Web Component ---------------------------------*/

/*-------------------------------- Phần 6: Tổng hợp MISA Coding Convention ---------------------------------*/
