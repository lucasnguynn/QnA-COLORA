# V11.3 | Phản biện sơ bộ nhóm claim P0

**Đây là kiểm toán nội dung sơ bộ, không phải phê duyệt chuyên môn hoặc xác nhận SKU.** Tất cả các quyết định nguồn còn ở trạng thái chờ người phụ trách kiểm tra.

| Mã | Nhận định chuyên môn sơ bộ | Hành động trước khi dùng để chứng nhận hoặc truyền thông |
| --- | --- | --- |
| FN-037, FN-094 | Mức 2,3–8 triệu đồng là thông tin dải giá kế hoạch trong ngân hàng, chưa chứng minh giá niêm yết hoặc mức giá áp dụng hiện tại | Người sáng lập ký duyệt dải giá, ngày hiệu lực; đối chiếu bảng giá SKU đang bán |
| FN-062, FN-063 | Tuyên bố COLORA SILVER gồm GENIA276 Ag 930‰ và công nghệ phủ độc quyền không thể được chứng thực chỉ từ đề trắc nghiệm | Product/QC đối chiếu hợp kim, nguồn bạc, vật liệu mạ phủ, quy trình và claim được phép cho từng SKU |
| FN-064 | Phân biệt RJC CoC của chuỗi kim loại với chứng nhận thành phẩm là đúng về *nguyên tắc phạm vi*; nhưng tính phù hợp của chứng nhận với vật liệu COLORA chưa xác minh | Lấy holder, certificate, scope, thời hạn, chứng từ lot/transfer; không tự công bố mọi thành phẩm RJC-certified |
| FN-065 | Không sử dụng nickel không đồng nghĩa an toàn dị ứng tuyệt đối | Xác minh phạm vi công thức và test đã thực hiện; tránh hứa 'không dị ứng với mọi người' |
| FN-067 | Natural và untreated là hai thuộc tính khác nhau; không được suy ra treatment chỉ từ natural | Gắn nguồn GIA về report/treatment; hồ sơ thực tế cho stone ID/SKU vẫn phải xác minh |
| GM-048 | Thiếu thông tin treatment không chứng minh untreated hay synthetic | Giữ khỏi bài thi thử theo exclusion, lấy nguồn minh bạch và quy trình tiếp nhận từ xưởng |
| GM-053 | Tiêu chí lựa chọn đá tích hợp hữu ích như framework; thiếu ngưỡng duyệt chính thức | Product/QC duyệt SOP, ngưỡng tùy loại đá/SKU, ngoại lệ và người phê duyệt; chưa ghi Accept/Reject hàng loạt |
| ON-055 | Cách đọc thời hạn đổi trả dễ nhầm giữa thông báo, điều kiện đủ và thời gian gửi lại | Owner chính sách đối chiếu bản live cùng ngày hiệu lực và ngoại lệ |
| PC-024 | 'Vệ sinh cơ bản miễn phí' khác 'phục hồi/mạ lại'; dễ bị nâng thành lời hứa miễn phí mọi trường hợp | Chốt rõ phạm vi chăm sóc, tình trạng lỗi, phí, trách nhiệm và quy trình xác nhận |
| ON-089 | Có thông tin đơn hàng không đủ để suy ra mọi quyền dùng email/quảng cáo | Owner privacy/marketing chốt consent, unsubscribe, lưu và xóa dữ liệu, nguồn pháp lý áp dụng |

**Ưu tiên:** các câu CORE an toàn FN-062, FN-067, PC-022; privacy/claim của các vai trò ON-062, PC-032, ON-069, ON-089; sau đó material, giá và policy. Không được bỏ kiểm duyệt P1/P2 chỉ vì không thuộc P0.

### Điểm cần sửa trong thiết kế đánh giá

- Thi kiểm tra khả năng áp dụng quy tắc đúng nhưng **không phải bằng chứng rằng thông số mỗi SKU đã đúng**.
- Với câu đã xác minh lý thuyết, cần phân biệt ngưỡng `TRAINING_SCIENCE` và `SKU_CUSTOMER_CLAIM`.
- Câu hỏi có lời giải đúng nhưng distractor quá dễ vẫn phải kiểm tra độ khó bằng pilot, không thể cho là đã hoàn tất chỉ vì có nguồn.
- Các tài liệu nhạy cảm cần lưu ở kho có phân quyền, trong GitHub public chỉ giữ mã tài liệu, phiên bản và người phê duyệt.

### Nguồn bắt đầu đối chiếu độc lập

- GIA báo cáo colored stone: https://www.gia.edu/gem-lab-service/colored-stone-analysis-report-service
- GIA cut / tradeoffs: https://www.gia.edu/gia-news-research-colored-stone-cut-quality-what-to-look-for
- RJC Chain of Custody scope: https://www.responsiblejewellery.com/standards/chain-of-custody/

**Tất cả claim được liệt kê ở đây chưa qua owner sign-off.**
