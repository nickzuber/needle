/**
 * Synchronously run each of the benchmarks
 */

var fs = require('fs');
var files = [];
var blackListedDirectories = [
  '.git',
  'node_modules'
];

// Get all benchmark files to run
recurseAllFilesInDirectory('./benchmarks', files);

// Synchronously execute each file
files.map(function(file){
  console.log('');
  console.log('RUNNING FILE: '+file);
  console.log('');
  require('./'+file);
});

function recurseAllFilesInDirectory(path, allFiles){
  var slashIfNeeded, actualPath;
  fs.readdirSync(path).map(function(derivedFile){
    // Ignore black listed directories
    // poisonious areas which can halt the script from running
    if(blackListedDirectories.indexOf(derivedFile) === -1){
      if(validFilePath(derivedFile)){
        slashIfNeeded = path[path.length-1] === '/' ? '' : '/';
        actualPath = path + slashIfNeeded + derivedFile;
        // Include file name - not path (since this file lives within the directory)
        allFiles.push(derivedFile);
      }else{
        slashIfNeeded = path[path.length-1] === '/' ? '' : '/';
        actualPath = path + slashIfNeeded + derivedFile;
        if(fs.lstatSync(actualPath).isDirectory()){
          recurseAllFilesInDirectory(actualPath, allFiles);
        }
      }
    }else{
      console.log('Ignoring '+derivedFile+' directory');
    }
  });
}

function validFilePath(file){
  if(typeof file === 'string'){
    var minimalSyntax = /^_(([0-9a-zA-Z])+(:?\.)?)+(.js)$/ig;
    return file.match(minimalSyntax);
  }else if(file instanceof Array){
    if(!file.length){
      console.log('Error: attempted to resolve an empty file name.');
    }
    var _file = file[file.length-1];
    var _extension = _file.split(".").pop();
    return (_extension === 'js' && file[0] === '_');
  }
}