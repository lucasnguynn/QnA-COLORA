# COLORA Learning Studio V10

**COLORA - COLOR YOUR AURA**

Website học và luyện tập nội bộ bằng tiếng Việt dành cho nhân sự COLORA. Xây dựng theo nhận diện thương hiệu COLORA: Cormorant Garamond / Open Sans, ivory / deep navy, sự tôn trọng người đeo và hệ giá trị *Facets of Feeling*.

[Truy cập website](https://lucasnguynn.github.io/QnA-COLORA/)

## Lộ trình đào tạo

- **Essentials:** 86 câu bắt buộc, kiến thức cơ bản thuộc 17 chương. Bài học chỉ hiển thị **114 mục cốt lõi**, không bắt người mới đọc tất cả nội dung chuyên sâu cùng lúc.
- **Role Mastery:** 18 câu Designer/Editor, 32 Customer Care và 25 Marketing.
- **Applied Cases:** 12 tình huống tích hợp (3 tình huống theo mỗi trụ cột). Các lựa chọn được viết lại ở V10 để hạn chế đoán đúng bằng độ dài; tình huống mô phỏng không phải dữ liệu khách hàng có thật.
- **Advanced Library:** 130 câu CORE nâng cao; **89 mục kiến thức chuyên sâu bổ sung** so với Essentials; ưu tiên chương khuyến nghị riêng cho từng vị trí.
- **Teach-back:** người học tự viết lời giải thích và lưu tại trình duyệt. Kết quả này chưa được tự động chấm và không phải đánh giá năng lực của quản lý.

**Tổng ngân hàng 303 câu**, gồm 216 CORE (86 Essentials + 130 Advanced), 75 câu Role và 12 Applied. Toàn bộ nội dung 203 mục kiến thức được giữ; 114 mục là nội dung bắt buộc (cùng xuất hiện trong bản nâng cao), 89 mục mở rộng.

## Bài thi tổng kết

48 câu trong 55 phút: 32 Essentials phủ đủ 17 chương, 8 Applied Cases và 8 câu theo vai trò.

Để **đạt mức tự học đề xuất**, người học phải đồng thời đúng >=80% tổng đề, >=70% ở từng trụ cột và không sai ba câu quan trọng: GENIA276 Ag 930‰, natural khác untreated, và khi đá/chấu lỏng phải ngừng đeo, chuyển kiểm tra. Đáp án A/B/C/D được xáo trộn theo lượt thi, không xáo trộn ý nghĩa/key chấm điểm.

Bài thi không đủ điều kiện để cấp chứng nhận nhân sự: repo công khai, JSON gồm đáp án và dữ liệu học lưu tại trình duyệt. Ngưỡng đang là đề xuất nội bộ, cần thử với nhân viên thật.

## Tiến độ và lưu dữ liệu

- Tách **đã trả lời**, **hiện đúng**, **cần ôn**. Sau 7 ngày, câu đúng có thể xuất hiện để làm lại, phục vụ spaced retrieval.
- V10 tạo khóa dữ liệu riêng và di chuyển tên, vị trí, câu luyện tập CORE/Role đã làm và teach-back từ V9 trên cùng trình duyệt (nếu còn). Lượt thi V9 chỉ giữ metadata lịch sử, không tính là đạt V10. Các tình huống AC viết lại không dùng đáp án luyện tập V9.
- Không đồng bộ giữa thiết bị và không thu thập điểm danh tính thực.

## Nguồn và quyền công bố

- Phân khúc: **trang sức demi-fine** Việt Nam, gemstone-first, không bán đá rời.
- **COLORA SILVER:** nền bạc tái chế GENIA276 Ag 930‰ được chốt cho **toàn bộ sản phẩm đợt ra mắt**. Công nghệ mạ phủ độc quyền là thông tin thương hiệu; đặc tính kỹ thuật và claim chất lượng cần chứng từ và kiểm tra theo SKU.
- **RJC:** không dùng chứng nhận nguồn kim loại làm tuyên bố mọi thành phẩm đều được RJC chứng nhận.
- Dải giá **dự kiến** 2,3–8 triệu đồng/món; tuổi 22–38 là nhóm khách nghiên cứu ưu tiên, không phải doanh số/thu nhập thực tế được xác minh.
- Tuyên ngôn sứ mệnh/tầm nhìn/giá trị đang diễn giải cho đào tạo phải được founder duyệt nguyên văn trước khi dùng như slogan chính thức.
- Không xuất bản chi phí mua đá, dữ liệu khách hàng, công thức lớp phủ bảo mật, hoặc hồ sơ nội bộ nhạy cảm trên GitHub public.

Các URL trên colora.vn có thể dẫn về giao diện password/Coming Soon trước ngày mở bán: **không sử dụng link đang khóa làm bằng chứng thay tài liệu nội bộ được phê duyệt**.

## Tài liệu

- [V10 release QA & approval gates](docs/V10_RELEASE_QA.md)
- [V9 competency rubric (áp dụng cho V10)](docs/V9_ASSESSMENT_RUBRIC.md)
- [Product Passport template](docs/PRODUCT_PASSPORT_TEMPLATE.md)
- [Brand Foundations](docs/COLORA_FOUNDATIONS_V7_1.md)
- [Gemstone Mastery](docs/GEMSTONE_MASTERY.md)
- [Product Care Mastery](docs/PRODUCT_CARE_MASTERY.md)
- [Visual Asset Register](docs/VISUAL_ASSET_REGISTER.md)

## Chạy cục bộ / QA

```bash
python3 -m http.server 8080
node scripts/validate.mjs
```

Mở `http://localhost:8080`. GitHub Actions chạy kiểm tra dữ liệu và JavaScript, gồm 120 đề thi được tạo ngẫu nhiên cho ba nhóm nhân sự. CI không thay thế kiểm duyệt chất lượng câu hỏi hoặc thử nghiệm nhân viên.
