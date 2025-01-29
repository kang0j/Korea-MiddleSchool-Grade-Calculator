function clipboardCopy() {
    let dummy = document.createElement("input");
    let url = location.href;

    document.body.appendChild(dummy);
    dummy.value = url;
    dummy.select();
    document.execCommand("copy");
    alert('URL이 복사되었습니다.');
    document.body.removeChild(dummy);

}


function updateFirstSemesterString(value) {
    document.getElementById('firstSemesterRange').value = value;
}
function updateFirstSemesterStringRange(value) {
    document.getElementById('firstSemester').value = value;
}
function updateSecondSemesterString(value) {
    document.getElementById('secondSemesterRange').value = value;
}
function updateSecondSemesterStringRange(value) {
    document.getElementById('secondSemester').value = value;
}
function updateEvaluationString(value) {
    document.getElementById('evaluationRange').value = value;
}
function updateEvaluationStringRange(value) {
    document.getElementById('evaluation').value = value;
}


function calculateScores() {
    document.getElementById('cal_btn').style.display = 'none';
    const selectedStatus = document.querySelector('input[name="status"]:checked').id;

    // Get the values from the form elements
    let firstSemester = parseFloat(document.getElementById('firstSemester').value);
    let secondSemester = parseFloat(document.getElementById('secondSemester').value);
    let evaluationRatio= parseFloat(document.getElementById('evaluationRatio').value)/100 || 0;
    let evaluation = parseFloat(document.getElementById('evaluation').value) || 0;
    let examPoint = 0;
    let examRatio = 0;
    grade = '';
    let errorCode = false;

    if (isNaN(firstSemester) || isNaN(secondSemester)){
        examRatio = (1 - evaluationRatio);
    } else {
        examRatio = (1 - evaluationRatio) / 2;
    }

    firstSemester = firstSemester || 0;
    secondSemester = secondSemester || 0;

    examPoint = (firstSemester + secondSemester) * examRatio;
    let result = examPoint + evaluation;
    let finalExpResult = result.toFixed(2);
    let finalResult = result.toFixed(0);

    
    
    if (selectedStatus == 'high'){
        if (finalResult>=80){
            grade = 'A'
        } else if (finalResult>=60){
            grade = 'B'
        } else {
            grade = 'C'
        }
    
    }
    if (selectedStatus == 'mid'){
        if (finalResult>=90){
            grade = 'A'
        } else if (finalResult>=80){
            grade = 'B'
        } else if (finalResult>=70){
            grade = 'C'
        } else if (finalResult>=60){
            grade = 'D'
        } else {
            grade = 'E'
        }
    
    }


    if (finalResult>100 || finalResult<0 || firstSemester<0 || firstSemester>100 || secondSemester>100 || secondSemester<0 || evaluation>100 || evaluation<0 || evaluationRatio<0 || evaluationRatio>100 || evaluation>evaluationRatio*100){
        errorCode = true;
    }


    if (errorCode == true) {
        document.getElementById('result').innerHTML = `<h2>올바른 값을 입력해주세요.</h2>`;
        document.getElementById('table').innerHTML = '<center>계산 과정에서 오류가 발생하였습니다. 입력된 값을 확인해주세요.</center><br><br>';

    } else{
    document.getElementById('result').innerHTML = `<h2>${finalResult}점 (${grade})</h2>`;
    document.getElementById('table').innerHTML = `
    <table>
        <thead>
          <tr>
            <th scope="col">영역</th>
            <th scope="col">원점수</th>
            <th scope="col">환산점수</th>
          </tr>
        <tbody>
          <tr>
            <th scope="row">1차 지필</th>
            <td>${firstSemester}</td>
            <td>${firstSemester*examRatio}</td>
          </tr>
          <tr>
            <th scope="row">2차 지필</th>
            <td>${secondSemester}</td>
            <td>${secondSemester*examRatio}</td>
          </tr>
          <tr>
            <th scope="row">수행평가</th>
            <td>${evaluation}</td>
            <td>${evaluation}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="row">총합</th>
            <td>${finalExpResult}</td>
            <td>${finalResult} (${grade})</td>
          </tr>
      </table>`;
    }
  }
