# V11.5 | Kiểm toán distractor nhóm 98 câu P0

**Báo cáo rà soát sơ bộ; không xác nhận sự thật của câu hỏi hoặc phê duyệt claim.** Mục tiêu là nhận diện các phương án nhiễu yếu dẫn đến khả năng chọn đáp án bằng mẹo thay vì hiểu nội dung.

## Kết quả quan sát trong ngân hàng câu hỏi

- **98 câu P0** (60 CORE, 4 BASIC, 18 CARE, 16 MKT).
- Bộ lọc heuristic nhận diện phương án sai chứa từ ngữ tuyệt đối như "mọi", "luôn", "chắc chắn", "không thể", "không bao giờ", "100%", "tuyệt đối".
- Trước đợt chỉnh sửa V11.5, **16/98** câu P0 có từ hai phương án sai chứa tín hiệu này.
- **9 câu đã viết lại phương án nhiễu**: ON-086, ON-089, PC-024, GM-051, ON-031, ON-017, ON-075, PC-021, PC-008. Không đổi index đáp án đúng, không đặt claim/số đo mới và không gắn nhãn đã duyệt.
- Sau đợt viết lại, bộ lọc còn **7/98** câu có từ hai phương án sai chứa ngôn ngữ tuyệt đối.

## 7 câu còn trong hàng đợi chỉnh sửa thủ công

| ID | Chủ đề | Lý do tiếp tục phản biện |
| --- | --- | --- |
| GM-046 | Gem clarity QC | Hai đáp án sai có dấu hiệu quá cực đoan, dễ loại bằng mẹo |
| GM-052 | Ảnh và biến thiên màu đá | Cần distractor mô tả sai lầm thực tế hơn |
| ON-008 | Chọn ni/kích thước | Cần kiểm độ rõ ràng giữa size, độ rộng nhẫn và thực tế tay người đeo |
| ON-048 | Bạc và lớp phủ | Cần phân biệt cam kết kỹ thuật thực sự và những điều kiện bảo hành |
| ON-058 | Chăm sóc hậu mãi | Cần mô tả các phương án tính phí/thẩm định có điều kiện |
| ON-059 | Hướng dẫn sau mua | Cần chất lượng nhiễu tốt hơn và đối chiếu đúng care theo SKU |
| PC-015 | Hơi nóng và vật liệu đá | Cần người kỹ thuật đối chiếu nguyên lý treatment và độ bền |

Không tự sửa hoặc phê duyệt claim kỹ thuật khi chưa có chứng từ. Với những câu mô phỏng, phân biệt kiến thức ngành với claim chính thức của COLORA.

## Những gì heuristic không chứng minh

- Không chứng minh người học sẽ chọn đáp án chỉ vì từ tuyệt đối.
- Không đo được độ khó thực, độ phân biệt, giá trị phân loại hay khả năng áp dụng.
- Không đủ để cấp chứng nhận nhân sự.
- Câu đúng cũng có thể có tính tuyệt đối khi đó là sự thật được chứng minh; công cụ chỉ là cờ để xem lại.
- Các lỗi về chứng từ, phạm vi pháp lý hoặc thông số SKU vẫn cần reviewer độc lập.

## Bước kiểm duyệt có trách nhiệm

Sử dụng `scripts/review-packet.mjs --priority=P0 --format=csv` để xuất toàn bộ 98 mục cho người phụ trách. Với mỗi câu, reviewer xem phạm vi nguồn, mức chính xác, lựa chọn sai có hợp lý không, chất lượng giải thích và độ an toàn khi áp dụng. Sau khi được duyệt trong hệ thống phân quyền, chỉ đồng bộ metadata phi nhạy cảm và phiên bản nguồn vào website.

**Trạng thái hiện tại:** Toàn bộ 303 câu trong review queue vẫn là `PENDING_HUMAN_REVIEW`. 86 câu Essentials chưa có chữ ký duyệt độc lập.
