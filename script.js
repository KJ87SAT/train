// 列車情報
const trainName = "急行列車01号";
const trainLine = "東海道線";
const nextStation = "東京";
const stations = ["品川", "新横浜", "名古屋", "京都", "大阪"];  // 停車駅リスト
let timeUntilArrival = 30; // 初期接近時間（秒）
let remainingStations = stations.length;  // 停車駅の数

const trainSound = document.getElementById("train-sound");
const trainNameElement = document.getElementById("train-name");
const trainLineElement = document.getElementById("train-line");
const nextStationElement = document.getElementById("next-station");
const remainingStationsElement = document.getElementById("remaining-stations");
const timerElement = document.getElementById("timer");
const warningLight = document.getElementById("warning-light");

// 列車情報の更新
function updateTrainInfo() {
  trainNameElement.textContent = `列車名: ${trainName}`;
  trainLineElement.textContent = `路線: ${trainLine}`;
  nextStationElement.textContent = `次の駅: ${nextStation}`;
  remainingStationsElement.textContent = `停車駅: ${stations.join(' → ')}`;
}

// カウントダウンの更新
function countdownTimer() {
  let interval = setInterval(() => {
    timeUntilArrival--;
    timerElement.textContent = timeUntilArrival;

    // 接近時間が10秒を切ると警告灯と音を変更
    if (timeUntilArrival <= 10) {
      warningLight.style.backgroundColor = "#ff0000";  // 警告灯を赤に変更
      trainSound.play();  // 警告音を再生
    }

    // 到着時
    if (timeUntilArrival <= 0) {
      clearInterval(interval);
      timerElement.textContent = "到着しました！";
      warningLight.style.backgroundColor = "#00ff00";  // 緑色に変更
      nextStationElement.textContent = "列車が到着しました";
      remainingStationsElement.textContent = "全駅通過しました";
    }
  }, 1000);
}

// 初期設定の実行
function startTrainApproach() {
  updateTrainInfo();
  countdownTimer();
}

// 列車接近の開始
startTrainApproach();
