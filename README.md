# COLORA Learning Studio - Foundations V7

Hệ thống đào tạo nhân viên COLORA - COLOR YOUR AURA, thiết kế cho mô hình bán trang sức **online-first**.

## Thay đổi trọng tâm

Không bắt đầu bằng tình huống xử lý khó. Mọi vị trí phải học **12 chương kiến thức căn bản** trước:

1. COLORA là ai & nguồn gốc
2. Tên gọi & COLOR YOUR AURA
3. Facets of Feeling
4. Định vị, giá trị & tầm nhìn
5. DNA thiết kế COLORA
6. Product Functional
7. Product Technical
8. Product Emotional
9. Target Customer
10. Income, ngân sách & giá trị
11. Customer Journey Online
12. Niềm tin & thông tin sản phẩm

Mỗi chương có phần **đọc kiến thức** và bài trắc nghiệm ngay sau đó. Ngân hàng mới: **206 câu**, bao gồm **139 câu CORE** (117 câu nền mới và 22 câu củng cố V6.1), cùng **67 câu chuyên sâu theo vai trò**:

| Vị trí | CORE | Chuyên sâu | Tổng |
|---|---:|---:|---:|
| Nhân sự chung, Designer, Editor | 139 | 18 | 157 |
| Customer Care / Advisor | 139 | 24 | 163 |
| Marketing / Content | 139 | 25 | 164 |

Bài tổng kết có **40 câu**, lấy **25 câu CORE bao phủ đủ 12 chương** và 15 câu chuyên môn theo vị trí, trong 45 phút. Đạt 80% vẫn chỉ là mức gợi ý tự học chưa được thẩm định.

## Nguồn và độ chắc chắn

Bài học nền tảng dựa trên Câu chuyện COLORA công bố trên `colora.vn`, các nguyên tắc Design DNA đã phát triển và tài liệu chiến lược Customer Journey Digital. Một số chi tiết của DNA hiện là định hướng thiết kế, **không phải cam kết mọi SKU đã đạt mọi tính năng**.

**Thu nhập mục tiêu:** chưa có dải thu nhập tháng chính thức, được phê duyệt và kiểm chứng đủ để dùng làm tiêu chuẩn bắt buộc. Vì thế tài liệu phân biệt income, ngân sách khả dụng, khả năng chi trả, willingness to pay và perceived value, không bịa một mức lương.

**Sản phẩm:** thông số vật liệu, xử lý đá, các loại chứng thư, bảo hành, giá, tồn kho, thời gian giao và khả năng chỉnh size phải dựa vào SKU/chính sách hiệu lực; bài học không thay thế hồ sơ duyệt.

**Vận hành:** không giả định COLORA có cửa hàng vật lý, trải nghiệm thử trực tiếp, CRM tự động, NFC hay dịch vụ sourcing tự do nếu chưa xác nhận triển khai.

## Chạy và triển khai

```sh
python3 -m http.server 8080
node scripts/validate.mjs
```

Truy cập `http://localhost:8080`. Website tĩnh, cần HTTP để tải `data/questions.json` và `data/lessons.json`. Có thể triển khai bằng GitHub Pages từ `main` / `root`.

## Bảo mật và dữ liệu

Repository và GitHub Pages là **công khai**. Ngân hàng và đáp án có thể xem trong JSON/JS; website dùng để **tự học, không thi bảo mật**. Không đưa dữ liệu khách, giá vốn, kế hoạch thu nhập cá nhân bí mật hay tài liệu cung ứng nhạy cảm lên repo.

Tiến độ lưu trong localStorage từng trình duyệt, không đồng bộ thiết bị, không xác thực danh tính. Bài kiểm tra không thay bài thực hành sản phẩm thật.
