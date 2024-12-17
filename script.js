// 列車情報の設定
const trainName = "急行列車01号";
const trainLine = "東海道新幹線";
const nextStation = "名古屋";
const stations = ["品川", "新横浜", "名古屋", "京都", "大阪"];  // 停車駅リスト

// 初期設定
let timeUntilArrival = 30;  // 接近までの秒数
let remainingStations = stations.length;  // 停車駅の数

const trainSound = document.getElementById("train-sound");
const trainNameElement = document.getElementById("train-name");
const trainLineElement = document.getElementById("train-line");
const nextStationElement = document.getElementById("next-station");
const remainingStationsElement = document.getElementById("remaining-stations");
const trainApproachingElement = document.getElementById("train-approaching");
const timerElement = document.getElementById("timer");
const warningLight = document.getElementById("warning-light");

// 列車情報の表示
function updateTrainInfo() {
  trainNameElement.textContent = `列車名: ${trainName}`;
  trainLineElement.textContent = `路線: ${trainLine}`;
  nextStationElement.textContent = `次の駅: ${nextStation}`;
  remainingStationsElement.textContent = `停車駅: ${stations.join(' → ')}`;
}

// タイマーのカウントダウン
function countdownTimer() {
  let interval = setInterval(() => {
    timeUntilArrival--;
    timerElement.textContent = timeUntilArrival;

    // 10秒前に警告音と警告灯を変更
    if (timeUntilArrival <= 10) {
      warningLight.style.backgroundColor = "#ff0000";  // 警告灯を赤に
      trainSound.play();  // 警告音を再生
      trainApproachingElement.style.display = "block";
    }

    // 到着時
    if (timeUntilArrival <= 0) {
      clearInterval(interval);
      timerElement.textContent = "到着しました！";
      warningLight.style.backgroundColor = "#00ff00";  // 緑に変更
      trainApproachingElement.textContent = "列車が到着しました！";
      nextStationElement.textContent = "次の駅: 到着";
      remainingStationsElement.textContent = "停車駅: 終点";
    }
  }, 1000);
}

// 列車接近の開始
function startTrainApproach() {
  updateTrainInfo();
  countdownTimer();
}

// 初期設定の実行
startTrainApproach();
