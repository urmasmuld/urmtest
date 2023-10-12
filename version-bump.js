const fs = require('fs');
const childProcess = require('child_process');

const commitMessage = childProcess.execSync('git log -1 --pretty=%B').toString();

if (commitMessage.startsWith('fix:')) {
  return 'patch';
} else if (commitMessage.startsWith('feat:')) {
  return 'minor';
} else if (commitMessage.startsWith('rel:')) {
  return 'major';
} else {
  return null;
}
