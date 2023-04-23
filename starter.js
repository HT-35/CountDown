window.addEventListener("load", function() {


//     let time = prompt("Nhập vào này cầm đếm ngược (vidu):  May 03 2023");

    const days_Text = this.document.querySelector(".days");
    const hours_Text = this.document.querySelector(".hours");
    const minutes_Text = this.document.querySelector(".minutes");
    const seconds_Text = this.document.querySelector(".seconds");

    // Sun Apr 23 2023 00: 21: 22 GMT + 0700(Giờ Đông Dương)
    //Wed Jun 30 2025 22:44:42 GMT+0700 (Indochina Time)
    function countdown(timer) {
        const endDate = new Date(timer).getTime();
        const currentDate = new Date().getTime();

        // endDate - currentDate <= 0 : ngày kt đã qua thì ko chạy chương trình
        if (isNaN(endDate) || endDate - currentDate <= 0) return;


        setInterval(calculate, 1000);

        function calculate(date) {
            let days, hours, minutes, seconds;
            const now = new Date();

            // convert to timestamp
            const startDate = now.getTime();
            let timeRemainting = parseInt((endDate - startDate) / 1000);

            if (timeRemainting > 0) {

                //    1day =  24 * 60 * 60 = 86400
                days = parseInt(timeRemainting / 86400);
                days_Text.textContent = days;

                //    1h =  60 * 60 = 3600
                timeRemainting = timeRemainting % 86400;
                hours = parseInt(timeRemainting / 3600);
                hours_Text.textContent = hours;

                //    1p = 60s
                timeRemainting = timeRemainting % 3600;
                minutes = parseInt(timeRemainting / 60);
                minutes_Text.textContent = minutes;

                // thời gian còn lại là giay 
                timeRemainting = timeRemainting % 60;
                seconds = parseInt(timeRemainting);
                //  `0${seconds}`.slice(-2)    là lấy 2 số cuối cùng . 
                //   vd:  035 => 35   ,  09  => 09
                seconds_Text.textContent = `0${seconds}`.slice(-2);
            } else {
                return 0;
            }
        }
    }
    countdown("May 03 2023");
//     countdown(time);



});
