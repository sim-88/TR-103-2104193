# Day 2: MERN Stack Training Diary

## 1. How to Install Node
- **Installation**: Download from [nodejs.org](https://nodejs.org) and follow the installation instructions for your operating system. Ensure that Node.js and npm (Node Package Manager) are installed correctly by running `node -v` and `npm -v` in the terminal.

## 2. How to Upgrade or Downgrade Node
- **Upgrade/Downgrade**: Use Node Version Manager (nvm) to manage different versions of Node.js.
  - **Install nvm**: Follow instructions from [nvm-sh/nvm](https://github.com/nvm-sh/nvm).
  - **Use nvm**: `nvm list available`,`nvm install <version>`, `nvm use <version>`, `nvm alias default <version>`.

## 3. How to Install npm
- **npm Installation**: Comes bundled with Node.js. Verify by running `npm -v`.

## 4. How to Check Installed Packages via npm
- **Check Packages**: Use `npm list` to see all installed packages in the current project.

## 5. npm and nvm Difference
- **npm**: Node Package Manager used for installing and managing packages.
- **nvm**: Node Version Manager used for managing multiple Node.js versions.

## 6. Meaning of 20.10.0: Major, Minor, Patch
- **Versioning**:
  - **Major**: Significant changes, breaking backward compatibility.
  - **Minor**: New features, backward compatible.
  - **Patch**: Bug fixes, backward compatible.

## 7. Global Packages vs Local Packages
- **Global Packages**: Installed system-wide, accessible from any project (`npm install -g <package>`).
- **Local Packages**: Installed in the current project directory (`npm install <package>`).

## 8. What is Semantic Versioning
- **Semantic Versioning**: A versioning scheme (`<major>.<minor>.<patch>`).
  - **^ (Caret)**: Latest minor version.
  - **~ (Tilde)**: Latest patch version.

## 9. Name of Directory Where Node Packages are Stored
- **Directory**: All packages are installed in `node_modules` within the project directory.

## 10. Case Sensitivity
- **Case Sensitivity**: Linux is case-sensitive, but it's best practice to consider all environments as case-sensitive to avoid issues.

## 11. Root vs Public Directory
- **Root Directory**: The top-level directory of the project.
- **Public Directory**: Directory where public assets (like HTML, CSS, images) are stored and served.

## 12. Three Types of Package Structure
1. **Traditional Way**: Dependencies are nested under the parent package.
    ```
    A
      - B
      - C
    D
      - B
      - F
    ```
2. **Flat Structure**: Dependencies are not nested, installed in a flat structure.
    ```
    A
    B
    C
    D
    F
    ```
3. **Hybrid Structure**: Some dependencies may be nested.
    ```
    A
    B
    C
    D
      - B
    F
    ```

## 13. After Which Major Version Did the Structure of the Node Packages Change?
- **Changed Structure**: The folder structure changed significantly after npm version 3.

## 14. How to Check Installed Packages via npm at Particular Depth
- **Depth Command**: Use `npm list --depth=<level>` to see installed packages up to a specified depth.

## 15. Global Objects in Traditional JS vs Node.js
- **Traditional JS**:
  - **Global Objects**: `window`, `document` (DOM).
- **Node.js**:
  - **Global Objects**: `global`, `process`.
  - **Built-in Modules**: `fs` (File System), `events`, `http`, `os`, `util`, `setTimeout`, `setInterval`.

## 16. Global Objects vs Local Objects in Node
- **Global Objects**: Available throughout the Node.js application (`global`, `process`).
- **Local Objects**: Defined within a specific module or function, limited in scope.

## 17. Difference Between Module and Package in Node.js
- **Module**: A single JavaScript file or a collection of files that can be imported using `require` or `import`.
- **Package**: A directory with one or more modules, including a `package.json` file defining the package.

## 18. Why We Use os Module
- **os Module**: Provides operating system-related utility methods and properties.
  - **Usage**: Monitoring server vitals (RAM, CPU usage), server uptime, etc.
  - **Example**: `os.uptime()` for checking system uptime.

## 19. Each File is a Module in Node?
- **Node.js Modules**: Yes, each file in Node.js is considered a module. Modules are loaded using `require` or `import`.
