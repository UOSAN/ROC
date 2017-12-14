## Regulation of Craving (ROC) task

Code and stimuli for the regulation of craving task using in the SAN lab.

Event information is specified in the `ROC_[].txt` files. Task information and paths are specified in the `runROC_[].m` files. The task runs using `MSS_RunMyMSS_ROC` and other scripts located in the `ROC/MSS` folder. If you need to modify the MSS code, modify the templates `Run_My_MSS.m` and `MSS_RunMyMSS`.

## Key scripts
**`runGetStim.m`** 
This script selects subject most and least craved food categories and populates the Resource folder with the images from these food categories. User inputs include:
- Study directory (i.e. path to ROC/)
- Most and least craved food categories

**`runROC_practice.m`**
This script runs the practice task. The variables and paths should be modified for your study. User inputs include:
- Subject ID
- Whether or not to use the MRI button box

**`runROC_[run number]scan.m`**
This script runs the scanner task. The variables and paths should be modified for your study. User inputs include:
- Subject ID
- Whether or not to use the MRI button box

**`runROC_[run number]sbeh.m`**
This script runs the behavioral task. The variables and paths should be modified for your study. User inputs include:
- Subject ID
- Whether or not to use the MRI button box

## Output
Files are saved to the `ROC/Output` directory. 