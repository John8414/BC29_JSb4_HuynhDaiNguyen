/**
 * Bài 1
 * 
 * Đầu vào:
 * nhập ngẫu nhiên 3 số tự nhiên khác nhau.
 * 
 * Xử lý:
 * đặt điều kiện để so sánh 
 * các số với nhau để tìm đc số bé nhất-giữa-lớn nhất
 *   + nếu so_3 > so_2 & so_2 > so_1 => thì so_3 lớn nhất, so_1 nhỏ nhất ;
 *   + nếu so_1 > so_1 & so_1 > so_3 => thì so_2 lớn nhất, so_3 nhỏ nhất ;
 *   + nếu so_3 > so_1 & so_1 > so_2 => thì so_3 lớn nhất, so_2 nhỏ nhất ;
 *   + nếu so_3 > so_1 & so_1 > so_2 => thì so_3 lớn nhất, so_2 nhỏ nhất ;
 *   + nếu so_3 > so_1 & so_1 > so_2 => thì so_3 lớn nhất, so_2 nhỏ nhất ;
 *   + nếu so_3 > so_1 & so_1 > so_2 => thì so_3 lớn nhất, so_2 nhỏ nhất ;
 *
 * 
 * Kết quả:
 * log 3 số thứ tự tăng dần ra UI
 */


document.getElementById("tinhSoTangDan").onclick = function() {
    //Đầu vào
    var so_1 = document.getElementById("so_1").value * 1;
    var so_2 = document.getElementById("so_2").value * 1;
    var so_3 = document.getElementById("so_3").value * 1;

    so_1 = parseInt(so_1);
    so_2 = parseInt(so_2);
    so_3 = parseInt(so_3);

    // Xử lý & so sánh các số

    // 3 < 2 < 1
    if (so_1 > so_2 && so_2 > so_3) {
        var ketQua = "3 số có giá trị tăng dần : " + so_3 + " , " + so_2 + " , " + so_1;
    }
    // 3 < 1 < 2
    else if (so_3 > so_1 && so_1 > so_2) {
        var ketQua = "3 số có giá trị tăng dần : " + so_2 + " , " + so_1 + " , " + so_3;
    }
    // 2 < 1 < 3
    else if (so_2 > so_1 && so_1 > so_3) {
        var ketQua = "3 số có giá trị tăng dần : " + so_3 + " , " + so_1 + " , " + so_2;
    }
    // 2 < 3 < 1
    else if (so_2 > so_3 && so_3 > so_1) {
        var ketQua = "3 số có giá trị tăng dần : " + so_1 + " , " + so_3 + " , " + so_2;
    }
    // 3 < 2 < 1
    else if (so_3 > so_2 && so_2 > so_1) {
        var ketQua = "3 số có giá trị tăng dần : " + so_1 + " , " + so_2 + " , " + so_3;
    }
    // 1 < 3 < 2
    else if (so_1 > so_3 && so_3 > so_2) {
        var ketQua = "3 số có giá trị tăng dần : " + so_2 + " , " + so_3 + " , " + so_1;
    } else { ketQua = "Vui lòng nhập 3 số khác nhau" }

    //kết quả
    document.getElementById("footerGtTangDan").innerHTML = ketQua;
    document.getElementById("footerGtTangDan").classList.add("alert-success");

};
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

// Bài tập 2:
/**
 * - Đầu vào:
 *   + nhập tên người dùng : bố, mẹ, anh, em ;
 *
 * - Xử lý:
 *   + nếu người nhập là bố => "Xin chào Bố" ;
 *   + nếu người nhập là mẹ => "Xin chào Mẹ" ;
 *   + nếu người nhập là anh => "Xin chào Anh" ;
 *   + nếu người nhập là em => "Xin chào Em" ;
 *
 * - Đầu ra: xuất kết quả ;
 */
document.getElementById("btnloiChao").onclick = function() {
    // var bo = "Xin Chào Bố" ;
    // var me = "Xin Chào Mẹ" ;
    // var anh ="Xin Chào Anh" ;
    // var em ="Xin Chào Em" ;

    var nguoiDung = document.getElementById("nguoiDung").value;
    var loiChao = "";

    if (nguoiDung == "Bố") {
        loiChao = "Xin Chào Bố";
    } else if (nguoiDung == "Mẹ") {
        loiChao = "Xin Chào Mẹ";
    } else if (nguoiDung == "Anh") {
        loiChao = "Xin Chào Anh";
    } else if (nguoiDung == "Em") {
        loiChao = "Xin Chào Em";
    } else {
        loiChao = "Bạn không được cấp quyền truy cập";
    }
    document.getElementById("footerloiChao").innerHTML = loiChao;
    document.getElementById("footerloiChao").classList.add("alert-success")

};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

// Bài tập 3:
/**
 * - Đầu vào: Nhập vào 3 số nguyên ;
 *
 * - Xử lý:
 *
 * - Đầu ra: Show ra kết quả ;
 */
document.getElementById("btnTinhChanLe").onclick = function() {
    // Đầu vào
    var soNguyen1 = document.getElementById("soNguyen1").value * 1;
    var soNguyen2 = document.getElementById("soNguyen2").value * 1;
    var soNguyen3 = document.getElementById("soNguyen3").value * 1;
    var result = "";

    soNguyen1 = parseInt(soNguyen1);
    soNguyen2 = parseInt(soNguyen2);
    soNguyen3 = parseInt(soNguyen3);
    // Xử lý

    var soChan = 0;
    var soLe = 0;
    // xử lý số nguyên 1 :
    if (soNguyen1 % 2 === 0) {
        soChan = ++soChan;
    } else {
        soLe = ++soLe;
    }

    // xử lý số nguyên 2 :
    if (soNguyen2 % 2 === 0) {
        soChan = ++soChan;
    } else {
        soLe = ++soLe;
    }

    // xử lý số nguyên 3 :
    if (soNguyen3 % 2 === 0) {
        soChan = ++soChan;
    } else {
        soLe = ++soLe;
    }

    // Show kết quả
    document.getElementById("footerTinhChanLe").innerHTML =
        "Kết quả là : " + soChan + " Số Chẵn " + soLe + " Số Lẻ ";
    document.getElementById("footerTinhChanLe").classList.add("alert-success");
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


// Bài tập 4:
/**
 * - Đầu vào: người dùng nhập số đo 3 cạnh ( a, b, c ) ;
 *
 * - Xử lý:
 *    + tam giác đều: 3 cạnh bằng nhau
 *      (Nếu a = b = c => tam giác đều)
 *    + tam giác cân: cạnh kề và cạnh đối chiều dài bằng nhau
 *
 * + tam giác vuông: cạnh huyền = tổng bình phuong hai canh góc vuông
 * - Đầu ra:
 */
document.getElementById("btnTinhTamGiac").onclick = function() {
    // Đầu vào
    var canh_a = document.getElementById("canh_a").value * 1;
    var canh_b = document.getElementById("canh_b").value * 1;
    var canh_c = document.getElementById("canh_c").value * 1;

    // Xử lý
    //tam giác đều
    if (canh_a == canh_b && canh_b == canh_c) {
        raKetQua = "Tam Giác Đều";
    }
    //tam giác cân
    else if (canh_a == canh_b || canh_a == canh_c || canh_b == canh_c) {
        raKetQua = "Tam Giác Cân";
    }
    //tam giác vuông
    else if (
        canh_a == Math.sqrt(Math.pow(canh_b, 2) + Math.pow(canh_c, 2)) ||
        canh_b == Math.sqrt(Math.pow(canh_c, 2) + Math.pow(canh_a, 2)) ||
        canh_c == Math.sqrt(Math.pow(canh_a, 2) + Math.pow(canh_b, 2))
    ) {
        raKetQua = "Tam Giác Vuông";
    }
    document.getElementById("footerTinhTamGiac").innerHTML = " Kết quả là: " + raKetQua;
    document.getElementById("footerTinhTamGiac").classList.add("alert-success");
};