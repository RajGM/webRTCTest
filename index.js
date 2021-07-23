'use strict';

console.log("IndexJS is loaded");

/*

async function getConnectedDevices(type) {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter(device => device.kind === type)
}

const videoCameras = getConnectedDevices('videoinput');
console.log('Cameras found:', videoCameras);

const audioDevices = getConnectedDevices('audioinput');
console.log('Microphone found:', audioDevices);

const speakerDevices = getConnectedDevices('audiooutput');
console.log('Speaker found:', speakerDevices);


const constraints = {
    'video': true,
    'audio': true
}
navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => {
        console.log('Got MediaStream:', stream);
    })
    .catch(error => {
        console.error('Error accessing media devices.', error);
        console.log('Permission Denied');
    });


// Updates the select element with the provided set of cameras
function updateCameraList(cameras) {
    const listElement = document.querySelector(cameras);
    listElement.innerHTML = '';
    cameras.map(camera => {
        const cameraOption = document.createElement('option');
        cameraOption.label = camera.label;
        cameraOption.value = camera.deviceId;
    }).forEach(cameraOption => listElement.add(cameraOption));
}

// Listen for changes to media devices and update the list accordingly
navigator.mediaDevices.addEventListener('devicechange', event => {
    const newCameraList = getConnectedDevices('video');
    updateCameraList(newCameraList);
});


// Open camera with at least minWidth and minHeight capabilities
async function openCamera(cameraId, minWidth, minHeight) {
    const constraints = {
        'audio': {'echoCancellation': true},
        'video': {
            'deviceId': cameraId,
            'width': {'min': minWidth},
            'height': {'min': minHeight}
            }
        }

    return await navigator.mediaDevices.getUserMedia(constraints);
}

const cameras = getConnectedDevices('videoinput');
if (cameras && cameras.length > 0) {
    // Open first available video camera with a resolution of 1280x720 pixels
    const stream = openCamera(cameras[0].deviceId, 1920, 1080);
}


*/

async function playVideoFromCamera() {
    try {
        const constraints = {'video': true, 'audio': true};
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        const videoElement = document.getElementById("testVideo");
        console.log("videoElement:",videoElement.srcObject);
        videoElement.srcObject = stream;
        videoElement.play();

        await setTimeout(function(){ videoElement.pause(); }, 3000);
        await setTimeout(function(){ videoElement.srcObject = null;
            videoElement.play(); }, 3000);
        

        
    } catch(error) {
        console.error('Error opening video camera.', error);
    }
}

playVideoFromCamera();