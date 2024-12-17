// 列車の移動設定
const train = document.getElementById('train');
const warningMessage = document.getElementById('warning-message');
const trainSound = document.getElementById('train-sound');

// 列車の速度 (秒単位)
let trainSpeed = 5; // 列車が移動する時間 (秒)

// 列車の最大接近状態に到達する速度 (短い時間で完了)
let maxSpeed = 1; // 最速のスピードに変更するまでの時間 (秒)

// 初期の列車移動時間
let currentSpeed = trainSpeed;

// 列車の移動アニメーション
function moveTrain() {
  let position = -120;
  let interval = setInterval(() => {
    position += 5;
    train.style.left = `${position}px`;

    // 接近するにつれてスピードと色を変化させる
    if (position > window.innerWidth - 120) {
      currentSpeed = maxSpeed;  // 接近するごとに速度を上げる
      train.style.backgroundColor = "#FF0000";  // 列車の色を赤に変更
      warningMessage.style.display = "block";  // 警告メッセージ表示
      trainSound.play();  // 警告音再生
    }
    if (position > window.innerWidth) {
      clearInterval(interval);  // 列車が画面外に出たら移動停止
    }
  }, currentSpeed * 100);
}

// 列車のアニメーション開始
moveTrain();
