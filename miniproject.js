let attempts = 0;
let loginSuccess = false;

while (attempts < 3) {
    let userName = prompt("Nhập tài khoản:");
    let password = prompt("Nhập mật khẩu:");

    if (userName === "admin" && password === "12345") {
        alert("Đăng nhập thành công!");
        loginSuccess = true;
        break;
    } else {
        attempts++;
        if (user !== "admin") {
            alert("Sai tài khoản. Bạn còn " + (3 - attempts) + " lần thử.");
        } else {
            alert("Sai mật khẩu. Bạn còn " + (3 - attempts) + " lần thử.");
        }
    }
}

if (!loginSuccess) {
    alert("Tài khoản đã bị khóa. Phiên làm việc kết thúc.");
} else {
    let isRunning = true;

    while (isRunning) {
        let choice = prompt(
            `HỆ THỐNG QUẢN LÝ THƯ VIỆN
            1. Phân loại mã số sách
            2. Thiết kế sơ đồ kho sách
            3. Dự toán phí bảo trì theo năm
            4. Tìm mã số sách may mắns
            5. Thoát chương trình
            Nhập lựa chọn (1-5):
            `
        );

        switch (choice) {
            case "1":
                console.log("--- 1 Phân loại mã số sách ---");
                let total = 0;
                let evenCount = 0; 
                let oddCount = 0;     
                let code;
                
                do {
                    code = +prompt("Nhập mã số sách (Nhập 0 để dừng):");
                    if (!isNaN(code) && code !== 0) {
                        total++;
                        if (code % 2 === 0) {
                            evenCount++;
                        } else {
                            oddCount++;
                        }
                    }
                } while (code !== 0);
                
                console.log(`Tổng số sách đã nhập: ${total}`);
                console.log(`Sách khoa học: ${evenCount}`);
                console.log(`Sách nghệt thuật: ${oddCount}`);
                break;

            case "2":
                console.log("--- 2 Thiết kế sơ đồ kho ---");
                let rows = +prompt("Nhập số hàng:");
                let cols = +prompt("Nhập số cột:");

                for (let i = 1; i <= rows; i++) {
                    let rowString = "";
                    for (let j = 1; j <= cols; j++) {
                        let position = "[" + i + "-" + j + "]";
                        if (i === j) {
                            position += "(Kệ ưu tiên)";
                        }
                        rowString += position + " ";
                    }
                    console.log(rowString);
                }
                break;

            case "3":
                console.log("--- 3 Dự toán phí bảo trì ---");
                let qty = +prompt("Số lượng sách hiện có:");
                let price = +prompt("Phí bảo trì gốc/cuốn:");
                let years = +prompt("Số năm dự toán:");

                for (let y = 1; y <= years; y++) {
                    let totalCost = qty * price;
                    console.log(`Năm ${y}: Đơn giá ${price}đ -> Tổng: ${totalCost}đ`);
                    price = price * 1.1; 
                }
                break;

            case "4":
                console.log("--- 4 Tìm mã số sách may mắn ---");
                let n = +prompt("Nhập số giới hạn:");
                let countLucky = 0;
                let listLucky = "";

                for (let i = 1; i <= n; i++) {
                    if (i % 3 === 0 && i % 5 !== 0) {
                        listLucky += i + " ";
                        countLucky++;
                    }
                }
                console.log(`Các mã may mắn: ${listLucky}`);
                console.log(`Tổng cộng: ${countLucky} mã`);
                break;

            case "5":
                alert("Hệ thống đang đăng xuất...");
                isRunning = false;
                break;

            default:
                alert("Lựa chọn không hợp lệ, vui lòng chọn từ 1-5.");
        }
    }
}