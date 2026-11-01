'use strict';
/* Training diagrams: fictional, non-engineering, no official COLORA SKU or QC acceptance thresholds. */
(function(root){
 const navy='#17365B',teal='#5D9EAA',ink='#334D61',sand='#F5EEDF';
 const base=(body,label)=>'<svg class="visual-lab-svg" role="img" aria-label="'+label+'" viewBox="0 0 760 255" xmlns="http://www.w3.org/2000/svg">'+
  '<rect width="760" height="255" rx="12" fill="#F7F2E9"/>'+body+'</svg>';
 const title=(x,t)=>'<text x="'+x+'" y="29" fill="'+navy+'" font-size="15" font-weight="700" font-family="Open Sans, sans-serif">'+t+'</text>';
 const note=(x,y,t)=>'<text x="'+x+'" y="'+y+'" fill="'+ink+'" font-size="11" font-family="Open Sans, sans-serif">'+t+'</text>';
 const depth=base(
  title(38,'CÙNG KÍCH THƯỚC MẶT NHÌN')+title(420,'MẶT CẮT MINH HỌA')+
  '<path d="M141 66 C204 97 209 143 140 178 C72 142 78 99 141 66Z" fill="#91C5C4" stroke="'+navy+'" stroke-width="3"/>'+
  '<path d="M141 69 L112 117 L140 178 L171 114Z M112 117 L171 114" fill="none" stroke="#EAF7F2" stroke-width="2"/>'+
  note(83,200,'Pear 7 × 5 mm (giả định)')+
  '<line x1="279" y1="65" x2="279" y2="180" stroke="#8193A6" stroke-dasharray="5 5"/>'+
  '<path d="M424 87 L493 87 L493 99 L458 145 L424 99Z" fill="#8DC0C8" stroke="'+navy+'" stroke-width="2"/>'+
  '<path d="M562 87 L635 87 L635 111 L598 188 L562 111Z" fill="#8DC0C8" stroke="'+navy+'" stroke-width="2"/>'+
  '<path d="M413 90 L503 90 M552 90 L645 90" stroke="#5D7892" stroke-dasharray="3 4"/>'+
  note(423,166,'A: sâu 3,0 mm')+note(564,207,'B: sâu 4,2 mm')+
  note(418,231,'Chưa đủ để suy ra viên nào đạt; cần CAD mặt cắt')+
  '<path d="M520 75 L520 186" stroke="#CF9572" stroke-dasharray="4 4"/>'+
  '<path d="M660 75 L660 201" stroke="#CF9572" stroke-dasharray="4 4"/>',
  'Sơ đồ hai viên pear dài rộng bằng nhau nhưng khác chiều sâu, không đúng tỷ lệ và không phải CAD sản xuất');
 const lights=base(
  title(38,'A | CENTRAL WINDOW')+title(412,'B | DARK ZONE')+
  '<ellipse cx="185" cy="131" rx="94" ry="72" fill="#75B4BD" stroke="'+navy+'" stroke-width="3"/>'+
  '<path d="M184 59 L112 108 L183 199 L254 108Z M91 131 L279 131" fill="none" stroke="#DAEDF0" stroke-width="2"/>'+
  '<ellipse cx="184" cy="130" rx="38" ry="27" fill="#F3E9D9" stroke="#D1BDA3" stroke-width="2"/>'+
  '<ellipse cx="559" cy="131" rx="94" ry="72" fill="#71B6C3" stroke="'+navy+'" stroke-width="3"/>'+
  '<path d="M559 59 L489 108 L559 199 L629 108Z M465 131 L654 131" fill="none" stroke="#CEE9EB" stroke-width="2"/>'+
  '<ellipse cx="559" cy="132" rx="42" ry="31" fill="#1D455B" opacity=".86"/>'+
  note(100,222,'Mô phỏng nhìn xuyên nền')+note(473,222,'Mô phỏng vùng tối sâu'),
  'Sơ đồ oval mô phỏng windowing và vùng tối, không thể dùng chấm đá thực tế');
 const report=base(
  title(38,'TỜ THÔNG TIN BÊN BÁN | GIẢ ĐỊNH')+
  '<rect x="38" y="46" width="450" height="166" rx="9" fill="#FFFEFA" stroke="#CBBEA9" stroke-width="2"/>'+
  note(57,77,'Species / variety: Natural sapphire')+
  note(57,111,'Shape / outline: Oval')+note(57,145,'Measurements: 7 × 5 mm')+
  '<rect x="52" y="156" width="405" height="37" rx="4" fill="#FCEBD9"/>'+
  '<text x="62" y="180" fill="#82562C" font-size="13" font-family="Open Sans, sans-serif">Treatment: NOT PROVIDED</text>'+
  '<rect x="525" y="54" width="192" height="138" rx="8" fill="#E7EEF1" stroke="#A1B3BB"/>'+
  title(544,'CẦN PHÂN BIỆT')+
  note(542,92,'Natural / synthetic')+note(542,122,'Treatment status')+note(542,152,'Geographic origin')+
  note(38,237,'Đây KHÔNG PHẢI báo cáo phòng giám định độc lập.'),
  'Phiếu thông tin nhà cung cấp giả định không có nội dung treatment hoặc nguồn gốc địa lý');
 const funnel=base(
  title(34,'SIZE GUIDE | SỐ LIỆU GIẢ ĐỊNH')+
  '<rect x="35" y="62" width="520" height="31" rx="5" fill="#9BC3C2"/>'+
  '<rect x="35" y="115" width="338" height="31" rx="5" fill="#6C97AF"/>'+
  '<rect x="35" y="168" width="322" height="31" rx="5" fill="#DEC3A3"/>'+
  note(564,83,'800 lượt mở')+note(387,135,'520 phiên rời sau đó')+
  note(374,188,'62% lượt mở từ mobile')+
  note(35,230,'Không biết nguyên nhân: cần phân nhóm, kiểm lỗi và dữ liệu định tính'),
  'Biểu đồ giả định về 800 lượt mở hướng dẫn chọn size và 520 phiên thoát, không phải dữ liệu COLORA');
 const imagery=
  '<div class="image-balance-pair"><figure><img src="./assets/gemstones-blue-real.webp" alt="Ảnh tham khảo trang sức và đá màu từ thư viện có sẵn" loading="lazy"/><figcaption>Ảnh tham khảo · chưa xác minh màu SKU</figcaption></figure>'+
  '<figure><img class="image-balance-shifted" src="./assets/gemstones-blue-real.webp" alt="Chính ảnh trên được xử lý màu mô phỏng, không phải ảnh viên đá thứ hai" loading="lazy"/><figcaption>Chính ảnh đó với filter giả lập</figcaption></figure></div>';
 function render(type){
  const types={'pear-section':depth,'light-performance':lights,'report-scope':report,'image-balance':imagery,'size-guide-funnel':funnel};
  return types[type]?'<div class="training-visual"><div class="training-visual-head">SƠ ĐỒ / HÌNH ẢNH HỌC TẬP MÔ PHỎNG · KHÔNG PHẢI HỒ SƠ SKU</div>'+types[type]+'</div>':'';
 }
 root.COLORA_VISUALS={render};
})(globalThis);
