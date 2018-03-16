## Regulation of Craving (ROC) task

Code and stimuli for the regulation of craving task used in DEV.

Event information is specified in the `ROC_[].txt` files. Task information and paths are specified in the `runROC_[].m` files. The task runs using `MSS_RunMyMSS_ROC` and other scripts located in the `ROC/MSS` folder. If you need to modify the MSS code, modify the templates `Run_My_MSS.m` and `MSS_RunMyMSS`.

## Key scripts
**`runGetStimROC.m`** 
This script selects images based on the .csv file output from the Image Selection task and populates the Resource folder with the top 40 most craved and bottom 20 least craved images. Images are ranked based on rating and category before selection. The ratings file is expected to be in `'/Users/Shared/Dropbox (PfeiBer Lab)/Devaluation/Tasks/ImageSelection/output/Categorized'` and named with the following format: `DEV999_ratings.csv`. A stimuli key for each subject (e.g. `DEV999_stimuli_[date]_[time].mat`) is saved in `ROC/Output`. User inputs include:
- Study name
- Subject ID

**`runROC_practice.m`**
This script runs the practice task. The variables and paths should be modified for your study. User inputs include:
- Subject ID
- Whether or not to use the MRI button box

**`runROC.m`**
This script runs both the scanner and behavioral tasks. If in the scanner, there will be 4 runs. If behavioral, there will be 2 runs. The variables and paths should be modified for your study. User inputs include:
- Subject ID
– Session number
- Whether or not to use the MRI button box
– Run number

## Output
Files are saved to the `ROC/Output` directory. 