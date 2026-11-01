# COLORA V11.5 | Review Operations & Browser Quality Gate

**Trạng thái:** Draft review kit. Không phải chứng nhận nhân viên, hồ sơ phê duyệt SKU hay quyết định QC được COLORA ký duyệt.

## 1. Công cụ mới để chuẩn bị phản biện 98 câu P0

Đội phụ trách có thể tạo bộ tài liệu rà soát từ **303/303 câu hiện có** mà không thay đổi bank, không upload chứng từ và không tự đổi trạng thái câu hỏi.

```bash
node scripts/review-packet.mjs --self-test
node scripts/review-packet.mjs --priority=P0 --format=csv > /tmp/colora-p0-review.csv
node scripts/review-packet.mjs --priority=P0 --owner=PRODUCT_TECHNICAL --format=md > /tmp/colora-product-review.md
node scripts/review-packet.mjs --ids=FN-064,GM-048,ON-055 --format=md > /tmp/colora-risk-review.md
```

Phiếu hiển thị: mã câu, mức ưu tiên, owner đề xuất, câu hỏi và bốn phương án, đáp án hiện có, giải thích, cách áp dụng, nguồn ban đầu, chứng từ cần xác minh, link nghiên cứu công khai và nhận định còn thiếu. Các ô người duyệt, bằng chứng, ngày duyệt và kết luận **để trống**. Không áp dụng phê duyệt từ CSV vào website nếu chưa kiểm độc lập với người có thẩm quyền.

**Không đưa phiếu đã có thông tin nhạy cảm trở lại repository công khai.** Reviewer ký duyệt phải thao tác trong hệ thống bảo mật được COLORA cho phép. Chủ dự án chỉ nhận một mã tài liệu phi nhạy cảm và trạng thái được kiểm chứng, không sao chép hóa đơn, assay, lô đá, dữ liệu cá nhân hay chứng thư riêng tư.

## 2. Bằng chứng công khai vs lời hứa sản phẩm

Các nguồn đã đối chiếu vào 01/11/2026:

| Chủ đề | Điều nguồn có thể hỗ trợ | Điều nguồn không thể xác nhận |
| --- | --- | --- |
| GIA report | Tính tự nhiên/tổng hợp, treatment phát hiện được và origin trong phạm vi báo cáo tương ứng | Viên đá của một SKU COLORA cụ thể đã có report, chưa qua xử lý hoặc có origin xác định |
| GIA sapphire grading | GIA không có hệ chấm **chất lượng** phổ quát cho sapphire/đá màu như diamond 4Cs | Hệ tiêu chuẩn QC của COLORA đã được GIA phê duyệt |
| RJC CoC | Phạm vi truy xuất vật liệu kim loại quý theo chuẩn CoC | Mọi SKU hoặc thành phẩm COLORA có chứng chỉ RJC |
| COLORA đổi trả | Thông báo 48 giờ cho tình huống được nêu, cửa sổ gửi hàng 14 ngày khi đáp ứng điều kiện | Trả mọi đơn không điều kiện vì thay đổi ý thích |
| COLORA Care | Bảo hành 24 tháng cho lỗi thuộc trách nhiệm COLORA; vệ sinh cơ bản miễn phí | Mọi trường hợp hỏng hoặc mọi dịch vụ mạ/đánh bóng đều miễn phí |

Nguồn:
- GIA: https://www.gia.edu/gem-education/colored-stone
- GIA: https://www.gia.edu/FAQ/gia-faq-grade-sapphires
- RJC: https://www.responsiblejewellery.com/standards/chain-of-custody/
- COLORA: https://colora.vn/pages/chinh-sach-doi-tra
- COLORA: https://colora.vn/pages/chinh-sach-bao-hanh

Các nguồn trên có thể thay đổi; chính sách phải được owner kiểm lại đúng phiên bản/ngày hiệu lực trước khi trả lời khách. Trường hợp tranh chấp còn phải rà soát quy định pháp luật áp dụng.

## 3. Quy trình duyệt và trách nhiệm

1. Chủ sở hữu claim (Founder/Product/QC/Policy) nhận reviewer packet theo priority và owner.
2. Reviewer thứ nhất kiểm sự thật và phạm vi nguồn; reviewer thứ hai kiểm câu hỏi có nhiều nghĩa, distractor gợi đáp án, lỗi thuật ngữ và khả năng học được từ giải thích.
3. Trường hợp bất đồng, ghi vấn đề và chuyển `NEEDS_REVISION`; với câu quan trọng an toàn, ngừng sử dụng trong thi thử cho đến khi làm rõ.
4. Với câu được duyệt, xác minh mã tài liệu, version, ngày hiệu lực, người duyệt, quyết định từ hệ thống bảo mật. Câu Essentials phải đồng bộ authority file và checklist hiện có.
5. CI chạy kiểm định và kiểm tra lại bài thi. **Không phê duyệt dựa trên đơn thuần đèn xanh CI.**

## 4. Kiểm thử trình duyệt thật

GitHub Actions có job `browser-smoke` để chạy Chromium thật trên hai viewport (desktop 1365×860 và mobile 375×812). Bài kiểm tra kiểm tra hành trình: mở home, vào Thực hành, 4 visual labs, 3 phiếu rubric, chấm và lưu điểm, vào Bằng chứng, tạo đề 48 câu, nộp bài, chủ động xuất JSON pilot không tên, reload và xác nhận điểm lưu cục bộ.

Cũng kiểm tra tràn ngang trên điện thoại và JavaScript runtime errors. Job này **không phải thiết bị thật iOS/Android** và không thay được QA trên Safari iOS hoặc phần cứng thực tế.

## 5. Trạng thái pilot thực tế

Chưa có nhân viên nào được thu thập dữ liệu hoặc xác thực. Bản `scripts/analyze-pilot.mjs --self-test` dùng dữ liệu mô phỏng nội bộ để kiểm tra thuật toán, **không phải kết quả thử nghiệm người học**. Nếu COLORA triển khai pilot thật, xin phép người tham gia, chỉ thu dữ liệu tối thiểu, tách mọi danh tính khỏi file, không lưu file trong GitHub public. Hạn chế khả năng suy ra danh tính với nhóm ít người.

## 6. Điều kiện không được bỏ qua

- 86 Essentials cần review của người được ủy quyền.
- Các chứng từ vật liệu, đá, lớp phủ và SOP QC thực phải có phạm vi đúng SKU.
- Ảnh thành phẩm cần xác minh quyền sử dụng và tính chính xác, không thay thế bằng render/ảnh tham khảo.
- Sổ điểm nhân sự thực cần xác thực danh tính, lưu trữ và phân quyền; localStorage và CSV không đáp ứng.
- PR hiện là Draft, `main` chưa thay đổi. Chỉ được cân nhắc merge khi có quyết định phát hành rõ ràng.


## Kết quả Chromium CI

Đã xác minh hai job `quality-check` và `browser-smoke` chạy trên GitHub Actions của nhánh PR, thử hai kích thước màn hình. Đây là kết quả browser simulation có thể lặp lại, **không thay cho người dùng thử trên điện thoại thật**.
