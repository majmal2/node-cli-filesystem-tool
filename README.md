# Custom File System Command Line Tool

A lightweight command-line interface (CLI) tool built using Node.js that re-implements basic Unix filesystem commands completely from scratch.

## Section 1 — Command Description
This tool allows users to perform basic file operations directly from the terminal.

### What it does:
* **`cat`**: Reads a file and displays its entire content in the terminal.
* **`wc`**: Counts and outputs the total number of lines in a file.
* **`grep`**: Searches a file line-by-line and prints only the lines containing a specific keyword (case-insensitive).
* **`search-count` (Our Fancy Command)**: Combines the search logic of `grep` and the counting power of `wc`. It searches for a specific word in a file and returns only the total count of lines containing that word.

### How to run it:
1. Display a file:
   ```bash
   node newfile.js cat <filename>