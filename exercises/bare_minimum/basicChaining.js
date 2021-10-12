/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var p = require('./promiseConstructor');
var github = require('./promisification');



var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return new Promise((resolve, reject)=>{
    //read file  and get github handle
    p.pluckFirstLineFromFileAsync(readFilePath)
      .then((name)=>{
        console.log(name);
        return github.getGitHubProfileAsync(name);
      })
      .then((profile) =>{
        console.log('Profile object: ', profile);
        fs.writeFile(writeFilePath, JSON.stringify(profile), (err, data) =>{
          if (err) {
            reject(err);
          } else {
            resolve(JSON.stringify(profile));
          }
        });
      });



  });






  //call getGithub with handle and get git object

  //write object to file
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
