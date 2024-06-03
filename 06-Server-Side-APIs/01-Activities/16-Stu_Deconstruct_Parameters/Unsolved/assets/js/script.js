fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
// per_page=10: this parameter limits the number of results per page to 10
// state=open: this parameter represents the current state of the issue, in this case is it open.
// sort=created: sorts the results based on the created property
// direction=desc: sorts the results from newest to oldest 