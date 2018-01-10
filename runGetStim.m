%% runImages.m %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%
% Author: Dani Cosme
%
% Description: This script selects food images based on their ratings,
% randomizes them, and adds the images to the ROC/Resources folder
% 
% Inputs: Ratings .csv file in [path tbd] with the following name:
%   [study][subject ID]_ratings.csv (e.g. DEV999_ratings.csv)
% 
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%% Housecleaning before the guests arrive
pathtofile = mfilename('fullpath');
homepath = pathtofile(1:(regexp(pathtofile,'runGetStim') - 1));
addpath(homepath);

cd(homepath);
clear all; close all; Screen('CloseAll'); 
homepath = [pwd '/'];

%% Get study and subject id from user
study = input('Study name:  ', 's');
subjid = input('Subject number:  ', 's');

%% Specify number of craved and not craved images
n_craved = 40;
n_notcraved = 20;

%% Load image info
% Define dropbox path
dxpath = '/Users/Shared/Dropbox (PfeiBer Lab)/Devaluation/Tasks/ImageSelection/output/Categorized';

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

%% Sort healthy foods into runs
% Select healthy images
ratings = imageinfo{1,1};
%idx = imageinfo{1,2};
images = imageinfo{1,3};

% Sort images by rating (ascending 1-4)
[sortedvals, sortidx] = sort(ratings);

% Check if there are enough trials with ratings 1-4 and exclude 0s and NaNs
sumtrials = sum(sortedvals > 0);
deficit = (n_craved + n_notcraved) - sumtrials;

if deficit > 0
    warning(sprintf('Too few images with ratings > 0. Including %d trials rated 0.', deficit));
    sortedvals_g0 = sortedvals(end-(2*ntrials-1):end);
    sortidx_g0 = sortidx(end-(2*ntrials-1):end);
else
    sortedvals_g0 = sortedvals(sortedvals > 0);
    sortidx_g0 = sortidx(sortedvals > 0);
end

% Shuffle within rating category
vals = unique(sortedvals_g0);
randidx = [];

for i = 1:length(vals)
    val = vals(i);
    validx = sortidx_g0(sortedvals_g0 == val);
    temp = validx(randperm(length(validx)));
    randidx = vertcat(randidx,temp);
end

% Select first and last n trials 
craved = images(randidx(end-(n_craved-1):end));
notcraved = images(randidx(1:n_notcraved));

% Randomize images
craved_rand = craved(randperm(length(craved)));
notcraved_rand = notcraved(randperm(length(notcraved)));

% Initialize stimuli key
stimuli_key = {};

% Move craved foods to the Resources directory
disp('Adding craved foods to Resource directory')
for i = 1:length(craved_rand)
  img = craved_rand{i};
  category = img(1:regexp(img,'[0-9]{2}.jpg')-1);
  img_roc = strcat('crave',num2str(i,'%02.0f'),'.jpg');
  copyfile(fullfile(homepath,'Stimuli',category,img), fullfile(homepath,'Resources',img_roc));
  temp = {img_roc, img, category};
  stimuli_key = vertcat(stimuli_key, temp);
end

% Move not craved foods to the Resources directory
disp('Adding not craved foods to Resource directory')
for i = 1:length(notcraved_rand)
  img = notcraved_rand{i};
  category = img(1:regexp(img,'[0-9]{2}.jpg')-1);
  img_roc = strcat('nocrave',num2str(i,'%02.0f'),'.jpg');
  copyfile(fullfile(homepath,'Stimuli',category,img), fullfile(homepath,'Resources',img_roc));
  temp = {img_roc, img, category};
  stimuli_key = vertcat(stimuli_key, temp);
end

% Save subject stimuli key in Output directory
disp('Saving subject stimuli key to Output directory')
d = clock;
output = fullfile(homepath,'Output',sprintf('%s_%s_stimuli_%s_%02.0f-%02.0f.mat',subjid,study,date,d(4),d(5)));
save(output,'stimuli_key');