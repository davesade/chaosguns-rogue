function getTextMap() {
  return  new Promise((resolve, reject) => {

    var client = new XMLHttpRequest();
    client.open('GET', '../assets/testmap.txt');
    client.onreadystatechange = function() {
      if (client.readyState == 4 && client.status == 200) {
        if (client.responseText) {
            resolve(client.responseText);
          }
       }
    }
    client.send();
  });
}

export { getTextMap };
