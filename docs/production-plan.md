# Dùng AI. Giữ nhân tính.

## Biên tập

Video editorial 66 giây, 1080×1920, 30fps, 1.980 khung hình. Đối tượng: người trẻ Công giáo Việt Nam. Luận điểm: dùng AI để hỗ trợ, giữ trách nhiệm và các tương quan ở nơi con người. Hook là câu hỏi nghịch lý giữa viết lời cầu nguyện và sống đức tin. Không dùng logo, màu nhận diện hoặc bố cục sao chép Vox.

Bản đọc dự kiến nằm trong cột lời dẫn; đây **chưa phải bản có giọng đọc**. Không có audio giọng người dùng hoặc TTS được cấp quyền. Các câu chữ trong hình phục vụ bản xem không tiếng; không tuyên bố đã đồng bộ phụ đề với giọng. Nhạc và điểm nhấn chuyển cảnh được tổng hợp từ đầu bằng `scripts/generate-score.py`, không dùng sample.

## Storyboard & kịch bản lời dẫn

| Thời gian | Lời dẫn dự kiến | Hình ảnh / cấu trúc | Chuyển động / chuyển cảnh |
|---|---|---|---|
| 00–03s | AI có thể viết lời cầu nguyện. Nhưng sống đức tin thay bạn thì sao? | Typography câu hỏi + thẻ hội thoại tự vẽ, trái tim coral; ý chính xuất hiện ngay khung đầu. Câu “Viết lời ≠ sống đức tin” vào ở 0,93s. | Card nghiêng từ −5° tới 1°; tim đập nhẹ. Wipe trái 0,4s. |
| 03–08s | Dịch tài liệu, gợi ý học tập, tìm ý tưởng: AI có thể hỗ trợ bạn. | Ba thẻ dịch thuật, sách, ý tưởng; lần lượt xuất hiện ở +0,2/+1,2/+2,2s. | Spring trượt ngang; slide từ dưới. |
| 08–13s | Công cụ có thể rất mạnh. Người chịu trách nhiệm vẫn là bạn. | Sơ đồ chip → người; hình người lớn hơn, nền lime; nhấn “Trách nhiệm không tự động hóa”. | Người bật lên +0,8s, kết luận +2,2s; crossfade. |
| 13–19s | Một hình ảnh thuyết phục chưa chắc là bằng chứng. Đừng vội chia sẻ. | Một bài đăng hoàn toàn giả lập; icon người trừu tượng, scanline và dấu CHƯA KIỂM CHỨNG. Gắn nhãn mô phỏng. | Stamp coral +2,2s; wipe xuống. Không giả mạo người thật. |
| 19–25s | Tìm nguồn gốc, đọc ngữ cảnh, đối chiếu nguồn đáng tin trước khi chia sẻ. | Timeline dọc 3 bước: nguồn gốc → ngữ cảnh → đối chiếu. Không phải dữ liệu thống kê. | Đường timeline kéo dài; mỗi bước cách ~1,1s; slide ngang. |
| 25–31s | Hỏi gợi ý, tự giải thích, rồi tự viết. Đừng giao cả việc suy nghĩ cho máy. | So sánh prompt giao hết bài với prompt xin gợi ý; gạch bỏ câu đầu. Chuỗi Tự hiểu → Tự viết. | Gạch coral ở +1,1s; prompt mới +1,8s; wipe từ dưới. |
| 31–37s | Đừng đưa mật khẩu, hồ sơ riêng hay câu chuyện của người khác lên chatbot. | Ổ khóa lớn ở giữa; thẻ mật khẩu, hồ sơ và chuyện người khác tách ba vị trí. | Thẻ xuất hiện lần lượt; crossfade vào cảnh tĩnh hơn. |
| 37–43s | AI có thể gợi ý câu chữ. Cầu nguyện là cuộc gặp gỡ của chính bạn với Chúa. | Nến và thánh giá minh họa gốc, điện thoại mờ dần; không ảnh thánh hay ảnh nghi lễ. | Ngọn lửa dao động nhẹ, vòng sáng thở chậm; crossfade. |
| 43–49s | Một tin nhắn không thay được mọi cuộc gặp. Hãy đến với gia đình và cộng đoàn. | Minh họa ba người ngồi quanh bàn; ghế, mặt bàn, đường nối tạo hình từ SVG gốc. | Ba người vào lần lượt; nhãn Gia đình / Bạn bè / Cộng đoàn xuất hiện cuối; slide lên. |
| 49–55s | Thăm người già, giúp bạn học, phục vụ người khó khăn. Biến ý tốt thành việc thật. | Ba tấm postcard lệch góc: thăm người già, giúp bạn học, phục vụ người khó khăn. | Card xuất hiện ~1,3s một lần; wipe trái. |
| 55–60s | Có đúng không? Có tôn trọng con người không? Có phục vụ điều thiện không? | Checklist ba câu hỏi lớn; mỗi dấu kiểm vào sau câu hỏi. | Spring mềm; crossfade. |
| 60–66s | Hôm nay, kiểm chứng một tin. Tắt màn hình một lúc. Làm một việc bác ái. | Typography lớn “Dùng AI. Giữ nhân tính.”; ba hành động cụ thể và credit chuyển thể. | Ba dòng vào +0,7/+1,7/+2,7s; kết thúc giữ chữ, nhạc fade 2s. |

Các mốc là điểm bắt đầu cảnh trên master timeline. 11 chuyển cảnh chồng 12 frame (0,4s); mỗi cảnh trừ cảnh cuối có thêm 12 frame đuôi. Tổng 2.112 frame cảnh −132 frame overlap = 1.980 frame. Nhạc có accent tại 0, 3, 8, 13, 19, 25, 31, 37, 43, 49, 55, 60s.

## Kiểm chứng và quyết định biên tập

- Không dùng các con số hoặc kết luận y khoa/việc làm của bài gốc: không cần thiết cho video ngắn và chưa có nguồn cụ thể.
- Không dùng hoặc gán trích dẫn cho “Magnifica Humanitas”: chưa xác minh được văn bản, đoạn trích và chú thích [1]–[7] không được cung cấp. Không kết luận văn kiện có hay không tồn tại.
- `Antiqua et Nova` là tài liệu nền để người xem tra cứu thêm, không trích nguyên văn hoặc tuyên bố đã truy xuất trực tiếp trong phiên này: https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_ddf_doc_20250128_antiqua-et-nova_en.html . Truy cập hiện trả 403.
- Bài gốc ghi “Thứ 7” ở mở đầu nhưng “Thứ 6” ở cuối cho cùng 17/07/2026. Ngày này là thứ Sáu; bỏ lịch sự kiện để tránh gây nhầm lẫn và vì không liên quan luận điểm.
- Không đưa số phép lạ, tiểu sử Carlo Acutis hoặc phát biểu nguyên văn của giáo hoàng vào bản dựng.
- “AI có thể hỗ trợ dịch, học tập, tìm ý tưởng” là mô tả khả năng có giới hạn, không hứa độ chính xác. Cảnh tiếp theo yêu cầu kiểm tra kết quả.
- Nội dung cầu nguyện, cộng đoàn và bác ái là lời khuyên mục vụ chuyển thể từ bài người dùng cung cấp; không trình bày như tuyên bố chính thức của Giáo hội.

## Tham khảo ngôn ngữ dựng và giới hạn truy cập

Điểm tham chiếu editorial: Vox, “Why all world maps are wrong”, https://www.youtube.com/watch?v=kIID5FDi2JQ . Chỉ tham khảo nguyên lý đặt một câu hỏi rõ, dùng hình để giải thích giới hạn và đưa ra reveal. Không lấy video, audio, thumbnail, bản đồ hay nhận diện của họ. Đây là video giải thích dài, không dùng làm bằng chứng cho hiệu quả của một short.

YouTube bị chặn 403 trong phiên này nên chưa thể xem lại hoặc xác minh số liệu tương tác của các short thành công. Không tuyên bố đã nghiên cứu dữ liệu viral. Bản dựng áp dụng các cơ chế biên tập có thể đánh giá trực tiếp: hook ngay 3s đầu, thay đổi visual grammar theo luận điểm, reveal nội cảnh sau 1–3s, tương phản rõ và CTA có thể thực hiện. Yêu cầu nghiên cứu trực tiếp các short tham khảo vẫn còn giới hạn bởi truy cập mạng.

## QA và âm thanh

Giữ chữ chính trong x=90–960, vùng top ≥100 và bottom ≥150; chữ dẫn ở ~235px trên đáy, tránh điều khiển dọc bên phải. Dùng font DejaVu có dấu tiếng Việt, được đóng gói cục bộ. Cảnh tin giả có nhãn minh họa. Không remote media, không mạng khi render. Chuyển động chạy bằng frame, không CSS animation.

Kiểm tra bắt buộc: `npm run validate`, `npm run typecheck`, `npm run render`, `ffprobe`, giải mã toàn bộ bằng FFmpeg và xem 12 ảnh đại diện. Chi tiết kết quả sau render ở `docs/qa-report.md`.
