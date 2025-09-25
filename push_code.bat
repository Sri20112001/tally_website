@echo off
setlocal
set GIT_PAGER=cat

:: Show Git remote details
echo Fetching Git remote details...
git remote -v
if errorlevel 1 (
    echo Error fetching Git remote details. Please ensure this is a valid Git repository.
    pause
    exit /b 1
)

:: List all local branches
echo Listing available local branches...
git branch
if errorlevel 1 (
    echo Error listing local branches. Aborting.
    pause
    exit /b 1
)

:: List all remote branches
echo Listing available remote branches...
git branch -r
if errorlevel 1 (
    echo Error listing remote branches. Aborting.
    pause
    exit /b 1
)

:: Display the current branch
echo Current branch:
git symbolic-ref --short HEAD
if errorlevel 1 (
    echo Error determining the current branch. Aborting.
    pause
    exit /b 1
)


:: Get the current date in DD/MM/YY format
for /f "tokens=2 delims==" %%i in ('"wmic os get localdatetime /value"') do set dt=%%i
set year=%dt:~2,2%
set month=%dt:~4,2%
set day=%dt:~6,2%

:: Use hyphens instead of slashes to make it a valid branch name
set branchName=branch-%day%-%month%-%year%

:: Fetch the latest changes from the remote repository
echo Fetching latest changes...
git fetch origin
if errorlevel 1 (
    echo Error while fetching from remote. Aborting.
    pause
    exit /b 1
)

:: Check if the branch already exists in the remote
git show-ref --verify --quiet refs/heads/%branchName%
if "%errorlevel%" == "0" (
    echo Branch %branchName% already exists locally. Switching to it...
    git checkout %branchName%
) else (
    echo Branch %branchName% does not exist locally. Checking remote...
    git ls-remote --heads origin %branchName% >nul
    if "%errorlevel%" == "0" (
        echo Branch %branchName% exists on remote. Fetching and switching...
        git checkout %branchName%
    ) else (
        echo Branch %branchName% does not exist on remote. Creating and switching to the new branch...
        git checkout -b %branchName%
    )
)

:: Ask for commit message
set /p commitMessage="Enter your commit message: "

setlocal enabledelayedexpansion
:: Ask if the user wants to create a README file
set /p createReadme="Do you want to create a README file? (y/n): "
if /i "!createReadme!"=="y" (
    set /p readmeContents="Enter the contents of the README file: "
    echo !readmeContents! > README.md
    echo README.md created with the provided contents.
    git add README.md
)
endlocal


:: Add changes
echo Adding changes...
git add .
if errorlevel 1 (
    echo Error while adding changes. Aborting.
    pause
    exit /b 1
)

:: Commit the changes
echo Committing changes...
git commit -m "%commitMessage%"
if errorlevel 1 (
    echo Error while committing changes. Aborting.
    pause
    exit /b 1
)

:: Push the changes to the remote repository
echo Pushing changes to the remote repository on branch %branchName%...
git push -u origin %branchName%
if errorlevel 1 (
    echo Error while pushing changes to remote. Aborting.
    pause
    exit /b 1
)

echo Code pushed successfully to branch %branchName%.

:: Prevent CMD from closing
echo Operation complete. Press any key to exit...
pause
