import requests

# Replace YOUR_SHEET_ID with the ID of your Google Sheets file
SHEET_ID = "1dneDJs_cQdjgrGTt7CyHflRntWkG1jU5Cg6wK929e9g"
# Replace YOUR_API_KEY with your Google API key
API_KEY = "AIzaSyAgtyYzCyesKwKsBr1Qzee0jJoFMuwONtE"

# Construct the URL for the API call
url = f"https://sheets.googleapis.com/v4/spreadsheets/{SHEET_ID}/values/Projektstatus_ServerRollout!B4:P8?key={API_KEY}"

# Make the GET request
response = requests.get(url)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Parse the JSON response
    data = response.json()
    # Extract the values from the response
    values = data.get('values', [])
    # Print the values
    for row in values:
        print(row)
else:
    # Print an error message if the request was not successful
    print(f"Error: {response.json()}")
