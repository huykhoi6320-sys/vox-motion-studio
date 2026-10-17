# Dùng AI. Giữ nhân tính.

Video editorial tiếng Việt dài 66 giây về người trẻ Công giáo và AI. 1080×1920, 30fps, H.264/yuv420p + AAC. Có nhạc tổng hợp gốc; **chưa có giọng đọc**. Chữ trong hình là chữ dẫn biên tập, chưa phải phụ đề căn theo giọng.

## Chạy cục bộ

Node.js ≥20, Chromium/Chrome và FFmpeg/ffprobe.

```sh
npm ci
npm run validate
npm run typecheck
npm run studio
npm run render
```

Kết quả: `out/vox-short.mp4`. Cấu hình tự tìm Chromium/Chrome, hoặc đặt `REMOTION_BROWSER_EXECUTABLE` tới trình duyệt của bạn. Nếu không có, dùng `npx remotion browser ensure`. Chạy từ thư mục gốc của repo. Sử dụng checkout hiện có; không cần worktree mới.

- Mã nguồn chính: `src/`, 12 component cảnh riêng trong `src/scenes/`; mỗi cảnh có composition riêng trong Studio.
- Nội dung và lời dẫn dự kiến: `projects/demo/project.json`.
- [Kịch bản và storyboard](docs/production-plan.md).
- [Nguồn hình ảnh và quyền sử dụng](docs/asset-manifest.csv); giấy phép trong `public/assets/licenses/`.
- Tái tạo nhạc: `python3 scripts/generate-score.py` (cần FFmpeg). File nhạc đã được đóng gói, không cần tạo lại để render.
- Ảnh kiểm tra: `node scripts/qa-frames.mjs`.
- [Báo cáo QA](docs/qa-report.md).

## GitHub Actions Artifacts

Workflow `.github/workflows/render.yml` có tên **Render MP4**, chạy khi push mã liên quan và có `workflow_dispatch` sau khi workflow được đưa lên nhánh mặc định. Mở **Actions → Render MP4 → lần chạy thành công → Artifacts → vox-short-mp4**. GitHub tải về một ZIP chứa `vox-short.mp4`; cần đăng nhập và có quyền truy cập repo. Artifact giữ 30 ngày. Có artifact nguồn riêng tên `vox-short-source`.

Không cần API key để render. Actions phải được bật cho repo và tài khoản cần có quota phù hợp. Workflow kiểm tra dữ liệu, TypeScript, render, ffprobe và giải mã video trước khi tải artifact.

## Ghi chú nội dung

Chuyển thể từ tài liệu người dùng cung cấp, ghi tên Lm Phêrô Trần Mạnh Hùng, STD. Không dùng trích dẫn giáo hoàng chưa kiểm chứng; không là văn kiện chính thức của Giáo hội. Không dùng logo, tư liệu hay nhận diện Vox. Không có ảnh người thật hoặc tư liệu bên thứ ba ngoài icon/font đã ghi giấy phép. Nghiên cứu trực tiếp video ngắn tham khảo bị giới hạn bởi truy cập YouTube; xem storyboard để biết điều gì đã và chưa được xác minh.
