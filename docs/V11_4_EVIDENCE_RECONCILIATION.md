# V11.4 | Đối chiếu chứng cứ P0 và an toàn claim theo SKU

**Ngày rà soát:** 01/11/2026. **Trạng thái:** Desk research / chưa phải duyệt nội bộ.

## Kết quả phân loại bằng chứng

Tệp `data/p0-evidence-dossiers.json` ghi 10 nhóm quyết định cho 20 mã câu/tình huống. Có 8 nguồn công khai đối chiếu (GIA, RJC, chính sách COLORA) và danh sách bằng chứng còn thiếu. Các nguồn công khai cho biết **phạm vi của một nguyên tắc/điều khoản**, không xác nhận một sản phẩm COLORA đã đáp ứng tiêu chuẩn.

| Nhóm mã | Đã có nền tảng công khai | Điều CHƯA thể kết luận |
| --- | --- | --- |
| FN-067, GM-048, ON-047 | GIA phân biệt loại đá, natural/synthetic, treatment và origin khi có thể xác định | Viên đá gắn trong một SKU là untreated, có GIA report hoặc có origin cụ thể |
| FN-064 | RJC CoC liên quan truy xuất kim loại vàng/bạc/PGM theo phạm vi | COLORA sở hữu RJC certification, mọi thành phẩm đã được RJC kiểm định hoặc một lô bạc cụ thể đã đáp ứng CoC |
| ON-055 | Chính sách website COLORA tách thông báo trong 48 giờ và gửi hàng trong 14 ngày khi đủ điều kiện | Khách được đổi ý trả mọi món không điều kiện; chính sách tự phủ quyết quyền theo pháp luật |
| PC-024, ON-058 | COLORA Care công bố vệ sinh cơ bản miễn phí; sửa/mạ/đánh bóng chuyên sâu được đánh giá/báo phí | Mọi loại chăm sóc đều miễn phí hoặc được hoàn tất trong thời gian cố định |
| ON-089 | Privacy policy nêu đặt hàng không mặc nhiên đồng ý nhận quảng cáo | Hệ thống Haravan và các workflow CRM đã triển khai chính xác cơ chế đồng ý/bỏ đăng ký |
| FN-037, FN-094 | Ngân hàng hiện mô tả dải 2,3–8 triệu VND như kế hoạch | Giá công bố hiện hành cho từng SKU, mức giá chính thức đã được Founder ký duyệt |
| FN-062, FN-063, FN-065 | Phân biệt nền kim loại, mạ/phủ, nickel-free và hypoallergenic là cần thiết | GENIA276 Ag 930‰, lớp phủ độc quyền hoặc phạm vi nickel-free được chứng minh trên mọi SKU |
| GM-040/042/044/045/053 | Mô hình quyết định gemstone-first và các dấu hiệu cần xem hình học/cut/defect hợp lý về đào tạo | Dung sai CAD, ngưỡng Accept/Reject và SOP gemstone QC COLORA đã được phê duyệt |

## Nguồn đã đối chiếu

- COLORA đổi trả: https://colora.vn/pages/chinh-sach-doi-tra
- COLORA bảo hành/Care: https://colora.vn/pages/chinh-sach-bao-hanh
- COLORA bảo mật: https://colora.vn/pages/chinh-sach-bao-mat
- COLORA giao hàng: https://colora.vn/pages/chinh-sach-giao-hang
- GIA báo cáo đá màu: https://www.gia.edu/gem-education/colored-stone
- GIA không có grading chất lượng phổ quát cho sapphire/đá màu: https://www.gia.edu/FAQ/gia-faq-grade-sapphires
- RJC Chain of Custody: https://www.responsiblejewellery.com/standards/chain-of-custody/
- RJC định nghĩa CoC transfer document: https://www.responsiblejewellery.com/glossary/

### Đối chiếu nội bộ bước đầu (không công bố nguồn riêng tư)

Đã tìm thấy các tài liệu định hướng DNA thiết kế trong khu vực Drive COLORA được chia sẻ. Chúng củng cố hướng diễn giải Facets of Feeling, gemstone-first và thiết kế dễ đeo, nhưng **chưa phải chứng nhận quy trình, master sample đã ký duyệt hay hồ sơ QC của từng SKU**. Không sao chép nội dung/tài liệu Drive vào repository công khai. Khi sản phẩm cụ thể được kiểm duyệt, tài liệu nguồn chỉ nên được tham chiếu bằng mã nội bộ phi nhạy cảm trong `data/sku-evidence-template.json`, bản gốc vẫn ở kho phân quyền.

## Đường biên trách nhiệm

1. `DESK_RESEARCH`: người nghiên cứu chỉ xác nhận văn bản có tồn tại, tóm tắt phạm vi và điều cần đối chiếu.
2. `OWNER_REVIEW`: Product, Founder hoặc Policy owner kiểm chứng đúng claim, SKU, ngày và phiên bản.
3. `INDEPENDENT_ITEM_REVIEW`: người phản biện kiểm tra đáp án/độ khó/distractor; nếu không có chứng cứ thì đánh dấu Needs Revision hoặc Rejected.
4. `RELEASE_SIGNOFF`: phê duyệt riêng cho nội dung đào tạo và (nếu có) câu chữ công bố với khách hàng.

Không chuyển trực tiếp từ bước 1 sang bước 4. **Tại thời điểm V11.4, không có Essential nào được tự ý nâng sang Approved**.

## Cảnh báo dữ liệu

- GitHub repo công khai, không lưu phiếu kiểm định thật, nhà cung cấp, lô nhập, thông số nhạy cảm chưa công bố hoặc hồ sơ nhân sự.
- Phiếu chấm và kết quả thi localStorage không phải gradebook an toàn; phân tích pilot offline chỉ phục vụ đánh giá UX và rà soát câu hỏi.
- Các nguồn web có thể thay đổi. Khi phê duyệt thật, owner cần kiểm tra lại trang live, lưu phiên bản hiệu lực và rà soát nghĩa vụ pháp luật liên quan.
