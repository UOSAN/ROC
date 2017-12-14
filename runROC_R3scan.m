%% Created by DCos 3/24/2015
% This script should be used to run your MSS experiment. It creates a 
% structure expt with user-specified variables that will be passed to the 
% MSS_RunMyMSS function. Modify this following variables for your experiment. 
% This script should be saved in your experiment folder at the first level.

%% Define experiment variables
expt.experiment_name='DEV ROC Task R3'; %Replace this with your experiment name
expt.experiment_code='DEV'; %Replace this with a 3-4 letter code for your experiment
expt.experiment_notes='This is code to run the DEV ROC Task R3 scan version'; %Add any pertinent notes here
expt.script_revision_date='12/13/2017'; %Replace with the date you last revised your script
expt.tdfile='ROC_R3scan.txt'; %Replace with the name of your td file
expt.resource_path='/Users/danicosme/Documents/code/sanlab/ROC/Resources'; %Replace with the path for your resource folder
expt.output_folder='/Users/danicosme/Documents/code/sanlab/ROC/Output'; %Replace with the path for your output folder
expt.default_start='scan_start.jpg'; %Replace if you'd like to use an image other than default_start.jpg
expt.kid_start='kid_start.jpg'; %Replace if you'd like to use an image other than kid_start.jpg
expt.startToggle=0; %Default is 0; use 1 for a user-specified version

%% Print the variables in the expt structure 
expt %prints the values in the structure to ensure that the script is correct

%% Run MSS
MSS_RunMyMSS_ROC(expt) %Pass the experiment structure to the MSS function