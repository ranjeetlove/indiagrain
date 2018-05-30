cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "com.synconset.imagepicker.ImagePicker",
    "file": "plugins/com.synconset.imagepicker/www/imagepicker.js",
    "pluginId": "com.synconset.imagepicker",
    "clobbers": [
      "plugins.imagePicker"
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
    "id": "cordova-plugin-file-opener2.FileOpener2",
    "file": "plugins/cordova-plugin-file-opener2/www/plugins.FileOpener2.js",
    "pluginId": "cordova-plugin-file-opener2",
    "clobbers": [
      "cordova.plugins.fileOpener2"
    ]
  },
  {
    "id": "cordova-plugin-filechooser.FileChooser",
    "file": "plugins/cordova-plugin-filechooser/www/fileChooser.js",
    "pluginId": "cordova-plugin-filechooser",
    "clobbers": [
      "fileChooser"
    ]
  },
  {
    "id": "cordova-plugin-hotspot.HotSpotPlugin",
    "file": "plugins/cordova-plugin-hotspot/www/HotSpotPlugin.js",
    "pluginId": "cordova-plugin-hotspot",
    "clobbers": [
      "cordova.plugins.hotspot"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "com.synconset.imagepicker": "2.1.10",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-file-opener2": "2.0.19",
  "cordova-plugin-filechooser": "1.0.1",
  "cordova-plugin-hotspot": "1.2.10"
};
// BOTTOM OF METADATA
});