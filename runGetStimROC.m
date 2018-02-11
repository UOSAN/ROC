%% runGetStimROC.m %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%
% Author: Dani Cosme
%
% Description: This script selects food images based on their ratings,
% randomizes them, and adds the images to the ROC/Resources folder
% 
% Inputs: Ratings .csv file in dropbox path (defined below) with the 
% following name: [study][subject ID]_ratings.csv (e.g. DEV999_ratings.csv)
% 
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%% Housecleaning before the guests arrive
pathtofile = mfilename('fullpath');
homepath = pathtofile(1:(regexp(pathtofile,'runGetStim') - 1));
addpath(homepath);

cd(homepath);
clear all; close all; Screen('CloseAll'); 
homepath = [pwd '/'];

% set defaults for random number generator
rng('default')
rng('shuffle')

%% Get study, subject id, and session number from user
study = 'DEV'; %removed user input for convenience 
subjid = input('Subject number (3 digits):  ', 's');
ssnid = input('Session number (1-5):  ', 's');

%% Specify number of craved and not craved images
n_craved = 40;
n_notcraved = 20;

%% Load image info
% Define dropbox path
dxpath = '~/Dropbox (PfeiBer Lab)/Devaluation/Tasks/ImageSelection/output/Categorized'; % check this

% Define subject input file
subinput = sprintf('%s/%s%s_ratings.csv',dxpath,study,subjid);

% Load image rating info
if exist(subinput)
    fid=fopen(subinput);
    imageinfo = textscan(fid, '%n%n%s', 'Delimiter', ',', 'treatAsEmpty','NULL', 'EmptyValue', NaN);
    fclose(fid);
else
    error(sprintf('Subject input file (%s) does not exist',subinput));
end

%% Check if there are enough stimuli for the number of trials specified
if length(imageinfo{1,1}) < n_craved + n_notcraved
    error('The number of stimuli available is less than the number of trials specified');
end

%% Remove old images
% Remove current images from run directories
disp('Removing files from run directories')
delete(sprintf('%sResources/*crave*.jpg', homepath));

%% Sort foods to determine craved and not craved foods
ratings = imageinfo{1,1};
category = imageinfo{1,2};
images = imageinfo{1,3};

% Recode least craved category (0 = 4)
category(category == 0) = 4;

% Code NaN ratings as 0 for sorting
ratingsNaN = [ratings, category];
if sum(isnan(ratingsNaN(:,1))) > 0
    warning('Converting NaNs to 0');
    ratingsNaN(isnan(ratingsNaN(:,1))) = 0;
end

% Sort images by rating (ascending 1 --> 4) and category (descending 4 --> 1)
[sortedvals, sortidx] = sortrows(ratingsNaN,[1, -2]);
sortedratings = sortedvals(:,1);

% Check if there are enough trials with ratings 1-4 and exclude 0s and NaNs
sumtrials = sum(sortedratings(:,1) > 0);
ntrials = n_craved + n_notcraved;
deficit = ntrials - sumtrials;

if deficit > 0
    warning('Too few images with ratings > 0. Including %d trials rated 0.', deficit);
    total = sumtrials + deficit;
    sortedratings_g0 = sortedratings(end-(total-1):end);
    sortidx_g0 = sortidx(end-(total-1):end);
else
    sortedratings_g0 = sortedratings(sortedratings > 0);
    sortidx_g0 = sortidx(sortedratings > 0);
end

% Select first and last n trials 
craved = images(sortidx_g0(end-(n_craved-1):end));
notcraved = images(sortidx_g0(1:n_notcraved));

% Randomize images
craved_rand = craved(randperm(length(craved)));
notcraved_rand = notcraved(randperm(length(notcraved)));

% Initialize stimuli key
stimulus_key = {};

% Move craved foods to the Resources directory
disp('Adding craved foods to Resource directory')
for i = 1:length(craved_rand)
  img = craved_rand{i};
  category = img(1:regexp(img,'[0-9]{2}.jpg')-1);
  img_roc = strcat('crave',num2str(i,'%02.0f'),'.jpg');
  copyfile(fullfile(homepath,'Stimuli',category,img), fullfile(homepath,'Resources',img_roc));
  temp = {img_roc, img, category};
  stimulus_key = vertcat(stimulus_key, temp);
end

% Move not craved foods to the Resources directory
disp('Adding not craved foods to Resource directory')
for i = 1:length(notcraved_rand)
  img = notcraved_rand{i};
  category = img(1:regexp(img,'[0-9]{2}.jpg')-1);
  img_roc = strcat('nocrave',num2str(i,'%02.0f'),'.jpg');
  copyfile(fullfile(homepath,'Stimuli',category,img), fullfile(homepath,'Resources',img_roc));
  temp = {img_roc, img, category};
  stimulus_key = vertcat(stimulus_key, temp);
end

% Save subject stimuli key in Output directory
disp('Saving subject stimulus key to Output directory')
d = clock;
output = fullfile(homepath,'Output',sprintf('%s%s_%s_stimuli_%s_%02.0f-%02.0f.mat',study,subjid,ssnid,date,d(4),d(5)));
save(output,'stimulus_key');

% Clear output
clear all; clc