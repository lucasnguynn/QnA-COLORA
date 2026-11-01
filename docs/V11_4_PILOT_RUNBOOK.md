# COLORA V11.4 | Pilot Runbook & Decision Rules

**Trạng thái: Sẵn sàng chuẩn bị pilot, KHÔNG có người tham gia/điểm số thật đã được thu thập.**

## 1. Mục tiêu

Đo ba khía cạnh riêng biệt: (a) tính dễ sử dụng của Learning Studio, (b) tính rõ ràng, độ khó, mức độ gây hiểu lầm của từng câu và (c) khả năng áp dụng thông qua work samples. **Không biến điểm tự báo của GitHub Pages thành chứng nhận năng lực nhân viên.**

## 2. Hai giai đoạn đề xuất

| Giai đoạn | Cách chọn mẫu đề xuất | Hoạt động | Kết luận cho phép |
| --- | --- | --- | --- |
| Usability dry run | 3-5 người cho mỗi nhóm BASIC/CARE/MKT, gồm người ít quen công cụ | 1 buổi thực hành 45-60 phút theo tình huống, ghi lỗi font, mobile, hiểu câu hỏi, giải thích, timing | Chỉ phát hiện lỗi định tính, không ước tính năng lực đại diện |
| Item pilot | Nếu tổ chức được: ít nhất 15-30 người/nhóm, ưu tiên các vòng đa cohort; số này vẫn nhỏ | Thi 48 câu, đánh giá work sample, ghi nguyên nhân nhầm lẫn, đề xuất sửa câu | Thống kê mô tả bước đầu; không đủ để kết luận tính hợp lệ/độ tin cậy của đề |

Các cỡ mẫu trên là **mục tiêu vận hành đề xuất**, không phải ngưỡng có giá trị thống kê hay tiêu chuẩn nhân sự.

## 3. Quy trình trước buổi thử

1. Chỉ cho nhân viên dùng bản preview của nhánh PR, không nhầm website `main` với V11.4. Nếu chưa có preview, người phụ trách phải chạy bản nhánh bằng HTTP local hoặc một preview deployment an toàn và ghi rõ commit.
2. Giải thích rằng ngân hàng câu hỏi, đáp án và website nằm ở GitHub public; người xem có thể tra lời giải. Không ghi nhận kết quả như kỳ thi chống gian lận.
3. Không xin nhân viên nhập tên thật trong bài thử. Nếu cần theo dõi tiến bộ cá nhân, lưu liên kết danh tính trong hệ thống riêng có phân quyền, không gửi vào GitHub issue/PR hoặc cùng thư mục JSON.
4. Tình nguyện tham gia và chọn có/không xuất file dữ liệu. Không ép chia sẻ màn hình riêng tư, hồ sơ y tế, hợp đồng, báo cáo nhà cung cấp, khách hàng hoặc ảnh nội bộ chưa phát hành.
5. Thiết bị: ít nhất một điện thoại Android/iOS, trình duyệt desktop; ghi những lỗi thủ công trong phiếu quan sát riêng, không đưa danh tính vào report công khai.

## 4. Khi người học hoàn thành

- Dùng nút **Xuất bản ghi pilot không tên** sau khi thi. File JSON chứa **chỉ** phiên bản ngân hàng, vị trí BASIC/CARE/MKT, 48 ID câu, lựa chọn theo số và đúng/sai. Không chứa tên/email/địa chỉ/giờ thi/đoạn văn tự do.
- **Không đảm bảo ẩn danh tuyệt đối**: role + một nhóm nhỏ + bối cảnh ai gửi file có thể giúp suy ra người học. Chỉ người phụ trách được chỉ định được tiếp cận file và chỉ giữ trong thời hạn nội bộ phù hợp.
- Không gửi file JSON bằng cách mở GitHub public issue, commit file lên repo hoặc dán vào công cụ không được cấp quyền. Đưa vào thư mục offline có quyền truy cập hạn chế.
- Phiếu chấm work sample `localStorage` và CSV được tạo tại trình duyệt, **không có chữ ký hay danh tính người chấm**. Người quản lý phải thực hiện đối chiếu nguyên tắc chấm và lưu bản chính thức ở hệ thống có quyền truy cập.

## 5. Phân tích offline

Chạy sau khi đã thu ít nhất một bản xuất tự nguyện:

```bash
node scripts/analyze-pilot.mjs --self-test
node scripts/analyze-pilot.mjs /path/pilot-A.json /path/pilot-B.json
```

Script tự chặn: phiên bản/bank khác nhau, file chứa trường dữ liệu người dùng ngoài schema, sai cấu trúc 48 câu hoặc đáp án tự báo không khớp ngân hàng hiện tại. Đầu ra mặc định là bảng tổng hợp **không có bản ghi cá nhân**.

Các cờ chỉ dẫn:

- `INSUFFICIENT_ITEM_RESPONSES`: dưới 10 lượt xuất có chứa câu đó, chỉ nên xem trường hợp định tính.
- `REVIEW_HARD_OR_CONFUSING`: dưới 40% đúng với ít nhất 10 lượt câu đó xuất hiện; yêu cầu kiểm tra khả năng nhiễu, câu dẫn, nguồn và mức khó.
- `REVIEW_TOO_EASY_OR_CUED`: trên 95% đúng với ít nhất 10 lượt; kiểm tra đáp án lộ qua độ dài hoặc diễn giải, nhưng cũng có thể vì nội dung quá nền tảng.
- Không tính độ phân biệt điểm, Cronbach alpha hoặc chứng nhận theo những số liệu nhỏ và tự báo này. Kết quả không phải dữ liệu xác thực danh tính hay kỳ thi có giám thị.

## 6. Phiếu quan sát UX gợi ý

Với từng người không định danh, chỉ ghi: mã buổi riêng không liên kết danh tính công khai, vai trò, thiết bị/trình duyệt, việc hiểu hướng dẫn, khó đọc/vấn đề điều hướng, có thấy rubric/gem labs, dễ tiếp cận bàn phím, lỗi màu/ảnh, câu gây tranh luận (ID), lý do câu khó hiểu, và đề nghị sửa. Không ghi tên thật, email hay câu trả lời tự do có thông tin cá nhân.

## 7. Chốt việc sau pilot

- Sửa **P0 về safety/claim** trước, sau đó P1 về mức khó/người học không hiểu, P2 về ngôn ngữ và UX.
- Mọi sửa đáp án, `why`, chính sách phải có source version và người duyệt; lịch sử học có fingerprint nên không được cưỡng bức gộp điểm phiên bản khác.
- Với claim theo SKU, sử dụng `data/sku-evidence-template.json` cho **metadata phi nhạy cảm**, dữ liệu gốc chỉ ở kho riêng. Không báo có bằng chứng nếu chưa thu được.
- Chỉ chuyển PR từ Draft sau khi có owner sign-off, test browser thật, tài sản có quyền dùng, và kết quả pilot có đủ dữ liệu để đánh giá.

**Không có hành động nào trong V11.4 tự phát hành website, cấp chứng chỉ hoặc gửi dữ liệu về máy chủ.**
