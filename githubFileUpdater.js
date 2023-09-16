// githubFileUpdater.js

function countUp(){

const githubToken = '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';
const repoOwner = 'almitte';
const repoName = 'almitte.github.io';
const filePath = 'Counter.txt';


// Create a URL for the GitHub API to get the current content of the file
const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`;

// Headers for the API request, including authentication
const headers = new Headers({
  'Authorization': `token ${githubToken}`,
  'Content-Type': 'application/json',
});

// Function to handle error responses
function handleErrorResponse(response) {
  if (response.status === 401) {
    console.error('Unauthorized: You may need to check your GitHub token.', response);
  } else if (response.status === 409) {
    console.error('Conflict: There was a conflict while updating the file.', response);
  } else {
    console.error('Error updating file:', response.status, response.statusText);
  }
}

// Fetch the current file content
fetch(apiUrl, { headers })
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      handleErrorResponse(response);
      throw new Error('Failed to fetch file content');
    }
  })
  .then(data => {
    // Decode the content from Base64
    const currentContent = atob(data.content);

    // Convert the current content to a number and increment it by one
    let currentNumber = parseInt(currentContent, 10);
    if (isNaN(currentNumber)) {
      currentNumber = 0; // If the content is not a number, start with 0
    }
    const updatedNumber = currentNumber + 1;

    // Create a new object with the updated content
    const updatedContent = updatedNumber.toString();

    const updateData = {
      message: 'Update file content',
      content: btoa(updatedContent), // Encode content to Base64
      sha: data.sha, // The current SHA of the file
    };

    // Create a URL for the API to update the file
    const updateUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`;

    // Make a PUT request to update the file
    return fetch(updateUrl, {
      method: 'PUT',
      headers,
      body: JSON.stringify(updateData),
    });
  })
  .then(response => {
    if (response.status === 200) {
      console.log('File updated successfully.');
    } else {
      handleErrorResponse(response);
    }
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });};
  