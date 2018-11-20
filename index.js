function spiralArray(n) {
  var spiralArr = [], 
      cntr = 0, className = "inner-sq inner-sqbdr", rowCnt = 1,
      isEven = n%2 === 0 ? true : false,
      sqVal = isEven ? n*n : n*n - (n-1), 
      isForward = isEven ? false : true,
      htmlContent = '<div class="row-sq">';
  for(var i=1; i<=n*n; i++) {
    if(cntr === n) {
      sqVal = sqVal - n;
      cntr = 0;
      rowCnt++;
      isForward = !isForward;
      htmlContent += '</div><div class="row-sq">';
    }
    cntr++;
    if(rowCnt === n) {
      className += " inner-sqbdr-lastrow";
    }
    //spiralArr.push(sqVal);
    htmlContent += '<span class="'+className+'">'+sqVal+'</span>';
    if(cntr != n) {
      isForward ? sqVal++ : sqVal--;
    }
  }
  htmlContent += '</div>';
  //console.log(spiralArr);
  $('#render').empty();
  $('#render').append(htmlContent);
}

$('#btn1').click(function(){
  var inputVal = $('#inp1').val();
  $('#inp1').val('');
  spiralArray(parseInt(inputVal));
});

//spiralArray(3);