// 过滤器，用于限制文本长度，并产生省略号value：文字number文字的数量
function ponduce_point (value,number){
  var text = ''
  if(value.length>=number){
      text = value.substr(0,number)+'...'
  }else{
      text = value
  }
  return text
}
// 处理时间展示问题（有无用代码）
function timeagoNew(dateTimeStamp) {   //dateTimeStamp是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上除以1000，就是十位数的时间戳。13位数的都是时间毫秒。
  var minute = 1000 * 60;      //把分，时，天，周，半个月，一个月用毫秒表示
  var hour = minute * 60;
  var day = hour * 24;
  var week = day * 7;
  var halfamonth = day * 15;
  var month = day * 30;
  var now = new Date().getTime();   //获取当前时间毫秒
  var diffValue = now - dateTimeStamp;//时间差
  if (diffValue < 0) {
      return;
  }
  var time = new Date(dateTimeStamp);
  // 展示用的
  var Nmonth = time.getMonth() + 1 < 10 ? "0" + (time.getMonth() + 1) : time.getMonth() + 1;
  var Ndate = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
  var Nhour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  var Nminute = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  var birthD=Nhour+":"+Nminute;
  var birthMonth=Nmonth+"月"+Ndate+"日"+birthD;
  // 判断用
  var isDate = new Date().getDate()-time.getDate()
  var isYe = new Date().getFullYear()-time.getFullYear()
  // 获取小时
  var getH =Math.abs(new Date().getHours()-time.getHours())
  // 获取分钟
  var getF =Math.abs(new Date().getMinutes()-time.getMinutes())

  var minC = (diffValue / minute);  //计算时间差的分，时，天，周，月
  // var hourC = diffValue / hour;
  // var dayC = diffValue / day;
  // var weekC = diffValue / week;
  // var monthC = diffValue / month;

  if (isYe>=1) {
      var datetime = new Date();
      datetime.setTime(dateTimeStamp);
      var Nyear = datetime.getFullYear();
      var Nmonth = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
      var Ndate = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
      result = Nyear + "年" + Nmonth + "月" + Ndate+'日'
  }else if (isYe == 0&&isDate !== 1&&isDate !== 0) {
      result =birthMonth
  } else if (isYe == 0&&isDate === 1) {
      result  = '昨天'+birthD
  }else if (isYe == 0&&isDate == 0&&minC>=60) {
      result  = '今天'+birthD
  // } else if (10<getF&&getF<60&&isYe == 0&&isDate == 0&&getH<=1) {
  } else if (10<minC&&minC<60) {
      result = " " + Math.round(minC) + "分钟前"
  } else if (0<=getF&&getF<=10&&isYe == 0&&isDate == 0&&getH===0) {
      result = "刚刚"
  } else {
      debugger
      var datetime = new Date();
      datetime.setTime(dateTimeStamp);
      var Nyear = datetime.getFullYear();
      var Nmonth = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
      var Ndate = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
      var Nhour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
      var Nminute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
      var Nsecond = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
      result = Nyear + "年" + Nmonth + "月" + Ndate+'日'
  }
  return result;
}