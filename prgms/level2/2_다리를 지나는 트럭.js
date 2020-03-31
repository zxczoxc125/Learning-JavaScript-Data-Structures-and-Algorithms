function solution(bridge_length, weight, truck_weights) {
  const completeStack = [];
  const truckCnt = truck_weights.length;
  let bridge = new Array(bridge_length).fill(1);
  let timeCnt = 0;
  let bridgeTotalWeight;

  while (completeStack.length !== truckCnt) {
    const truckWeight = truck_weights[0]; // 맨 앞 대기 트럭
    
    if (timeCnt) {
      if (bridge[0]) { // 도착 직전 위치가 트럭이라면
        completeStack.push(bridge[0]);
        bridgeTotalWeight -= bridge.shift();
        bridge.push(0);
      } else {
        bridge.push(bridge.shift()); // 다리 좌표 1칸씩 움직임
      }
    } else { // 다리 좌표 초기화
      bridge.fill(0);
      bridgeTotalWeight = 0;
    }

    // if (bridge.reduce((a, b) => a + b) + truckWeight <= weight) { // 다리 위의 총합 + 현재 트럭 <= 제한무게 --> 대기트럭에서 빼고, 다리에 넣는다.
    if (bridgeTotalWeight + truckWeight <= weight) { // 다리 위의 총합 + 현재 트럭 <= 제한무게 --> 대기트럭에서 빼고, 다리에 넣는다.
      const nextTruckWeight = truck_weights.shift();
      bridge[bridge.length - 1] = nextTruckWeight;
      bridgeTotalWeight += nextTruckWeight;
    }
    timeCnt++;
  }

  return timeCnt;
}

// 딱 하나 케이스에서 시간 오류가 났는데, 다리 위의 총합을 매 while마다 계산할 필요가 없었다. --> 변화가 있을때만 계산해줌