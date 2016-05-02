/**
 * Synchronously run each of the files in the
 * benchmarks directory. This file must be run
 * from the root directory, so it's best to use
 * the npm command from the root when running this
 * file.
 */

var fs = require('fs');
var winston = require('winston');
var files = [];
var blackListedDirectories = [
  '.git',
  'node_modules'
];

winston.add(winston.transports.File, { filename: 'benchmarks/benchmarks.log' });

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
  try{
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
  }catch(e){
    console.log('Unable to locate benchmark directory. Make sure you\'re running this file from the root directory.\n'+e.message);
  }
}

function validFilePath(file){
  if(typeof file === 'string'){
    var minimalSyntax = /^(([0-9a-zA-Z])+(:?\.)?)+(.spec.js)$/ig;
    return file.match(minimalSyntax);
  }else if(file instanceof Array){
    if(!file.length){
      console.log('Error: attempted to resolve an empty file name.');
    }
    var _fileTokens = file.split(".");
    var _extension = fileTokens.pop();
    var _spec = fileTokens.pop();
    return (_extension === 'js' && _spec === 'spec');
  }
}