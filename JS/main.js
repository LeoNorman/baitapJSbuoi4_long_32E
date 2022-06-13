//Bài tập 1
document.getElementById('btnSapXep').onclick = function () {
    //input: soThu1: Number, soThu2: Number, soThu3: number
    var soThu1 = Number(document.getElementById('nhapSo1').value);
    var soThu2 = Number(document.getElementById('nhapSo2').value);
    var soThu3 = Number(document.getElementById('nhapSo3').value);
    //output: ketQua : string
    var ketQua = '';
    //progress 
    if (soThu1 > soThu2 && soThu1 > soThu3) {
        ketQua = soThu3 + '<' + soThu2 + '<' + soThu1;
    } else if (soThu1 > soThu2 && soThu3 > soThu2) {
        ketQua = soThu2 + '<' + soThu3 + '<' + soThu1;
    } else if (soThu1 > soThu2 && soThu3 > soThu1) {
        ketQua = soThu2 + '<' + soThu1 + '<' + soThu3;
    } else if (soThu2 > soThu1 && soThu2 > soThu3) {
        ketQua = soThu3 + '<' + soThu1 + '<' + soThu2;
    } else if (soThu2 > soThu3 && soThu3 > soThu1) {
        ketQua = soThu1 + '<' + soThu3 + '<' + soThu2;
    } else {
        ketQua = soThu1 + '<' + soThu2 + '<' + soThu3;
    }
    //in kết quả ra giao diện
    document.getElementById('xuat3So').innerHTML = ketQua;
}

//BÀI TẬP 2

document.getElementById('btnGuiLoiChao').onclick = function () {
    //input: string
    var chonThanhVien = document.getElementById('chonThanhVien').value;
    //output: guiLoiChao : string
    var guiLoiChao = '';
    //progress
    if (chonThanhVien === 'B') {
        guiLoiChao = 'Xin chào Bố!';
    } else if (chonThanhVien === 'M') {
        guiLoiChao = 'Xin chào Mẹ!';
    } else if (chonThanhVien === 'A') {
        guiLoiChao = 'Xin chào Anh Trai!';
    } else if (chonThanhVien === 'E') {
        guiLoiChao = 'Xin chào Em Gái!';
    } else if (chonThanhVien === '') {
        guiLoiChao = 'Xin chào người lạ ơi!';
    }
    //in kết quả ra giao diện
    document.getElementById('loiChao').innerHTML = guiLoiChao;
}

//BÀI TẬP 3

document.getElementById('btnDem').onclick = function () {
    //input: sothu1: number, sothu2: number, sothu3: number
    var soThu1 = Number(document.getElementById('nhapSo_1').value);
    var soThu2 = Number(document.getElementById('nhapSo_2').value);
    var soThu3 = Number(document.getElementById('nhapSo_3').value);
    //ouput: ketQua: string; tongSoChan: number, tongSoLe: number
    var tongSoChan = 0;
    var tongSoLe = 0;
    //xử lí
    if (soThu1 % 2 === 0) {
        tongSoChan += 1;
    } if (soThu2 % 2 === 0) {
        tongSoChan += 1;
    } if (soThu3 % 2 === 0) {
        tongSoChan += 1;
    }

    tongSoLe = 3 - tongSoChan;

    document.getElementById('xuatChanLe').innerHTML = 'có ' + tongSoChan + ' số chẳn' + ', ' + tongSoLe + ' số lẻ';
}


//bài tập 4: 

document.getElementById('btnDuDoan').onclick = function () {
    //input : canh1: number, canh2: number, canh3 : number
    var canh1 = Number(document.getElementById('nhapDoDai_1').value);
    var canh2 = Number(document.getElementById('nhapDoDai_2').value);
    var canh3 = Number(document.getElementById('nhapDoDai_3').value);
    //output: String
    var ketQua = '';
    //progress
    if (canh1 == canh2 && canh1 == canh3) {
        ketQua = 'Hình tam giác đều';
    } else if (canh1 == canh2 && canh1 != canh3) {
        ketQua = 'Hình tam giác cân';
    } else if (canh1 == canh3 && canh3 != canh2) {
        ketQua = 'Hình tam giác cân';
    } else if (canh3 == canh2 && canh1 != canh3) {
        ketQua = 'Hình tam giác cân';
    } else if (Math.pow(canh1, 2) == Math.pow(canh2, 2) + Math.pow(canh3, 2)) {
        ketQua = 'Hình tam giác vuông';
    } else if (Math.pow(canh2, 2) == Math.pow(canh1, 2) + Math.pow(canh3, 2)) {
        ketQua = 'Hình tam giác vuông';
    } else if (Math.pow(canh3, 2) == Math.pow(canh1, 2) + Math.pow(canh2, 2)) {
        ketQua = 'Hình tam giác vuông';
    } else {
        ketQua = 'Một loại tam giác nào đó';
    }
    //in kết quả ra giao diện
    document.getElementById('doanHinh').innerHTML = ketQua;
}

//Bài tập 5: Viết chương trình nhập vào ngày, tháng, năm (Giả sử nhập đúng, không cần kiểm tra hợp lệ).
// Tìm ngày, tháng, năm của ngày tiếp theo. Tương tự tìm ngày tháng năm của ngày trước đó.
document.getElementById('btnNgayHomQua').onclick = function () {
    //input: ngay: number, thang:number, nam:number
    var ngay = Number(document.getElementById('nhapNgay').value);
    var thang = Number(document.getElementById('nhapThang').value);
    var nam = Number(document.getElementById('nhapNam').value);
    //output: string
    //xử lí
    if (thang === 1 && ngay > 1 && ngay <= 31) {
        ngay -= 1;
    } else if (thang === 2 && ngay > 1 && ngay <= 28) {
        ngay -= 1;
    } else if (thang === 3 && ngay > 1 && ngay <= 31) {
        ngay -= 1;
    } else if (thang === 4 && ngay > 1 && ngay <= 30) {
        ngay -= 1;
    } else if (thang === 5 && ngay > 1 && ngay <= 31) {
        ngay -= 1;
    } else if (thang === 6 && ngay > 1 && ngay <= 30) {
        ngay -= 1;
    } else if (thang === 7 && ngay > 1 && ngay <= 30) {
        ngay -= 1;
    } else if (thang === 8 && ngay > 1 && ngay <= 31) {
        ngay -= 1;
    } else if (thang === 9 && ngay > 1 && ngay <= 30) {
        ngay -= 1;
    } else if (thang === 10 && ngay > 1 && ngay <= 31) {
        ngay -= 1;
    } else if (thang === 11 && ngay > 1 && ngay <= 30) {
        ngay -= 1;
    } else if (thang === 12 && ngay > 1 && ngay <= 31) {
        ngay -= 1;
    } else if (ngay === 1 && thang === 1) {
        ngay = 31;
        thang = 12;
        nam -= 1;
    } else if (ngay === 1 && thang === 2) {
        ngay = 31;
        thang -= 1;
    } else if (ngay === 1 && thang === 3) {
        ngay = 28;
        thang -= 1;
    } else if (ngay === 1 && thang === 4) {
        ngay = 31;
        thang -= 1;
    } else if (ngay === 1 && thang === 5) {
        ngay = 30;
        thang -= 1;
    } else if (ngay === 1 && thang === 6) {
        ngay = 31;
        thang -= 1;
    } else if (ngay === 1 && thang === 7) {
        ngay = 30;
        thang -= 1;
    } else if (ngay === 1 && thang === 8) {
        ngay = 31;
        thang -= 1;
    } else if (ngay === 1 && thang === 9) {
        ngay = 31;
        thang -= 1;
    } else if (ngay === 1 && thang === 10) {
        ngay = 30;
        thang -= 1;
    } else if (ngay === 1 && thang === 11) {
        ngay = 31;
        thang -= 1;
    } else if (ngay === 1 && thang === 12) {
        ngay = 30;
        thang -= 1;
    } else {
        document.getElementById('ketQua_5').innerHTML = alert('nhập sai ngày hoặc tháng')
    }
    document.getElementById('ketQua_5').innerHTML = ngay + '/' + thang + '/' + nam;
}
document.getElementById('btnNgayMai').onclick = function () {
    //input: ngay: number, thang:number, nam:number
    var ngay = Number(document.getElementById('nhapNgay').value);
    var thang = Number(document.getElementById('nhapThang').value);
    var nam = Number(document.getElementById('nhapNam').value);
    //output: ketQua5: String
    if (thang === 1 && ngay >= 1 && ngay <= 30) {
        ngay += 1;
    } else if (thang === 2 && ngay >= 1 && ngay <= 27) {
        ngay += 1;
    } else if (thang === 3 && ngay >= 1 && ngay <= 30) {
        ngay += 1;
    } else if (thang === 4 && ngay >= 1 && ngay <= 29) {
        ngay += 1;
    } else if (thang === 5 && ngay >= 1 && ngay <= 30) {
        ngay += 1;
    } else if (thang === 6 && ngay >= 1 && ngay <= 29) {
        ngay += 1;
    } else if (thang === 7 && ngay >= 1 && ngay <= 30) {
        ngay += 1;
    } else if (thang === 8 && ngay >= 1 && ngay <= 30) {
        ngay += 1;
    } else if (thang === 9 && ngay >= 1 && ngay <= 29) {
        ngay += 1;
    } else if (thang === 10 && ngay >= 1 && ngay <= 30) {
        ngay += 1;
    } else if (thang === 11 && ngay >= 1 && ngay <= 29) {
        ngay += 1;
    } else if (thang === 12 && ngay >= 1 && ngay <= 30) {
        ngay += 1;
    } else if (ngay === 31 && thang === 1) {
        ngay = 1;
        thang = 2;
    } else if (ngay === 28 && thang === 2) {
        ngay = 1;
        thang = 3;
    } else if (ngay === 31 && thang === 3) {
        ngay = 1;
        thang = 4;
    } else if (ngay === 30 && thang === 4) {
        ngay = 1;
        thang = 5;
    } else if (ngay === 31 && thang === 5) {
        ngay = 1;
        thang = 6;
    } else if (ngay === 30 && thang === 6) {
        ngay = 1;
        thang = 7;
    } else if (ngay === 31 && thang === 7) {
        ngay = 1;
        thang = 8;
    } else if (ngay === 31 && thang === 8) {
        ngay = 1;
        thang = 9;
    } else if (ngay === 30 && thang === 9) {
        ngay = 1;
        thang = 10;
    } else if (ngay === 31 && thang === 10) {
        ngay = 1;
        thang = 11;
    } else if (ngay === 30 && thang === 11) {
        ngay = 1;
        thang = 12;
    } else if (ngay === 31 && thang === 12) {
        ngay = 1;
        thang = 1;
        nam += 1
    }else {
        document.getElementById('ketQua_5').innerHTML = alert('nhập sai ngày hoặc tháng')
    }

    document.getElementById('ketQua_5').innerHTML = ngay + '/' + thang + '/' + nam;
}


//Bài tập 6: Viết chương trình nhập vào tháng, năm. Cho biết tháng đó có bao nhiêu ngày. (bao gồm tháng của năm nhuận)
document.getElementById('btnTinhNgay_6').onclick = function () {
    //input: thang: number, nam: number
    var thang = Number(document.getElementById('nhapThang_6').value);
    var nam = Number(document.getElementById('nhapNam_6').value);
    //output: ketQua: string
    //xử lí
    if (thang === 1) {
        days = 31;
    } else if (thang === 2 && nam % 4 != 0) {
        days = 28;
    }
    else if (thang === 3) {
        days = 31;
    }
    else if (thang === 4) {
        days = 30;
    }
    else if (thang === 5) {
        days = 31;
    }
    else if (thang === 6) {
        days = 30;
    } else if (thang === 7) {
        days = 31;
    } else if (thang === 8) {
        days = 31;
    } else if (thang === 9) {
        days = 30;
    } else if (thang === 10) {
        days = 31;
    } else if (thang === 11) {
        days = 30;
    } else if (thang === 12) {
        days = 31;
    } else {
        days = 29;
    }

    //in kết quả ra giao diện
    document.getElementById('ketQua_6').innerHTML = 'tháng ' + thang + ' năm ' + nam + ' có ' + days + ' ngày';

}


//Bài tập 7: Viết chương trình nhập vào số nguyên có 3 chữ số. In ra cách đọc nó.
document.getElementById('btnDocSo').onclick = function () {
    //input: so: number
    var so = Number(document.getElementById('nhapSo_7').value);
    //output:docHangTram: string, docHangChuc: string, docHangDonVi: string
    docHangTram = '';
    docHangChuc = '';
    docHangDonVi = '';
    //xử lí
    var hangTram = Math.floor(so / 100);
    var hangChuc = Math.floor(so % 100 / 10);
    var hangDonVi = so % 10;
    switch (hangTram) {
        case 1: {
            docHangTram = 'một trăm';
        }; break;
        case 2: {
            docHangTram == 'hai trăm';
        }; break;
        case 3: {
            docHangTram = 'ba trăm';
        }; break;
        case 4: {
            docHangTram = 'bốn trăm';
        }; break;
        case 5: {
            docHangTram = 'năm trăm';
        }; break;
        case 6: {
            docHangTram = 'sáu trăm';
        }; break;
        case 7: {
            docHangTram = 'bảy trăm'
        }; break;
        case 8: {
            docHangTram = 'tám trăm';
        }; break;
        case 9: {
            docHangTram = 'chín trăm';
        }; break;
        default: {
            docHangTram = ''
            alert('Số hàng trăm không xác định được');
        }
    }
    switch (hangChuc) {
        case 1: {
            docHangChuc = 'mười';
        }; break;
        case 2: {
            docHangChuc = 'hai mươi';
        }; break;
        case 3: {
            docHangChuc = 'ba mươi';
        }; break;
        case 4: {
            docHangChuc = 'bốn mươi';
        }; break;
        case 5: {
            docHangChuc = 'năm mươi';
        }; break;
        case 6: {
            docHangChuc = 'sáu mươi';
        }; break;
        case 7: {
            docHangChuc = 'bảy mươi'
        }; break;
        case 8: {
            docHangChuc = 'tám mươi';
        }; break;
        case 9: {
            docHangChuc = 'chín mươi';
        }; break;
        default: {
            docHangChuc = '';
            alert('Số hàng chục không xác định được');
        }
    }
    switch (hangDonVi) {
        case 1: {
            docHangDonVi = 'một';
        }; break;
        case 2: {
            docHangDonVi = 'hai';
        }; break;
        case 3: {
            docHangDonVi = 'ba';
        }; break;
        case 4: {
            docHangDonVi = 'bốn';
        }; break;
        case 5: {
            docHangDonVi = 'năm';
        }; break;
        case 6: {
            docHangDonVi = 'sáu';
        }; break;
        case 7: {
            docHangDonVi = 'bảy';
        }; break;
        case 8: {
            docHangDonVi = 'tám';
        }; break;
        case 9: {
            docHangDonVi = 'chín';
        }; break;
        default: {
            docHangDonVi = ''
            alert('Số hàng đơn vị không xác định được');
        }
    }
    document.getElementById('ketQua_7').innerHTML = docHangTram + ' ' + docHangChuc + ' ' + docHangDonVi;
}

//Bài tập 8: Cho biết tên và tọa độ nhà của 3 sinh viên. Cho biết tọa độ của trường đại học. Viết chương
// trình in tên sinh viên xa trường nhất.
document.getElementById('btnTim').onclick = function () {
    //input: tên sinh viên 123: string, tọa độ x,y của sv123: number, tọa độ x,y của trường học: number
    var name1 = document.getElementById('nhapTenSV_1').value;
    var name2 = document.getElementById('nhapTenSV_2').value;
    var name3 = document.getElementById('nhapTenSV_3').value;
    var x1 = Number(document.getElementById('nhapToaDoX_1').value);
    var y1 = Number(document.getElementById('nhapToaDoY_1').value);
    var x2 = Number(document.getElementById('nhapToaDoX_2').value);
    var y2 = Number(document.getElementById('nhapToaDoY_2').value);
    var x3 = Number(document.getElementById('nhapToaDoX_3').value);
    var y3 = Number(document.getElementById('nhapToaDoY_3').value);
    //tọa độ trường học
    var x4 = Number(document.getElementById('nhapToaDoX_4').value);
    var y4 = Number(document.getElementById('nhapToaDoY_4').value);
    //output: nameXaTruongNhat : string
    nameXaTruongNhat = '';
    //xử lí
    //công thức tính khoảng cách khi biết tọa độ x,y của 2 điểm: gọi d là khoảng cách => d = Math.sqrt(Math.pow(x1-x2) + Math.pow(y1-y2));
    //khoảng cách từ sinh viên 1 đến trường học là d1
    var d1 = Math.sqrt(Math.pow(x4, 2) - 2 * x4 * x1 + Math.pow(x1, 2) + Math.pow(y4, 2) - 2 * y4 * y1 + Math.pow(y1, 2));
    //khoảng cách từ sinh viên 2 đến trường học là d2
    var d2 = Math.sqrt(Math.pow(x4, 2) - 2 * x4 * x2 + Math.pow(x2, 2) + Math.pow(y4, 2) - 2 * y4 * y2 + Math.pow(y2, 2));
    //khoảng cách từ sinh viên 3 đến trường học là d3
    var d3 = Math.sqrt(Math.pow(x4, 2) - 2 * x4 * x3 + Math.pow(x3, 2) + Math.pow(y4, 2) - 2 * y4 * y3 + Math.pow(y3, 2));
    if (d1 > d2 && d2 > d3) {
        nameXaTruongNhat = name1;
    } else if (d1 > d3 && d1 > d2) {
        nameXaTruongNhat = name1;
    } else if (d2 > d1 && d1 > d3) {
        nameXaTruongNhat = name2;
    } else if (d2 > d3 && d2 > d1) {
        nameXaTruongNhat = name2;
    } else if (d3 > d1 && d1 > d2) {
        nameXaTruongNhat = name3;
    } else if (d3 > d2 && d3 > d1) {
        nameXaTruongNhat = name3;
    } else {
        nameXaTruongNhat = name3;
    }
    document.getElementById('ketQua_8').innerHTML = 'sinh viên xa trường nhất: ' + nameXaTruongNhat;
}
