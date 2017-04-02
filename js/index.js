var acc;
var status;
var pictureSource; 
var destinationType;

document.addEventListener("deviceready", onDeviceReady, false);

 
function onDeviceReady() {

pictureSource = navigator.camera.PictureSourceType;
destinationType = navigator.camera.DestinationType;

window.addEventListener("batterystatus", batteryStatus, false);

document.getElementById("cordovaDevice").addEventListener("click", cordovaDevice);	

document.getElementById("aks").addEventListener("click", onAks);









}

 
function onPhotoDataSuccess(imageURI) {

console.log(imageURI);

var cameraImage = document.getElementById('image');

cameraImage.style.display = 'block';

cameraImage.src = imageURI;
}

function onPhotoURISuccess(imageURI) {

console.log(imageURI);

var galleryImage = document.getElementById('image');

galleryImage.style.display = 'block';

galleryImage.src = imageURI;
}

function capturePhoto() {
navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
quality: 30,
targetWidth: 600,
targetHeight: 600,
destinationType: destinationType.FILE_URI,
saveToPhotoAlbum: true
});
}

function getPhoto(source) {
navigator.camera.getPicture(onPhotoURISuccess, onFail, {
quality: 30,
targetWidth: 600,
targetHeight: 600,
destinationType: destinationType.FILE_URI,
sourceType: source
});
}

function onFail(message) {
	alert('Gabim: ' + message);
}


function batteryStatus(z) {
alert ("Informata per baterine"+ "\n\n" +"Niveli: " + z.level +"\n"+ "Statusi i mbushjes: " + z.isPlugged);
}

function cordovaDevice() {
   alert("Informata per telefonin" + "\n\n" +
	  "Versioni Cordova: " + device.cordova + "\n" +
      "Modeli i telefonit: " + device.model + "\n" +
      "Platforma: " + device.platform + "\n" +
      "UUID: " + device.uuid + "\n" +
      "OS Versioni: " + device.version + "\n" +
	  "Prodhuesi: " + device.manufacturer + "\n"+
	  "Serial: " + device.serial);	  
}


function onAks(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n'    
              );
    }

		
