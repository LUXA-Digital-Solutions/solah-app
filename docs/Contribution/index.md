# Contribution Guidelines

This document details how you can contribute to this project in simple steps.

## General Information

The project is managed using: 

1. [Github Issues](https://github.com/LUXA-Digital-Solutions/solah-app/issues).

2. [GitHub project](https://github.com/orgs/LUXA-Digital-Solutions/projects/1).

Any bug found in the app or any feature recommended must be added as a new issue on the Issue page.

## Steps to Contribute

1. **Setup the Environment (Do Once).**  
    Ensure you have setup your environment correctly. [Click here](/docs/Contribution/EnvSetup.md).

2. **Create a new branch locally:**  
    You will create a new branch for the specific task you are to perform by pulling from the main branch.  
    ```
    git fetch origin
    git checkout main
    git pull origin main
    git checkout -b <your-branch-name>
    git push -u origin <your-branch-name>
    ```  
    For example, if I want to work on adding a new home screen. I want need a branch: "farooq/screen/home".  
    ```
    git fetch origin
    git checkout main
    git pull origin main
    git checkout -b farooq/screen/home
    git push -u origin farooq/screen/home
    ```  
    Note: You can always use  
    ```
    git branch
    ```  
    to see the list of the branches on your workspace and to know the active branch.  
3. Stage your work  
    Perform the tasks assigned to you.
    - Check the state of your work
        ```
        git status
        ```
    - Add the changes that you wish to commit
        ```
        git add <file-name>
        ```
        For example, if I wish to add changes in src/shared/components/Button.tsx file, I will use:
        ```
        git add src/shared/components/Button.tsx
        ```
        Or if you wish to add all the files, you will use:
        ```
        git add .
        ```
        Take note of the fullstop.
4. Commit and push your work:
    Once you are done with your work and you have added it to the staging environment, you should commit and push your work.
    - To commit
        ```
        git commit -m <message>
        ```
        For example:
        ```
        git commit -m "[EDIT]: Adding new button variant."
        ```
    - To push:
        ```
        git push
        ```
    This only makes your work available on the repository. But it has not merged it into the dev branch.
5. Create a pull request to the dev branch  
    The active development of the entire team is maintained on the dev branch. Once your task is done, you need to create a pull request.  
    
