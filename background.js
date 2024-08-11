chrome.downloads.onCreated.addListener((downloadItem) => {
  // Simulate duplicate detection
  const isDuplicate = true;

  if (isDuplicate) {
    alert(
      "Duplicate file found! File already exists at /path/to/duplicate/file"
    );
  } else {
    // Handle non-duplicate scenario
    alert("Download started: " + downloadItem.filename);
  }
});
