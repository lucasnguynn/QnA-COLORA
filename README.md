# COLORA Learning Studio V9

**COLORA - COLOR YOUR AURA**

Hệ thống đào tạo kiến thức nội bộ của COLORA theo mô hình online-first, phù hợp nhân viên Designer/Editor, Customer Care và Marketing.

## Tư duy V9

**Không đánh giá nhân viên bằng tổng số câu hỏi đã hoàn thành.** Hệ thống phân biệt kiến thức nền tảng bắt buộc, chuyên sâu theo vị trí, tình huống tích hợp và thư viện tham khảo nâng cao.

| Tầng | Nội dung |
|---|---|
| **01 Essentials** | 86 câu nền tảng được tuyển chọn, phủ đủ 17 chương: Demi-fine, thương hiệu, Facets of Feeling, COLORA SILVER, sản phẩm, khách hàng, hành trình và chăm sóc |
| **02 Role Mastery** | 18 Designer/Editor, 32 Customer Care, 25 Marketing |
| **03 Applied Cases** | 12 tình huống mô phỏng tích hợp 3 lớp giá trị và hành trình; không được coi là dữ liệu khách hàng thực |
| **04 Advanced Library** | 130 câu CORE nâng cao còn lại từ V8.1, không xóa đi, tự chọn học theo trách nhiệm |
| **05 Teach-back** | 17 bài tự giải thích, có ô nhập/lưu tại trình duyệt, người học tự đối chiếu và nhờ quản lý đánh giá |

**303 câu duy nhất**: 216 CORE lịch sử (86 Essentials + 130 Advanced), 75 theo vai trò và 12 Applied Cases. Bốn nhóm Pillar: Thương hiệu, Sản phẩm, Khách hàng, Customer Journey.

## Bài thi tổng kết (tự học)

48 câu / 55 phút, gồm 32 Essentials (đủ 17 chương), 8 Applied Cases (2 mỗi trụ cột) và 8 câu theo vai trò. Đạt khi đáp ứng **đồng thời**:

- Tổng điểm **từ 80%**.
- Từng trụ cột **từ 70%**.
- Đúng cả ba câu thiết yếu: **FN-062** (COLORA SILVER), **FN-067** (natural/untreated), **PC-022** (đá lỏng phải ngừng đeo).

Ngưỡng này là **đề xuất cho đào tạo nội bộ, chưa được thẩm định**. Đề và đáp án nằm trong JSON công khai, không có server xác thực nhân sự; không được dùng như chứng chỉ hoặc đánh giá HR tự động.

## Nguồn kiến thức COLORA

- Phân khúc: **trang sức demi-fine**, gemstone-first, không bán đá rời.
- Tagline chính thức: **COLORA - COLOR YOUR AURA**.
- Vật liệu đợt ra mắt đã chốt: **COLORA SILVER**, GENIA276 **Ag 930‰** bạc tái chế, công nghệ mạ phủ độc quyền do người sáng lập xác nhận. Hồ sơ P0.7 (19/09/2026) xác nhận **toàn bộ sản phẩm launch** dùng GENIA276 và COLORA cấp hợp kim cho xưởng. Chứng nhận RJC phải truyền đạt đúng phạm vi chuỗi cung ứng và chứng từ nguyên liệu.
- Khoảng giá **dự kiến**: **2,3–8 triệu đồng/sản phẩm**; không phải giá niêm yết của mọi SKU.
- Target khoảng **nữ 22–38** là phân khúc ưu tiên nghiên cứu, không phải giới hạn khách hàng hoặc mức income được chứng minh.
- Sứ mệnh/tầm nhìn/bộ giá trị trong giáo trình hiện có một số câu chữ là **bản diễn giải đào tạo đang chờ founder phê duyệt nguyên văn**.

## Quy trình học

1. Học một chương, xem tư liệu hoặc sơ đồ, đọc mục kiến thức và trả lời teach-back bằng lời mình.
2. Hoàn thành Essentials và bài Role Mastery theo vị trí.
3. Thực hành tình huống tích hợp, không chỉ nhớ thuật ngữ.
4. Thi tổng kết và ôn lại theo trụ cột yếu hoặc câu thiết yếu sai.
5. Quản lý đối chiếu thực tế trên **sản phẩm/SKU đã được duyệt** theo rubric.

Tài liệu đi kèm:
- [Rubric đánh giá V9](docs/V9_ASSESSMENT_RUBRIC.md).
- [Mẫu Product Passport và checklist ảnh thật](docs/PRODUCT_PASSPORT_TEMPLATE.md).
- [Kiến thức nội bộ COLORA](docs/COLORA_FOUNDATIONS_V7_1.md).
- [Gemstone Mastery](docs/GEMSTONE_MASTERY.md).
- [Product Care](docs/PRODUCT_CARE_MASTERY.md).
- [Visual Asset Register](docs/VISUAL_ASSET_REGISTER.md).

## Ảnh thật và giới hạn nội dung

Hiện chỉ có 4 file ảnh riêng biệt được tải trên repository (3 ảnh đá màu thật, 1 tài liệu nhận diện). **Không coi ảnh đá rời là ảnh SKU sản phẩm hoàn thiện**; chưa có bộ ảnh hoàn chỉnh front/macro/on-body/side/back theo từng SKU được xác nhận. Không tạo ảnh AI giả làm sản phẩm để thay. Mẫu Passport có các trường trống và quy trình duyệt nguồn trước khi đưa hình vào.

## Kỹ thuật

Website tĩnh, chạy trên GitHub Pages. Dữ liệu nằm trong `data/*.json`. Tiến độ trắc nghiệm, câu trả lời teach-back và bài thi lưu **localStorage** riêng theo phiên bản và trình duyệt, không đồng bộ thiết bị, không xác thực người dùng.

Chạy:

```bash
python3 -m http.server 8080
node scripts/validate.mjs
```

Chạy thử tại http://localhost:8080/. CI kiểm tra cấu trúc và mô phỏng 120 bài thi phân tầng.

**Quy tắc công khai:** không đưa giá vốn, dữ liệu khách, hồ sơ nhân sự, thỏa thuận supplier, công thức mạ phủ bí mật hoặc bằng chứng kỹ thuật riêng tư lên GitHub public.