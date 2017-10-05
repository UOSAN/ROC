%% Created by DCos 3/24/2015
% This script should be used to run your MSS experiment. It creates a 
% structure expt with user-specified variables that will be passed to the 
% MSS_RunMyMSS function. Modify this following variables for your experiment. 
% This script should be saved in your experiment folder at the first level.

%% Define experiment variables
expt.experiment_name='CHIVES Picture Task R1'; %Replace this with your experiment name
expt.experiment_code='PIC'; %Replace this with a 3-4 letter code for your experiment
expt.experiment_notes='This is code to run the CHIVES Picture Task R1 scan version'; %Add any pertinent notes here
expt.script_revision_date='5/6/2015'; %Replace with the date you last revised your script
expt.tdfile='PictureR1scan.txt'; %Replace with the name of your td file
expt.resource_path='/Users/yet-to-be-named-1/Dropbox/CHIVES/fMRI_Tasks/Picture/Resources'; %Replace with the path for your resource folder
expt.output_folder='/Users/yet-to-be-named-1/Dropbox/CHIVES/fMRI_Tasks/Picture/Output'; %Replace with the path for your output folder
expt.default_start='scan_start.jpg'; %Replace if you'd like to use an image other than default_start.jpg
expt.kid_start='kid_start.jpg'; %Replace if you'd like to use an image other than kid_start.jpg
expt.startToggle=0; %Default is 0; use 1 for a user-specified version

%% Print the variables in the expt structure 
expt %prints the values in the structure to ensure that the script is correct

%% Run MSS
MSS_RunMyMSS_Eating(expt) %Pass the experiment structure to the MSS function