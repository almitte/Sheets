// githubFileUpdater.js

function updateGitHubFile(githubToken, repoOwner, repoName, filePath) {
    const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`;
    const headers = new Headers({
      'Authorization': `token ${githubToken}`,
      'Content-Type': 'application/json',
    });
  
    // Function to fetch the latest content
    function fetchLatestContent() {
      return fetch(apiUrl, { headers })
        .then(response => response.json());
    }
  
    // Function to update the file
    function performFileUpdate(currentData) {
      const currentContent = atob(currentData.content);
      let currentNumber = parseInt(currentContent, 10);
      if (isNaN(currentNumber)) {
        currentNumber = 0;
      }
      const updatedNumber = currentNumber + 1;
      const updatedContent = updatedNumber.toString();
  
      const updateData = {
        message: 'Update file content',
        content: btoa(updatedContent),
        sha: currentData.sha,
      };
  
      const updateUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`;
  
      return fetch(updateUrl, {
        method: 'PUT',
        headers,
        body: JSON.stringify(updateData),
      });
    }
  
    // Fetch the latest content and perform the update
    fetchLatestContent()
      .then(currentData => {
        return performFileUpdate(currentData);
      })
      .then(response => {
        if (response.status === 200) {
          console.log('File updated successfully.');
        } else if (response.status === 409) {
          // Handle conflict by retrying the update
          console.warn('Conflict encountered. Retrying...');
          return fetchLatestContent()
            .then(currentData => performFileUpdate(currentData));
        } else {
          console.error('Error updating file:', response.statusText);
        }
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  }
  