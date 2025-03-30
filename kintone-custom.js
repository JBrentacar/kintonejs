(function() {
  "use strict";
  
  // レコード詳細画面が表示されたときのイベント
  kintone.events.on('app.record.detail.show', function(event) {
    // すでにボタンが存在する場合は再度追加しない
    if (document.getElementById('custom_button')) {
      return event;
    }
    
    // カスタムボタンを作成
    var customButton = document.createElement('button');
    customButton.id = 'custom_button';
    customButton.innerText = 'カスタム処理実行';
    
    // ボタンがクリックされたときの処理
    customButton.onclick = function() {
      alert('カスタムボタンがクリックされました！');
    };
    
    // ヘッダー領域にボタンを追加（ボタンを設置する場所は自由に変更可能）
    var headerSpace = kintone.app.record.getHeaderMenuSpaceElement();
    if (headerSpace) {
      headerSpace.appendChild(customButton);
    }
    
    return event;
  });
})();
