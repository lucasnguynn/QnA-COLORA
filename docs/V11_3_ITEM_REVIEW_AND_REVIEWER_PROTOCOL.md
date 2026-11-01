# V11.3 | Quy trình kiểm duyệt câu hỏi & chấm bài thực hành

**Trạng thái: bản thí điểm nội bộ. Không có chứng nhận nhân sự, chứng thư sản phẩm hoặc quy tắc QC mới được cấp từ quy trình này.**

## 1. Hàng đợi 303 câu hỏi

Tệp `data/item-review-queue.json` quản lý **303/303 câu**, trong đó **98 P0**, **124 P1**, **81 P2**. Mọi bản ghi ban đầu có `review_state=PENDING_HUMAN_REVIEW`. Dữ liệu này do máy phân loại sơ bộ theo mức rủi ro; độ ưu tiên **không phải đánh giá chuyên môn đã được ký duyệt**.

Hồ sơ review đề xuất cho mỗi câu: mã câu, loại bằng chứng, nguồn có thể kiểm tra, phiên bản/timestamp nguồn, phạm vi áp dụng (kiến thức khoa học, thông điệp thương hiệu hay đúng SKU), chủ sở hữu, người kiểm duyệt, phản biện độc lập và kết luận. Một đường dẫn GIA/RJC trong hàng đợi là nơi bắt đầu nghiên cứu, **không bảo chứng tự động** rằng toàn câu hỏi đã đúng.

### Quy trình với từng câu
1. Lấy câu hỏi từ P0 trước, kiểm nội dung câu dẫn, đáp án, phương án nhiễu, diễn giải `why`, tình huống `apply`.
2. Tra nguồn gốc thực tế. Với kiến thức gemology, lưu tham chiếu nguồn chính xác và phạm vi; với chính sách, đối chiếu bản đang có hiệu lực; với SKU, xác minh hồ sơ kỹ thuật và chứng từ cụ thể.
3. Khi thiếu bằng chứng, để `PENDING_HUMAN_REVIEW` hoặc `NEEDS_REVISION`, không diễn giải thành thông tin khách hàng được phép sử dụng. Những câu bị `REJECTED` hoặc `NEEDS_REVISION` không được xuất hiện trong bài thi.
4. Nếu phê duyệt, ghi chủ sở hữu, bằng chứng, phiên bản, ngày hiệu lực và người duyệt trước khi sửa `review_state`. Nếu câu thuộc 86 Essentials, phải đồng bộ `data/essentials-review.json` (nguồn thẩm quyền chính cho Essentials).
5. **Không đăng** báo cáo phòng giám định, hồ sơ nhà cung cấp, tên khách hàng, số điện thoại, hợp đồng, số lô hàng hoặc dữ liệu nhạy cảm vào repository công khai. Chỉ ghi mã tham chiếu phi nhạy cảm; lưu chứng từ gốc trong kho được cấp quyền.
6. Nếu sửa câu hỏi/đáp án, kiểm tra phiên bản tiến độ học và kết quả thi; chạy QA, xác nhận nội dung thay đổi trước khi hợp nhất.

Quy tắc phân loại P0 ưu tiên các câu về giá, chính sách, chứng nhận, vật liệu, treatment, quyền riêng tư, claim chưa được duyệt và câu an toàn bắt buộc; không đồng nghĩa những câu P1/P2 là chính xác.

## 2. Đánh giá thực hành theo vai trò

`data/reviewer-rubrics.json` định nghĩa **9 work samples** với **27 tiêu chí** bám theo `data/performance-tasks.json`. Mỗi tiêu chí có trọng số và mốc hành vi quan sát được ở điểm 2/4 và 4/4, cùng thang điểm 0 đến 4.

Điểm thí điểm: **Σ(trọng số × mức điểm / 4)**, thang 100. Đề xuất 75/100 và **không mắc lỗi nghiêm trọng** để ghi nhận là đủ ngưỡng thử nghiệm. Các mức 1/3 là đánh giá trung gian. Ngưỡng 75 chưa được hiệu chỉnh từ dữ liệu pilot và **không thay thế** ngưỡng trắc nghiệm, phê duyệt của người quản lý hoặc năng lực làm việc đã quan sát tại chỗ.

Bản lưu trên website dùng `localStorage` và có thể sửa trực tiếp trên thiết bị. Không có tài khoản người chấm, lịch sử sửa đổi được ký số hoặc hồ sơ nhân viên tập trung. Tệp CSV **chỉ là worksheet hỗ trợ**, không phải chứng nhận hoặc bằng chứng nhân sự được xác thực.

Thực hiện bài chấm có trách nhiệm: người hướng dẫn đọc câu trả lời, đối chiếu rubric, ghi lại bằng chứng quan sát phi nhạy cảm, đánh dấu lỗi nghiêm trọng dù điểm tổng cao, giải thích điều cần sửa và chấm lại qua tình huống độc lập. Mọi yêu cầu xác minh người học và lưu điểm chính thức cần giải pháp phân quyền riêng.

## 3. Tư liệu thực tế và giới hạn sử dụng

`data/asset-approval-queue.json`: xác nhận có 4 tệp hình trong repo, nhưng **0** tệp được xác nhận là ảnh sản phẩm thành phẩm COLORA đủ điều kiện chứng minh một SKU. Ba ảnh khay đá chỉ dùng tham khảo học tập, không khẳng định loài đá, xử lý, chứng thư hoặc tình trạng hàng bán. Các quyền sử dụng ảnh vẫn cần chủ sở hữu xác nhận.

Cần có 5 nhóm tài sản để nâng lên Product Mastery: macro thành phẩm nhiều góc, ảnh đeo đúng tỷ lệ, cùng viên đá dưới nhiều ánh sáng có điều kiện ghi nhận, cặp CAD-mẫu vật lý cùng revision, và Product Passport đã duyệt/được ẩn thông tin nhạy cảm. Chỉ sử dụng ảnh thực sau khi có quyền phát hành phù hợp.

## 4. Các phạm vi phải phân biệt

- **GIA report:** Identification/Origin chỉ có phạm vi được mô tả trong báo cáo; origin khi có thể xác định, treatments được liệt kê khi phát hiện/đánh giá được. Không tự suy ra every stone untreated.
- **RJC CoC:** xác minh chuỗi hành trình kim loại theo chuẩn và phạm vi chứng nhận. Không tự đồng nhất với chứng nhận thành phẩm hay khả năng chứng minh mọi SKU dùng vật liệu tái chế.
- **Ảnh sản phẩm:** màu và ánh sáng chịu ảnh hưởng hậu kỳ; minh họa color shift không phải bằng chứng SKU.

Tham khảo chính thức, đã kiểm tra đường dẫn (không thay thế review từng câu):
- GIA Colored Stone Reports: https://www.gia.edu/gem-lab-service/colored-stone-analysis-report-service
- GIA Colored Stone Cut Quality: https://www.gia.edu/gia-news-research-colored-stone-cut-quality-what-to-look-for
- GIA How to Photograph Gems & Jewelry: https://www.gia.edu/gem-photography
- RJC Chain of Custody: https://www.responsiblejewellery.com/standards/chain-of-custody/

## 5. Điều kiện phát hành

Không merge PR hoặc tự nhận phát hành lên GitHub Pages chỉ vì CI chạy thành công. Cần founder/owner phê duyệt claim, Product/QC xác nhận hồ sơ, người phụ trách chính sách/riêng tư xác nhận hiệu lực; một vòng review độc lập; thử nghiệm người học, UX mobile/desktop, và một hệ thống chấm/định danh có phân quyền nếu muốn chứng nhận thật.
