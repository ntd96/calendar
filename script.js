jQuery(document).ready(function ($) {

    let date = new Date();
    const months = [
        { key: 0, value: 'January' },
        { key: 1, value: 'February' },
        { key: 2, value: 'March' },
        { key: 3, value: 'April' },
        { key: 4, value: 'May' },
        { key: 5, value: 'June' },
        { key: 6, value: 'July' },
        { key: 7, value: 'August' },
        { key: 8, value: 'September' },
        { key: 9, value: 'October' },
        { key: 10, value: 'November' },
        { key: 11, value: 'December' }
    ];

    const events = [
        {
            start_date: '2/16/2025',
            end_date: '2/16/2025',
            title: 'First Full Moon of the Lunar New Year Ceremony',
            description: 'First Full Moon of the Lunar New Year Ceremony',
            color: '#FFB3A7',
            time: 'TBA',
            fee: 'TBA'
        },
        {
            start_date: '2/25/2025',
            end_date: '2/25/2025',
            title: 'Awakened One Thich Thong Hoi Awakened Anniversary',
            description: 'Awakened One Thich Thong Hoi Awakened Anniversary',
            color: '#A7FFCB',
            time: 'TBA',
            fee: 'TBA'
        },
        {
            start_date: '3/9/2025',
            end_date: '3/9/2025',
            title: ' Youth & Teens 1 Day Awakened Spring Retreat ',
            description: ' Youth & Teens 1 Day Awakened Spring Retreat ',
            color: '#FFB3A7',
            time: 'TBA',
            fee: 'TBA'
        },

        {
            start_date: '3/27/2025',
            end_date: '4/2/2025',
            title: '7-Day Awakened Great Vow Retreat ',
            description: '7-Day Awakened Great Vow Retreat ',
            color: '#A7D8FF',
            time: 'TBA',
            fee: 'TBA'
        },

        {
            start_date: '3/30/2025',
            end_date: '3/30/2025',
            title: ' Universal Door Meditation Center Ground Breaking Ceremony',
            description: ' Universal Door Meditation Center Ground Breaking Ceremony',
            color: '#A7FFCB',
            time: 'TBA',
            fee: 'TBA'
        },

        {
            start_date: '4/8/2025',
            end_date: '4/8/2025',
            title: ' Awakened One Thich Dieu Thien Awakened Anniversary ',
            description: 'Awakened One Thich Dieu Thien Awakened Anniversary ',
            color: '#FFB3A7',
            time: 'TBA',
            fee: 'TBA'
        },

        {
            start_date: '5/4/2025',
            end_date: '5/4/2025',
            title: ' Buddha’s Birthday Celebration @ UDMC ',
            description: ' Buddha’s Birthday Celebration @ UDMC ',
            color: '#A7D8FF',
            time: 'TBA',
            fee: 'TBA'
        },

        {
            start_date: '5/18/2025',
            end_date: '5/18/2025',
            title: ' Buddha’s Birthday Celebration @ Suoi Tu ',
            description: ' Buddha’s Birthday Celebration @ Suoi Tu',
            color: '#A7FFCB',
            time: 'TBA',
            fee: 'TBA'
        },

        {
            start_date: '6/16/2025',
            end_date: '6/20/2025',
            title: 'Youth & Teen 5 Day Awakened Summer Retreat',
            description: 'Youth & Teen 5 Day Awakened Summer Retreat',
            color: '#A7D8FF',
            time: 'TBA',
            fee: 'TBA'
        },
        {
            start_date: '7/6/2025',
            end_date: '7/12/2025',
            title: '7 Day Monastic Awakened Sangha Retreat ',
            description: '7 Day Monastic Awakened Sangha Retreat ',
            color: '#FFB3A7',
            time: 'TBA',
            fee: 'TBA'
        },

        {
            start_date: '7/21/2025',
            end_date: '7/25/2025',
            title: '5 Day Adult + Youth & Teen Awakened Retreat ',
            description: '5 Day Adult + Youth & Teen Awakened Retreat',
            color: '#A7FFCB',
            time: 'TBA',
            fee: 'TBA'
        },

        {
            start_date: '8/20/2025',
            end_date: '8/20/2025',
            title: ' Awakened One Thich Dieu Thien Appeared in this World Celebration ',
            description: ' Awakened One Thich Dieu Thien Appeared in this World Celebration ',
            color: '#A7D8FF',
            time: 'TBA',
            fee: 'TBA'
        },

        {
            start_date: '8/30/2025',
            end_date: '8/30/2025',
            title: ' Filial Peity Ceremony at UDMC ',
            description: ' Filial Peity Ceremony at UDMC ',
            color: '#FFB3A7',
            time: 'TBA',
            fee: 'TBA'
        },

        {
            start_date: '9/14/2025',
            end_date: '9/14/2025',
            title: ' Filial Peity Ceremony at Suoi Tu ',
            description: ' Filial Peity Ceremony at Suoi Tu ',
            color: '#A7FFCB',
            time: 'TBA',
            fee: 'TBA'
        },
        {
            start_date: '10/3/2025',
            end_date: '10/9/2025',
            title: '7 Day Awakened Retreat for Adults ',
            description: '7 Day Awakened Retreat for Adults ',
            color: '#A7D8FF',
            time: 'TBA',
            fee: 'TBA'
        },

        {
            start_date: '11/3/2025',
            end_date: '11/7/2025',
            title: '5 Day Monastic Awakened Sangha Retreat ',
            description: '5 Day Monastic Awakened Sangha Retreat ',
            color: '#FFB3A7',
            time: 'TBA',
            fee: 'TBA'
        },

        {
            start_date: '11/23/2025',
            end_date: '11/23/2025',
            title: '1 Day Youth & Teen Awakened Gratitude Retreat ',
            description: '1 Day Youth & Teen Awakened Gratitude Retreat',
            color: '#A7FFCB',
            time: 'TBA',
            fee: 'TBA'
        },

        {
            start_date: '12/24/2025',
            end_date: '12/24/2025',
            title: ' Awakened One Thich Thong Hoi Appeared in this World Celebration ',
            description: ' Awakened One Thich Thong Hoi Appeared in this World Celebration ',
            color: '#A7D8FF',
            time: 'TBA',
            fee: 'TBA'
        },

        {
            start_date: '12/26/2025',
            end_date: '12/30/2025',
            title: ' Youth & Teens 5 Day Awakened Winter Retreat ',
            description: ' Youth & Teens 5 Day Awakened Winter Retreat ',
            color: '#FFB3A7',
            time: 'TBA',
            fee: 'TBA'
        },
    ];


    function renderCalendar() {
        const day = date.getDate();
        const month = date.getMonth(); // từ 0 -> 11 theo chỉ số index
        const year = date.getFullYear();
        // xác định ngày đầu tiên của tháng hiện tại đó rơi vào thứ mấy, ví dụ  tính từ 0 - 6, nếu 1 là thứ 2
        const firstDay = new Date(year, month, 1).getDay();
        // Này để tính tháng đó tổng cộng bao nhiêu ngày, ví dụ ra 31 thì tháng đó có 31 ngày
        const lastDate = new Date(year, month + 1, 0).getDate();
        // Này giống hàm lastdate nhưng là tháng trước đó của tháng hiện tại
        const prevLastDate = new Date(year, month, 0).getDate(); // Số ngày tháng trước

        // Hiển thị tháng và năm
        $('#currentMonth').text(`${months[month].value.substring(0, 3)} ${year}`);
        // Xóa ngày cũ, khi ta chuyển hoặc lùi sang tháng khác
        $('.calendar-dates').empty();

        // Nôm na tận dụng prevLastdate tháng trước, loop bằng ngày hiẹn tại rơi thứ mấy sau đó - 1 để lấy thứ của ngày cuối cùng tháng trước
        // Bạn có thẻ check trên UI để hình dung
        for (let i = firstDay - 1; i >= 0; i--) {
            $('.calendar-dates').append(`<div class="prev-month"></div>`);
        }

        // render ngày tháng hiện tại, tìm lastDate, res = 28 30 31
        for (let i = 1; i <= lastDate; i++) {
            const currentDate = `${month + 1}/${i}/${year}`;
            const matchedEvents = events.filter(event => {
                const startDate = new Date(event.start_date);
                const endDate = new Date(event.end_date);
                const current = new Date(currentDate);
                return current >= startDate && current <= endDate;
            });

            const eventClass = matchedEvents.length > 0 ? 'has-event' : 'no-event'; // Kiểm tra có sự kiện hay không
            let eventStyle = '';
            if (matchedEvents.length > 0) {
                if (matchedEvents.length === 1) {
                    eventStyle = `background-color: ${matchedEvents[0].color}`;
                } else {
                    const colors = matchedEvents.map(event => event.color);
                    const step = 100 / colors.length; // Chia tỷ lệ đều cho mỗi màu
                    const gradientColors = colors.map((color, index) => `${color} ${index * step}%, ${color} ${(index + 1) * step}%`).join(', ');
                    eventStyle = `background: linear-gradient(180deg, ${gradientColors});`;
                }
            }

            const eventColor = matchedEvents ? matchedEvents.color : '';
            if (i === day && month === new Date().getMonth() && year === new Date().getFullYear()) {
                const currentDateElement = $(`<div class="show-dates ${eventClass} current-date" style="background-color:${eventColor}">${i}</div>`);
                $('.calendar-dates').append(currentDateElement);
                currentDateElement.hide().fadeIn(500);
            } else {
                const dateElement = $(`<div class="show-dates ${eventClass}" style="${eventStyle}">${i}</div>`);
                $('.calendar-dates').append(dateElement);
                dateElement.hide().fadeIn(500);
            }

        }


        // Tính số ô còn lại để thêm ngày tháng sau
        // 42 default từ 7 ngày thứ và 6 row của 30 31 ngày
        // 42 - 28 = 14
        // 42 - 30 = 12
        // 42 - 31 = 11
        // Lấy div length từ 42 - prev + curent = nextdate ( ra các ngày còn trống ở tháng sau )
        const remainingCells = 42 - ($('.calendar-dates div').length); // Tổng 42 ô (6 hàng x 7 cột)
        for (let i = 1; i <= remainingCells; i++) {
            $('.calendar-dates').append(`<div class="next-month"></div>`);
        }

        // Xử lí sự kiện khi click bất kì dates
        // $('.calendar-dates').on('click', 'div', function () {
        //     const selectedDay = $(this).text();
        //     let selectedMonth = month;
        //     let selectedYear = year;
        //     if ($(this).hasClass('prev-month')) {
        //         selectedMonth -= 1; // Lùi về tháng trước
        //         if (selectedMonth < 0) {
        //             selectedMonth = 11; // Nếu là tháng 1 thì chuyển về tháng 12 năm trước
        //             selectedYear -= 1;
        //         }
        //     } else if ($(this).hasClass('next-month')) {
        //         selectedMonth += 1; // Tiến tới tháng sau
        //         if (selectedMonth > 11) {
        //             selectedMonth = 0; // Nếu là tháng 12 thì chuyển về tháng 1 năm sau
        //             selectedYear += 1;
        //         }
        //     }
        //     const selectedDate = `${selectedDay}/${selectedMonth + 1}/${selectedYear}`;
        //     $('.calendar-footer').html(`<p>${selectedDate}</p>`);
        // });

        renderEventForMonth(month, year); // Gọi hàm xử lí sự kiện
    }
    // Chuyển sang tháng trước
    $('#prevMonth').click(function () {
        date.setMonth(date.getMonth() - 1);
        $('#monthDropdown').html(`${months[date.getMonth()].value} <i class="fa-solid fa-chevron-down"></i>`);
        renderCalendar();
    });

    // Chuyển sang tháng sau
    $('#nextMonth').click(function () {
        date.setMonth(date.getMonth() + 1);
        $('#monthDropdown').html(`${months[date.getMonth()].value} <i class="fa-solid fa-chevron-down"></i>`);
        renderCalendar();
    });

    // START XỬ LÍ DROPDOWN ------
    // Render Month cho dropdown
    function renderMonthDropdown() {
        const dropdown = $('#modalOptionMonth');
        dropdown.empty(); // Xóa các mục cũ
        months.forEach((m) => {
            dropdown.append(`<div class="month-option" data-month="${m.key}">${m.value}</div>`);
        });
    }

    // Show modal option khi click vào dropdown
    $('#monthDropdown').click(function () {
        // Kiểm tra trạng thái của dropdown và toggle icon rotation
        $('#modalOptionMonth').fadeToggle(400); // Toggle hiển thị dropdown

        // Toggle quay icon
        $(this).find('i').toggleClass('rotate-up'); // Quay icon khi ấn vào

        renderMonthDropdown(); // Render month options nếu chưa render
    });

    // Handle month selection
    $('#modalOptionMonth').on('click', '.month-option', function () {
        // Lấy data month sau khi render ra option dropdown
        const selectedMonth = $(this).data('month');
        date.setMonth(selectedMonth); // Set the month
        $('#monthDropdown').html(`${months[selectedMonth].value} <i class="fa-solid fa-chevron-down rotate-up"></i>`); // Update display
        $('#modalOptionMonth').fadeOut(400);
        $('#monthDropdown i').removeClass('rotate-up');
        renderCalendar();
    });

    // Ẩn Modal Option Dropdown nếu click outsite
    $(document).click(function (event) {
        if (!$(event.target).closest('#modalOptionMonth, #monthDropdown').length) {
            $('#modalOptionMonth').fadeOut(400);
            $(this).find('i').removeClass('rotate-up'); // Quay lại icon
        }
    });

    // Lấy giá trị của dropdown sau khi user click option -> set month rồi render lại
    $('#modalOptionMonth').on('click', '.month-option', function () {
        const selectedMonth = $(this).data('month');
        date.setMonth(selectedMonth); // Cập nhật tháng
        renderCalendar(); // Render lại lịch
        // Cập nhật month/ year trên header
        $('#currentMonth').text(`${months[selectedMonth].value.substring(0, 3)} ${date.getFullYear()}`);
    });

    // END XỬ LÍ DROPDOWN ------

    // Xử lí sự kiện
    function renderEventForMonth(month, year) {
        const filteredEvents = events.filter(event => {
            const eventStartDate = new Date(event.start_date); // Ngày bắt đầu
            const eventEndDate = new Date(event.end_date); // Ngày kết thúc
            return (
                (eventStartDate.getMonth() === month && eventStartDate.getFullYear() === year) ||
                (eventEndDate.getMonth() === month && eventEndDate.getFullYear() === year)
            );
        });

        const eventContentDiv = $('.event-content');
        eventContentDiv.removeClass('active');

        let div = '';
        div += `
            <div class="title-head-month">
                ${months[month].value}
            </div>
        `
        if (filteredEvents.length > 0) {
            filteredEvents.forEach(event => {
                const startDate = new Date(event.start_date);
                const endDate = new Date(event.end_date);
                // format thành dạng Jan - 1 / Jan - 2
                const formatDate = (date) =>
                    `${months[date.getMonth()].value.substring(0, 3)} ${date.getDate()}`;

                div += `
                        <div class="event-body-item" >
                            <div class="line" style="background-color:${event.color}"></div>
                            <div class="title">
                                <p class="label">Title</p>
                                <p>${event.title}</p>
                            </div>
                            <div class="time">
                                <p class="label">Time</p>
                                <p>${event.time}</p>
                            </div>
                            <div class="fee">
                                <p class="label">Fee</p>
                                <p>${event.fee}</p>
                            </div>
                            <div class="date">
                                <p class="label">Date</p>
                                <p>${formatDate(startDate)} - ${formatDate(endDate)}</p>
                            </div>
                            <div class="view-details" data-date="${event.start_date}"><i class="fa-solid fa-ellipsis"></i></div>
                        </div>  
                    
                `
            })

        } else {
            div += '<p>There are no events this month.</p>';
        }

        setTimeout(() => {
            eventContentDiv.empty();
            eventContentDiv.addClass('active');
            eventContentDiv.html(div);
            $('.ct-calendar-container .event-body-item').each(function (index) {
                $(this).css({
                    display: 'none', // Ẩn ban đầu
                    position: 'relative', // Giữ vị trí
                }).delay(index * 100)
                    .slideDown(500) // Lướt xuống
                    .animate({ opacity: 1 }, { queue: false, duration: 500 }); // Tăng dần độ trong suốt
            });
        }, 500);
    }

    // Xử lí sự kiện xem chi tiết
    $('.event-content').on('click', '.view-details', function () {
        let selectDataDate = $(this).data('date');
        const event = events.find(e => e.start_date === selectDataDate);
        if (event) {
            $('#popupDescription').html(event.description); // Hiển thị mô tả sự kiện
            $('#eventPopup').fadeIn(300); // Hiển thị popup
        }
    });

    $('#eventPopup').on('click', '.close-popup, .popup-overlay', function () {
        $('#eventPopup').fadeOut(300);
    });

    renderMonthDropdown();
    renderCalendar();

});