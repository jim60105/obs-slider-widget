# OBS 垂直進度條小工具 <https://slider.obs.琳.tw/>

一個適用於 `OBS Studio` 瀏覽器來源的垂直進度條小工具，把質感進度條搬進你的直播畫面。

<!-- TODO: Add preview video/screenshot -->
<!-- [preview.webm](https://github.com/user-attachments/assets/PLACEHOLDER) -->

## 功能

- 🎨 進度條小工具
- 📊 可自訂標題文字與標題尺寸
- 🔢 總數值與進度值控制（含 ±步進按鈕）
- 🎨 主題色彩選擇器
- 📝 狀態尺寸調整
- ✏️ Google Fonts 字型自訂
- 💾 命名預設儲存／載入／刪除（localStorage）
- 🔄 多實例支援（`?instance=` URL 參數）
- ↔️ 面板翻轉功能
- 🎭 OBS 自動偵測與透明背景
- ⚡ 控制項與顯示即時同步
- 📐 垂直文字顯示

## 展示

<!-- TODO: Add screenshot -->
<!-- <img width="1192" height="667" alt="screenshot" src="https://github.com/user-attachments/assets/PLACEHOLDER" /> -->

## 頁面說明

本專案為單頁式設計，`index.html` 同時包含 **控制面板** 和 **進度條小工具顯示**：

- **左側控制面板**：可即時調整所有設定項目，包含標題、數值、色彩、字型、預設管理等
- **右側顯示區域**：即時呈現進度條小工具效果
- **OBS 模式**：在 OBS 瀏覽器來源中載入時，自動偵測 OBS 環境，將顯示區域切換為透明背景，方便疊加在直播畫面上

## 使用方式

### 1. 加入 OBS

1. 在 `OBS Studio` 中新增一個 **瀏覽器來源（Browser Source）**，尺寸 2000x800（或依需求調整）
2. 將網址 `https://slider.obs.琳.tw/` 貼入 URL 欄位
3. 如需多實例，可在網址後加上 `?instance=your-name` 參數
4. 調整位置使得小工具顯示在畫面適當位置，同時讓控制面板維持在可視窗口之外的範圍  
   適當的新增尺寸寬度，或是按 ⇄ 面板翻轉按鈕，讓控制面板顯示在另一側

<!-- TODO: Add screenshot of OBS browser source setup -->

### 2. 設定您的小工具

1. 在 OBS 中對該瀏覽器來源按右鍵，選擇 **互動（Interact）**
2. 在左側控制面板中調整標題文字、數值範圍、主題色彩、字型及版面配置
3. 右側顯示區域會即時反映所有變更

<!-- TODO: Add screenshot of control panel -->

### 3. 儲存預設

1. 在預設名稱欄位輸入一個名稱
2. 點選儲存按鈕，將目前設定存入 localStorage
3. 日後可隨時載入或刪除已儲存的預設

<!-- TODO: Add screenshot of preset management -->

## URL 參數

| 參數       | 類型     | 說明                                                                                 |
| ---------- | -------- | ------------------------------------------------------------------------------------ |
| `instance` | `string` | localStorage 命名空間隔離，可同時執行多個獨立的小工具實例（例如：`?instance=goals`） |

## 技術棧

- **HTML5**（語意化標記）
- **Tailwind CSS**（CDN，樣式）
- **Vanilla JavaScript（ES6+）**（功能實作）
- 無需建構步驟，純靜態檔案

## 專案結構

```text
obs-slider-widget/
├── index.html    # 單頁應用程式（控制面板 + OBS 小工具）
├── LICENSE       # AGPL-3.0 授權條款
├── README.md     # 本檔案
└── openspec/     # OpenSpec 規格文件
```

## 開發

### 先決條件

- 現代的網頁瀏覽器
- 本機網頁伺服器（例如：`npx serve`、VS Code Live Server、或 Python 的 `http.server`）

### 在本機執行

```bash
# 使用 npx serve
npx serve .

# 或使用 Python
python -m http.server 8000
```

## 授權

<img src="https://github.com/user-attachments/assets/ad34de93-c0fb-4a76-a006-48a8b4d8b263" alt="agplv3" width="300" />

[GNU AFFERO GENERAL PUBLIC LICENSE Version 3](./LICENSE)

Copyright © 2026 Jim Chen <Jim@ChenJ.im>。

本程式為自由軟體：您可以依據由自由軟體基金會發布的 GNU Affero 通用公共授權條款（第 3 版，或您選擇的任何後續版本）重新發佈及／或修改本程式。

本程式以期望其有用而發佈，但不提供任何保證；甚至不包含對適銷性或特定用途適用性的默示保證。詳情請參閱 GNU Affero 通用公共授權條款。

您應已隨本程式收到一份 GNU Affero 通用公共授權條款副本。如果沒有，請參見 <https://www.gnu.org/licenses/>。
