function solution(record) {
  let answer = []
  const userInfo = {} // 변경할 정보

  answer = record
    .map(str => {
      const [command, uid, nick] = str.split(' ')
      if (['Enter', 'Change'].lastIndexOf(command) > -1) { userInfo[uid] = nick }
      return { command, uid, nick }
    })
    .filter(obj => obj.command !== 'Change')
    .map(filterdObj => {
      if (!userInfo.hasOwnProperty(filterdObj.uid)) { filterdObj.nick = userInfo[filterdObj.uid] }
      return `${userInfo[filterdObj.uid]}님이 ${filterdObj.command === 'Enter' ? '들어왔습니다.' : '나갔습니다.'}`
    })

  return answer
}

console.log(solution([
  "Enter uid1234 Muzi", 
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan"
])) 
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]