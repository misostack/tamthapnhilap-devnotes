---
title: "Ng CRMExpress 001"
type: "note"
date: 2018-10-01T10:48:28+07:00
description: "Ng CRMExpress 001"
keywords: ["Ng CRMExpress 001"]
projects: ["crmexpress"]
image: "/common/no-image-available.jpg"
---

## Introduction

**Tại sao cần CRM?**

- Chăm sóc khách hàng ngay từ khi chưa là khách hàng : https://www.youtube.com/watch?v=6omS6AF4-ww

Mục tiêu: xây dựng tiềm thức trong khách hàng về brand name.

Đây là phiên bản CRM miễn phí dành cho các doanh nghiệp vừa và nhỏ Việt Nam. Phần mềm được viết dựa trên angular 6.
Phần mềm sẽ gồm 3 đối tượng: Owner, Users, Customer. 
- Mỗi account Owner được phép tạo 1 tổ chức(company).
- Mỗi tổ chức chỉ có 1 admin( account Owner đã đăng ký ).
- Mỗi tổ chức được phép có nhiều Users với phân quyền giới hạn để tương tác với dữ liệu khách hàng trên CRM(xem,thêm,xóa,cập nhật)

Phần mềm sẽ bao gồm các feature chính bên dưới:

- [x] Authen: Đăng ký/Đăng nhập/Đăng Xuất/Khôi phục mật khẩu/OAuth(Facebook hoặc Gmail) 
- [x] UserGroupManagement: Quản lí nhóm người dùng( ví dụ: phòng sale, phòng chăm sóc khách hàng, phòng marketing)
- [x] UserGroupPermissions: Quản lí quyền hạn của nhóm người dùng( ví dụ : readonly đối với sale)
- [x] UserManagement: Quản lí người dùng( users )
- [x] CustomerManagement: Quản lí khách hàng(xem, thêm, xóa, sửa, pickup)
- [x] YourCustomerList: Danh sách khách hàng cần chăm sóc của bạn(xem, thêm, xóa, sửa)

Chức năng đặc biệt:

- [x] Tìm kiếm khách hàng tiềm năng trên facebook:
    + Quét uid trong group mở
    + Quét uid trong comments
    + Quét uid trong danh sách bạn
    + Quét uid trong danh sách mở của 1 người dùng( sử dụng uid )
    + Quét data chi tiết từ uid

- [x] Pick up khách hàng

1 nhân viên của cty tìm được 1 tập khách hàng mới và chuyển cho phòng chăm sóc khách hàng để nhập liệu.
Lúc này, các nhân viên sẽ tự pick 1 khách hàng vào tập CRM của mình để thực hiện chăm sóc.
Các nhân viên có thể chia sẽ tập CRM của mình với nhau. Khách hàng được pickup bởi người nào thì chỉ người 
đó thấy.

- [x] Filter khách hàng tiềm năng: tự xây dựng filter để tính point cho khách hàng tiềm năng

Ngày hôm này:

- Bán cho ai và chăm sóc ai?(WHO)
- Bán và chăm sóc khi nào?(WHEN)
- Bán và chăm sóc ở đâu?(WHERE)
- Bán và chăm sóc thế nào(HOW)
- Điều kiện gì cần để có thể bán và chăm sóc được?(DO YOU NEED HELP FROM ME OR COMPANY)

- [x] Nhật kí bán hàng : https://www.youtube.com/watch?v=6xjaGXqmaFI

Tại sao cần lập kế hoạch:

- Giúp nhớ mục tiêu lâu dài

**Phễu bán hàng**:

200 khách hàng tiềm năng -> 100 người sẵn sàng nghe máy -> 40 khách hàng đồng ý đến gặp -> 25 người đàm phán chốt hợp đồng,hứa hẹn -> 20 người thật sự mua.

==> 10% thành công

## API Portal

- Phần mềm sẽ kết nối với biz-portal.misostack.com/api/v1