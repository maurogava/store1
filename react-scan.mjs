#!/usr/bin/env node

import { spawn } from 'child_process';
import { createInterface } from 'readline';

// Start Next.js dev server
const nextProcess = spawn('pnpm', ['next', 'dev', '--turbopack'], {
  stdio: ['inherit', 'pipe', 'inherit'],
  shell: true
});

// Create readline interface to read stdout line by line
const rl = createInterface({ input: nextProcess.stdout });

// Listen for the line that contains the localhost URL
rl.on('line', (line) => {
  console.log(line);
  
  // Extract port from the line that contains "localhost:PORT"
  const match = line.match(/localhost:(\d+)/);
  if (match) {
    const port = match[1];
    console.log(`\nDetected Next.js running on port ${port}`);
    
    // Start react-scan with the detected port
    const reactScanProcess = spawn('pnpm', ['dlx', 'react-scan', `localhost:${port}`], {
      stdio: 'inherit',
      shell: true
    });
    
    // Handle react-scan process exit
    reactScanProcess.on('exit', (code) => {
      if (code !== 0) {
        console.error(`react-scan process exited with code ${code}`);
      }
      // Don't exit the main process, let Next.js continue running
    });
  }
});

// Handle Next.js process exit
nextProcess.on('exit', (code) => {
  console.log(`Next.js process exited with code ${code}`);
  process.exit(code);
});

// Handle process termination
process.on('SIGINT', () => {
  nextProcess.kill('SIGINT');
  process.exit(0);
});