# QA — Dùng AI. Giữ nhân tính.

## Nội dung và hình ảnh

- Đã kiểm tra 12 khung đại diện tại frame 50, 200, 350, 510, 690, 870, 1050, 1230, 1410, 1590, 1740, 1910; xem ảnh tổng hợp `out/qa-contact-sheet.jpg`.
- Chữ tiếng Việt đúng dấu; nội dung chính không bị cắt hoặc tràn khỏi khung. Mỗi cảnh có bố cục riêng; hình tin giả được ghi rõ mô phỏng.
- Không có ảnh/video hotlink, không tư liệu Vox được tái sử dụng. Icon và font có thông báo giấy phép trong nguồn.
- Không dùng trích dẫn giáo hoàng hoặc số liệu chưa kiểm chứng. Giới hạn nghiên cứu tham khảo YouTube/Vatican đã ghi trong storyboard.
- Có nhạc và accent tổng hợp gốc. Không có giọng đọc; chưa đồng bộ phụ đề với giọng.

## Cài đặt và kiểm tra

- `npm ci` thành công từ `package-lock.json`.
- `npm run validate`: 12 cảnh, 11 transition chồng 12 frame, tổng 1.980 frame / 66 giây; media và font cục bộ đầy đủ.
- `npm run typecheck`: thành công.
- Studio và 12 ảnh tĩnh render thành công trong Chromium.
- Bản render đầu phát hiện `yuvj420p` full-range dù đặt pixel-format. Không bỏ kiểm tra. Sửa bằng `--color-space=bt709`; thử 2 frame xác nhận `yuv420p`, `color_range=tv`, `color_space=bt709` trước khi render lại.

## Video cuối tại máy hiện tại

- `npm run render`: thành công với `--color-space=bt709`.
- `node scripts/verify-output.mjs`: thành công; H.264, yuv420p, BT.709 limited range, 1080×1920, 30fps, 1.980 khung hình; AAC.
- Thời lượng container: 66,005 giây (video 66 giây; có padding AAC).
- `ffmpeg -v error -i out/vox-short.mp4 -f null -`: giải mã toàn bộ thành công, không lỗi.
- Đã xem thêm ảnh giải mã từ MP4 cuối tại giây thứ 7 để kiểm tra màu và chữ.
- SHA-256: `8903d10f48eef33496421a79f07f49a570960b0cfd9348754e7267cda2dc2898`.

## GitHub Actions

Lần chạy **Render MP4 #2: Success**, commit `f47c7a0`, nhánh `codex/ai-faith-short`:
https://github.com/huykhoi6320-sys/vox-motion-studio/actions/runs/39004337690

Hai artifact đã hiện trên trang kết quả:

- `vox-short-mp4`: 7,07 MB; artifact ID 12090590861.
- `vox-short-source`: 1,46 MB; artifact ID 12089868623.

Workflow đã chạy kiểm tra dữ liệu, TypeScript, render, ffprobe và giải mã toàn bộ trước khi upload. Cần đăng nhập GitHub và có quyền truy cập repo để tải ZIP từ mục Artifacts. Artifact có thời hạn 30 ngày. Kích thước/hash video trên runner khác máy hiện tại là bình thường do phiên bản Chromium/FFmpeg khác nhau; cả hai phải đạt cùng kiểm tra định dạng và số khung hình. Bản source artifact thuộc commit render; bản ZIP đính kèm cục bộ có thêm báo cáo QA và lời dẫn sau khi xác minh kết quả.
