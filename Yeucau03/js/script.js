function startTime() {
    let today = new Date();
  
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
  
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
  
    let string = h + ":" + m + ":" + s;
    let img = stringToImage(string);
    document.getElementById("myClock").innerHTML = "<br>" + img;
    let t = setTimeout(startTime, 1000);
  
  var greeting = document.querySelector("h4");
    if (0<=h && h<12){
      greeting.innerHTML = "Chào buổi sáng";
      greeting.style.fontSize = "40px";
    }else if (12<=h && h<17){
      greeting.innerHTML = "Chào buổi chiều";
      greeting.style.color = "red";
      greeting.style.fontSize = "50px";
    }else if (17<=h && h<23){
      greeting.innerHTML = "Chào buổi tối";
      greeting.style.fontSize = "60px";
      greeting.style.color = "black"; 
    }
  }

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function stringToImage(s) {
    let temp = "";
    for (var i = 0; i < s.length; i++) {
      temp = temp + "<img id='imgclock' src='" + img[s[i]] + "' style='height: 60px; width: 50px' />";
    }
    return temp;
  }
  
  var img = {
    "1": "icon/1.gif",
    "2": "icon/2.gif",
    "3": "icon/3.gif",
    "4": "icon/4.gif",
    "5": "icon/5.gif",
    "6": "icon/6.gif",
    "7": "icon/7.gif",
    "8": "icon/8.gif",
    "9": "icon/9.gif",
    "0": "icon/0.gif",
    ":": "icon/haicham.gif",
  };
  