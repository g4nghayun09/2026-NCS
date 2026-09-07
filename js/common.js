// ../js/common.js 경로임.

/**
 * 부가세를 계산해서 리턴하는 함수
 * @param {*} productPrice
 * @returns
 */
function taxAmount(productPrice) {
  let tax = 0.1;
  return productPrice * tax;
}

/**
 * 우리 나라 5대 부자를 리턴
 * @returns
 */
function getTop5() {
  return ['이재용', '윈터', '손흥민', '류현진', '강하윤'];
}

/**
 * 귀요미
 * @returns
 */
function cutie() {
  return '아잉';
}

/**
 * 9. getIntervalDate() 오늘을 기준으로 며칠 전, 후를 구하는 함수
 * @returns
 */
function getIntervalDate(dates) {
  let now = new Date();
  // 현재 시간 가지고 오기 + dates 더하기
  let rightNow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + dates);
  console.log((rightNow.getMonth() + 1).toString().padStart(2, 0) + '/' + rightNow.getDate().toString().padStart(2, 0));
}

/**
 * 10. getIntervalDateFormat() 오늘을 기준으로 며칠 전, 후를 일정한 형식으로 구하는 함수
 * @returns
 */
function getIntervalDateFormat(dates, present) {
  let arr = present.toString().split('-');
  let now = new Date();
  // 현재 시간 가지고 오기 + dates 더하기
  let rightNow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + dates);
  // 년도가 4자리이면
  if (arr[0].length == 4) {
    console.log(
      rightNow.getFullYear() +
        '-' +
        (rightNow.getMonth() + 1).toString().padStart(2, 0) +
        '-' +
        rightNow.getDate().toString().padStart(2, 0),
    );
  }
  // 년도가 2자리이거나 나머지 - 년도에 slice 차이
  else {
    console.log(
      rightNow.getFullYear().toString().slice(2, 4) +
        '-' +
        (rightNow.getMonth() + 1).toString().padStart(2, 0) +
        '-' +
        rightNow.getDate().toString().padStart(2, 0),
    );
  }
}

/**
 * 11. 함수 : getIntervalDateFormat2() 오늘을 기준으로 며칠 전, 후를 정해진 포맷으로 구하는 함수 
  (기호에 관계없이)
 * @returns
 */
function getIntervalDateFormat2(dates, present) {
  let divisor;
  if (present.length == 8) {
    divisor = present.charAt(2);
  } else {
    divisor = present.charAt(4);
  }
  let arr = present.toString().split(divisor);
  let now = new Date();
  let rightNow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + dates);
  let str = '';
  if (arr[0].length == 4) {
    str =
      rightNow.getFullYear() +
      divisor +
      (rightNow.getMonth() + 1).toString().padStart(2, 0) +
      divisor +
      rightNow.getDate().toString().padStart(2, 0);
  } else {
    str =
      rightNow.getFullYear().toString().slice(2, 4) +
      divisor +
      (rightNow.getMonth() + 1).toString().padStart(2, 0) +
      divisor +
      rightNow.getDate().toString().padStart(2, 0);
  }

  return str;
}
// min과 max의 값중 임의의 수를 발생시키는 함수 getRandomInteger(min, max) 작성. 오직 양정수만
function getRandomInteger(min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}
