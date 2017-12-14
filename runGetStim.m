%% Tidy and get working directory
clear all
studyDir = pwd;

fprintf('The current directory is %s\n',studyDir)
dirCheck = input('Is this the correct study directory (y/n)?  ', 's'); 
if dirCheck ~= 'y'
    studyDir = input('Please specify the full path to the correct study directory:  ', 's');
end
%% Select stimuli and populate folders
categories = {'Chocolate' 'Cookies' 'Donuts' 'French Fries' 'Ice Cream' 'Pasta' 'Pizza'};
nCategories = length(categories);

mostCravedTrue = 'n';
leastCravedTrue = 'n';

while mostCravedTrue ~= 'y'
        
    fprintf('\n\nWhich category of food do you crave the MOST? \n');
    fprintf('(Where "crave" means that you want it, like it, and would eat it if it were in front of you, even if you were full.)\n\n');

    for i = 1:nCategories
        fprintf('%2.0f - %s\n',i,categories{i});
    end

    mostCraved = input('\nPlease select a category: ');
    fprintf('You selected %s. ', categories{mostCraved});
    mostCravedTrue = input('Is that correct? (y/n): ','s');

end

fprintf('\n\nGreat, let''s move on...\n\n');

while leastCravedTrue ~= 'y'
    
    fprintf('\n\nWhich category of food do you crave the LEAST? \n');
    fprintf('(Where "crave" means that you want it, like it, and would eat it if it were in front of you, even if you were full.)\n\n');
    
    for i = 1:nCategories
        fprintf('%2.0f - %s\n',i,categories{i});
    end

    leastCraved = input('\nPlease select a category: ');
    fprintf('You selected %s. ', categories{leastCraved});
    leastCravedTrue = input('Is that correct? (y/n): ','s');

end

fprintf('\n\nExcellent, thank you.\n\n\n');

cd(studyDir)   %Make sure this works

craveDir = strcat('Crave_',num2str(mostCraved));        % Where are the craved food files (labeled as "Crave01.jpg", etc.)
noCraveDir = strcat('NoCrave_',num2str(leastCraved));   % Where are the non-craved food files (labeled as "NoCrave01.jpg", etc.)

% Go into the Resources folder and remove all of the existing "crave##.jpg"
% and "nocrave##.jpg" images
cd('Resources')
    delete *crave*.jpg
cd('..')

if rand>0.5             % Coin flip--half of the time swap pics so not always using the same images for reappraise/view
   
    % Go into the crave directory, list the files, and figure out where
    % everything lives
    cd(craveDir)
    craveFiles = dir('crave*.jpg');
    prefixInd = strfind(craveFiles(1).name,'.');
    prefix = craveFiles(1).name(1:prefixInd-3);
    
    % Loop through each file...
    for j = 1:length(craveFiles)
        
        oldFileN = str2double(craveFiles(j).name(prefixInd-2:prefixInd-1));    % Original file number
        
        % If it is odd, add one; if even, subtract one
        if mod(j,2) % odds
            newFileN = oldFileN+1;
        else %evens
            newFileN = oldFileN-1;
        end
        
        newFile = strcat(prefix,num2str(newFileN,'%02.0f'),'.jpg');         % The name of the new file

        [success,msg] = copyfile(craveFiles(j).name,strcat('../Resources/',newFile),'f');       % Copy the new file to resources
        if ~success
            fprintf('Error: %s on crave file %2.0f\n',msg,j);
        end
                
        WaitSecs(.01);
    end
    
    cd('../')   % Back up to the main task directory
    
    % Go into the no-crave directory, list the files, and figure out where
    % everything lives
    cd(noCraveDir);
    noCraveFiles = dir('nocrave*.jpg');
    prefixInd = strfind(noCraveFiles(1).name,'.');
    prefix = noCraveFiles(1).name(1:prefixInd-3);
    
    % Loop through each file...
    for j = 1:length(noCraveFiles)
        
        oldFileN = str2double(noCraveFiles(j).name(prefixInd-2:prefixInd-1));  % Original file number
        
        % If it is odd, add one; if even, subtract one
        if mod(j,2) % odds
            newFileN = oldFileN+1;
        else %evens
            newFileN = oldFileN-1;
        end
        
        newFile = strcat(prefix,num2str(newFileN,'%02.0f'),'.jpg');          % The name of the new file

        [success,msg] = copyfile(noCraveFiles(j).name,strcat('../','Resources/',newFile),'f');   % Copy the new file to resources
        if ~success
            fprintf('Error: %s on nocrave file %2.0f\n',msg,j);
        end
        
        WaitSecs(.01);
    end
    
    cd('../');   % Back up to the main task directory

else    % Coin flip--other half of the time just copy the files into the Resources directory as the are
    
    [success,msg] = copyfile(strcat(craveDir,'/*'),'Resources','f');
    if ~success
        fprintf('Error: %s on crave file.\n',msg);
    end
        
    [success,msg] = copyfile(strcat(noCraveDir,'/*'),'Resources','f');
    if ~success
        fprintf('Error: %s on nocrave file.\n',msg);
    end
end