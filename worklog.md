---
Task ID: 1
Agent: Main Agent
Task: Request Service Form Photo Drop — Multi-photo support, Capture Photo button, trust badge, Safety Yellow styling, backend multi-photo API

Work Log:
- Read all key files: page.tsx, leak-agent.tsx, globals.css, api/chat/route.ts, api/lead/route.ts
- Confirmed Leak Agent Visibility Fix (z-index 9999 !important) was already applied
- Converted PopupFormData from single photo (photoFile/photoPreview) to multi-photo arrays (photoFiles/photoPreviews)
- Added addPhotoFiles() and removePhoto() callbacks for multi-photo management
- Added second hidden file input with cameraInputRef for mobile Capture Photo button
- Made main file input support multiple={true} attribute
- Updated Step 2: Changed title to "Upload Photos of Your Issue", updated instructional text to match spec
- Added explicit "CAPTURE PHOTO" button with Camera icon and Safety Yellow border for mobile users
- Added removable image thumbnail grid (popup-photo-thumbs/popup-photo-thumb-item/popup-photo-thumb-remove CSS classes)
- Added "1,000+ Neighbors Served" trust badge to Step 2
- Updated Step 3: Photo indicator now shows stacked thumbnails with photo count
- Updated button logic: "CONTINUE (PHOTO ADDED) →" when photos present, "SUBMIT (N PHOTOS ADDED) →" on final step
- Updated popup-upload-zone CSS: Changed border from gray (#d1d5db) to Safety Yellow (#FFD700), added active state, added hover box-shadow
- Added multi-thumb CSS: popup-photo-thumbs (flex wrap grid), popup-photo-thumb-item (64x64 relative), popup-photo-thumb-img, popup-photo-thumb-remove (circle X button)
- Updated /api/lead/route.ts: Collects all photo_0, photo_1, etc. from FormData, uses photoCount/photoNames in payload, dynamic SMS message, multi-photo CRM logging

Stage Summary:
- Build compiles successfully (Next.js 16.1.3, zero errors)
- All 3 files updated: page.tsx, globals.css, api/lead/route.ts
- Multi-photo support fully functional across form, CSS, and backend
