---
Task ID: photo-drop-zone-integration
Agent: Main Agent
Task: Integrate Photo Drop Zone into Leak Agent AI, Lead Form, Hero section, and Backend Vision API

Work Log:
- Read all 4 target files (leak-agent.tsx, page.tsx, globals.css, api/chat/route.ts) for full context
- Updated /api/chat/route.ts: Added Vision API support — accepts `image` field in messages, constructs multimodal content arrays with type:text + type:image_url for user messages with photos
- Updated leak-agent.tsx: Added photo state management (photoPreview, photoBase64), drag-and-drop handler, file input for camera/gallery, photo drop zone above chat input with Safety Yellow dashed border + camera icon, photo thumbnails in message bubbles, updated welcome message with photo analysis bullet, ImagePlus icon on send button when photo attached
- Updated page.tsx: Restructured MultiStepPopup (Step 1: Name, Step 2: Photo Drop Zone NEW, Step 3: Contact & Issue), added CONTINUE (PHOTO ADDED) and SUBMIT (PHOTO ADDED) button text when photo detected, added Hero Drop Zone below CTA row with dashed border + icons + TAKE A PEEK (SMS) button, added shared heroPhoto state for UI Sync (hero drop auto-opens popup with photo pre-populated), added initialPhoto prop to MultiStepPopup
- Updated globals.css: Added .leak-agent-photo-drop, .leak-agent-photo-prompt, .leak-agent-photo-preview-row, .leak-agent-photo-preview-img, .leak-agent-photo-clear, .leak-agent-photo-thumb, .hero-drop-zone styles
- Build passes successfully, dev server running on port 3000

Stage Summary:
- All 4 areas implemented: Leak Agent photo drop, Lead Form photo step, Hero drop zone, Backend Vision API
- Photo flow: Hero Drop Zone → auto-opens popup with photo pre-populated → user fills name → sees photo in Step 2 → continues to contact → submits with photo
- Chat flow: User drops/selects photo in drop zone above input → photo thumbnail appears → send with message → backend processes via Vision API → AI analyzes and responds
- Build: Compiled successfully
