/**
 * Touch vs. Mouse: Interaction Normalization Lab
 * 
 * 學員任務：
 * 1. 實作 getPosition(e) 函式，確保能同時處理 MouseEvent 與 TouchEvent。
 * 2. 實作萬用按鈕邏輯，徹底消除行動端 300ms 延遲並防止「幽靈點擊」。
 * 3. 實作滾動鎖定，確保在操作滑桿時背景不會隨之捲動。
 */

/**
 * [任務 1] 萬用座標解析器 (Universal Position Helper)
 * 
 * @param {Event} e - 事件物件 (可能是 MouseEvent 或 TouchEvent)
 * @returns {Object} { x, y } - 標準化的座標
 */
function getPosition(e) {
    // TODO: 判斷 e 是否包含 touches 陣列
    // 如果是 TouchEvent，使用 e.touches[0].clientX / clientY
    // 如果是 MouseEvent，使用 e.clientX / clientY
    
    let x = 0;
    let y = 0;

    // --- 實作開始 ---
    
    // --- 實作結束 ---

    return { x, y };
}

/**
 * [任務 2] 打造全平台萬用按鈕 (Omni-Button)
 */
const btn = document.getElementById('omni-button');

// TODO: 監聽 'touchstart'
btn.addEventListener('touchstart', (e) => {
    // 1. 執行主要邏輯
    console.log("Omni-Button: Touch Started!");
    
    // 2. 使用 preventDefault() 斬斷後續的 mousedown/click 鍊條 (防止幽靈點擊)
    // --- 實作開始 ---

    // --- 實作結束 ---
});

// TODO: 監聽 'mousedown' (為滑鼠使用者保留)
btn.addEventListener('mousedown', (e) => {
    // 如果是滑鼠觸發，執行邏輯
    console.log("Omni-Button: Mouse Down!");
});


/**
 * [任務 3] 被動監聽器與滾動鎖定 (Interaction Locking)
 */
const slider = document.getElementById('precision-slider');

// TODO: 監聽 'touchmove' 並設定 { passive: false }
// 確保在拖曳滑桿時，背景頁面不會捲動
slider.addEventListener('touchmove', (e) => {
    // --- 實作開始 ---

    // --- 實作結束 ---
});


/**
 * [額外優化] 屏蔽右鍵選單與點擊高亮
 */
document.addEventListener('contextmenu', (e) => {
    // TODO: 防止行動端長按跳出系統選單
    // e.preventDefault();
});
