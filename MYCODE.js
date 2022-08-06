
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

// Start file download.
download(last.at(4)+".txt",vids[0].getAttribute('src'));

//=============================================================================
async function downloadImage(NAM,imageSrc) {
  const image = await fetch(imageSrc)
  const imageBlog = await image.blob()
  const imageURL = URL.createObjectURL(imageBlog)

  const link = document.createElement('a')
  link.href = imageURL
  link.download = NAM
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
//==============================================================================
function xhrRequest(){            
  console.log(this.status);
  alert(this.status)
}
function getReq(url){
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", xhrRequest);
  oReq.open("GET", url);
  oReq.send();
}
getReq(document.URL);
//===========================================================================
