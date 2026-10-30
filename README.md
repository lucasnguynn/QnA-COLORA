# COLORA Learning Studio - V6.1 Online First

Website đào tạo nội bộ COLORA - COLOR YOUR AURA. Bộ câu hỏi đã được thay bằng phiên bản **V6.1 Online First** để phù hợp mô hình bán hàng qua website, social và tư vấn từ xa.

## Ngân hàng câu hỏi

- **22 câu CORE**: nền tảng thương hiệu, sản phẩm, khách hàng và hành trình.
- **18 câu chuyên môn Nhân sự chung / Designer / Editor**: tổng **40 câu** cho vị trí này.
- **24 câu chuyên môn Customer Care / Advisor**: tổng **46 câu** cho vị trí này.
- **25 câu chuyên môn Marketing / Content**: tổng **47 câu** cho vị trí này.

**89 câu duy nhất**, trong đó **12 câu chọn nhiều đáp án**. Phần luyện tập cung cấp đáp án, giải thích và hành động áp dụng. Bài tổng kết lấy ngẫu nhiên **12 CORE + 18 câu chuyên môn**, thời gian 35 phút và hiển thị giải thích sau khi nộp.

## Chạy và triển khai

```sh
python3 -m http.server 8080
```

Mở `http://localhost:8080/`. Trang tĩnh không cần backend hoặc build; phải mở qua HTTP vì ứng dụng dùng `fetch('./data/questions.json')`.

GitHub Pages: Repository **Settings > Pages > Deploy from a branch** > `main` > `/ (root)`. Sau khi Pages xuất bản, đường dẫn thường là `https://lucasnguynn.github.io/QnA-COLORA/`; xác nhận lại trong GitHub Pages trước khi sử dụng.

Kiểm tra dữ liệu và JavaScript:

```sh
node scripts/validate.mjs
```

## Phạm vi và mức độ chính thức

Bộ V6.1 hướng đến thực tế **online-first**: nhận biết thương hiệu, hiểu thông số và ảnh sản phẩm, chọn size từ xa, đánh giá niềm tin, so sánh giá trị, trải nghiệm website và hỗ trợ khách qua các kênh trực tuyến.

- Nội dung về **SKU, đá, vật liệu, xử lý đá, chi phí và thời gian giao** phải dựa trên hồ sơ sản phẩm được phê duyệt trước khi nói với khách.
- Các chính sách bảo hành/đổi trả/giao hàng trên web có thể thay đổi; cần kiểm tra bản hiệu lực, không tự biến đáp án đào tạo thành SOP cố định.
- Các nội dung ghi **GIẢ THUYẾT** hoặc **ĐỊNH HƯỚNG** không được xem là insight đã nghiên cứu đại diện hoặc cam kết dịch vụ.
- Việc mua hàng hiện tại được đào tạo theo bối cảnh online, không mặc định COLORA có showroom, dịch vụ đặt thử tại cửa hàng hoặc hệ thống CRM riêng.
- Nếu có thay đổi sau này, cập nhật đồng bộ `data/questions.json`, tài liệu này và trình kiểm tra.

## Kết quả và bảo mật

Đây là **website công khai**. JSON chứa toàn bộ câu hỏi, đáp án và lời giải; vì vậy đây là công cụ **tự học**, không phải đề thi bảo mật/chống gian lận. Không đưa dữ liệu khách hàng, tài liệu sourcing bí mật hoặc thông tin nhân sự nhạy cảm lên repository.

Tiến độ học và tên hiển thị chỉ lưu trong `localStorage` của trình duyệt đang sử dụng, không đồng bộ thiết bị. Lịch sử V6 được tách khỏi V6.1 để không nhầm câu hỏi và kết quả. Có thể tải kết quả thi dạng CSV, nhưng CSV không phải chứng nhận nhân sự chính thức.

Ngưỡng 80% chỉ là mức tham khảo chưa được thẩm định. Để đánh giá hiểu biết thực tế, kết hợp phần trắc nghiệm với đối chiếu Product Passport/SKU chính thức và bài thực hành theo vai trò.

## Nhận diện

Nền ivory `#F4EDE1`, navy `#002451`, bronze `#B08A5B`. Cormorant Garamond cho heading và Open Sans cho body. Font tải từ Google Fonts, không lưu font vào repository.
