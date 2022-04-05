
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-chooser.Chooser",
          "file": "plugins/cordova-plugin-chooser/www/chooser.js",
          "pluginId": "cordova-plugin-chooser",
        "clobbers": [
          "chooser"
        ]
        },
      {
          "id": "cordova-plugin-device.device",
          "file": "plugins/cordova-plugin-device/www/device.js",
          "pluginId": "cordova-plugin-device",
        "clobbers": [
          "device"
        ]
        },
      {
          "id": "cordova-plugin-telerik-imagepicker.ImagePicker",
          "file": "plugins/cordova-plugin-telerik-imagepicker/www/imagepicker.js",
          "pluginId": "cordova-plugin-telerik-imagepicker",
        "clobbers": [
          "plugins.imagePicker"
        ]
        },
      {
          "id": "cordova-plugin-nativeaudio.nativeaudio",
          "file": "plugins/cordova-plugin-nativeaudio/www/nativeaudio.js",
          "pluginId": "cordova-plugin-nativeaudio",
        "clobbers": [
          "window.plugins.NativeAudio"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-chooser": "1.3.1",
      "cordova-plugin-nativeaudio": "3.0.9",
      "cordova-plugin-telerik-imagepicker": "2.3.5",
      "cordova-plugin-device": "2.0.2"
    };
    // BOTTOM OF METADATA
    });
    