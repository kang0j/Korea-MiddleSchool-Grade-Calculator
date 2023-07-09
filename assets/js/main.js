function main () {
  var fe = parseFloat(document.getElementById('1st_exam').value);
  var se = parseFloat(document.getElementById('2nd_exam').value);
  var ps = parseFloat(document.getElementById('project_score').value);
  var pr = parseFloat(document.getElementById('project_ratio').value);

  var pr_inverse = (100 - pr)/100
  
  if (!pr){
      document.getElementById('output').innerHTML = "<strong>수행 반영 비율 입력은 필수입니다.</strong><br>(수행평가가 없는 과목은 지원하지 않습니다)";
  } else{
      if (!fe){
          var ts = se * pr_inverse
      } else if (!se){
          var ts = fe * pr_inverse
      } else {
          var ts = (fe + se) * (pr_inverse/2)
      }
      
      
      var a = ts + ps
      var result_process = a.toFixed(2)
      var result = a.toFixed(0)
      var ts_v = ts.toFixed(2)
      
      if (result>100){
          document.getElementById('output').innerHTML = "<strong>올바른 값을 입력해주세요.</strong><br>(총점은 100을 넘을 수 없습니다)";
      } else if (result<0){
          document.getElementById('output').innerHTML = "<strong>올바른 값을 입력해주세요.</strong><br>(총점은 0보다 작을 수 없습니다)";
      } else if (fe<0 || fe>100 || se>100 || se<0 || ps>100 || ps<0 || pr<0 || pr>100){
          document.getElementById('output').innerHTML = "<strong>올바른 값을 입력해주세요.</strong><br>(모든 값은 0에서 100 사이입니다.)";
      } else {
      
      var output =  result+'점'
      
      var message = '<br>계산 과정: 지필 점수('+ts_v+') + 수행 점수('+ps+')='+result_process+"<br><br>본 결과는 추정치입니다. 계산 방식에 따라 실제 결과와 다를 수 있습니다.<br>지필/수행평가 중 0점이 포함되어 있는 경우 오류가 발생합니다.<br>서울시교육청 학업성적관리지침에 따라 소수점 아래 첫째 자리에서 반올림합니다."

      if (result>=80){
          var grade = ' (A)'
      } else if (result>=60){
          var grade = ' (B)'
      } else {
          var grade = ' (C)'
      }
      
      document.getElementById('output').innerHTML = '<h4><stong>'+output+grade+'</strong></h4>'+message;
      }
  }
}

    
