var repoNameEl = document.querySelector('#repo-name');
var issueContainerEl = document.querySelector('#issues-container');
var limitWarningEl = document.querySelector('#limit-warning');

var getRepoName = function () {
  // Q: Where is this value coming from?
  // A: From the URL
  var queryString = document.location.search;
  var repoName = queryString.split('=')[1];

  if (repoName) {
    repoNameEl.textContent = repoName;

    getRepoIssues(repoName);
  } else {
    // Q: Under what condition will this run?
    // A: If the repository name does not exist
    document.location.replace('./index.html');
  }
};

var getRepoIssues = function (repo) {
  var apiUrl = 'https://api.github.com/repos/' + repo + '/issues?direction=asc';

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayIssues(data);

        // Q: What is this checking for? Under what condition will this be `true`?
        // A: Since GitHub only returns 30 results at a time, we check to see if there's more than 30 by looking for a next page URL in the response headers. server
        if (response.headers.get('Link')) {
          displayWarning(repo);
        }
      });
    } else {
      document.location.replace('./index.html');
    }
  });
};

var displayIssues = function (issues) {
  // Q: Is there a difference between this and `!issues.length`?
  // A: No, they both check if there are repos with issues, but just use different methods 
  if (issues.length === 0) {
    issueContainerEl.textContent = 'This repo has no open issues!';
    return;
  }

  for (var i = 0; i < issues.length; i++) {
    var issueEl = document.createElement('a');
    issueEl.classList = 'list-item flex-row justify-space-between align-center';
    issueEl.setAttribute('href', issues[i].html_url);
    issueEl.setAttribute('target', '_blank');

    var titleEl = document.createElement('span');
    titleEl.textContent = issues[i].title;
    issueEl.appendChild(titleEl);

    var typeEl = document.createElement('span');

    if (issues[i].pull_request) {
      typeEl.textContent = '(Pull request)';
    } else {
      typeEl.textContent = '(Issue)';
    }

    issueEl.appendChild(typeEl);

    issueContainerEl.appendChild(issueEl);
  }
};

// Q: What does this function do?
// A: When there are more issues than what GitHub has returned, we let the user know by printing a message with a link to the page.
var displayWarning = function (repo) {
  limitWarningEl.textContent = 'To see more than 30 issues, visit ';

  var linkEl = document.createElement('a');
  linkEl.textContent = 'GitHub.com';
  linkEl.setAttribute('href', 'https://github.com/' + repo + '/issues');
  linkEl.setAttribute('target', '_blank');

  // Q: Where does this appear on the page?
  // A: Bottom of the page
  limitWarningEl.appendChild(linkEl);
};

getRepoName();
