# Regulation of Craving (ROC) Task

## Introduction

The Regulation of Craving (ROC) task presents image stimuli of foods that are rated for craving.

- Conditions: pictures of food, where the food is either neutral, in a category that the participant self-reports they crave, or in a category that the participant self-reports they do not crave.
- Trial structure: Fixation cross (~1s or ~5s), cue indicating look or reappraisal (2s), stimulus (5s), 1-5 rating (2.5s) => 10.5 or 14.5s/trial.  

## How to run the task

1. When this task is run online, via pavlovia.org, make sure that a participant-specific folder, containing the craved and non-craved food images, has been created in the `html/` folder. This can be done by starting the Python version of the task and moving the images crave\*.jpg and nocrave\*.jpg images from the `Resources` folder. Then, these changes have to be pushed to gitlab.pavlovia.org. 
2. Create the experiment URL with a query string that specifies the participant number, the session number, and the run number. For example, for participant 888, in session 3, performing run number 1, the URL must include `participant=888&session=3&run_number=1`. After this URL is accessed, the images will be downloaded to the participant's computer, then the task will start automatically.

## Task description

The task starts by displaying instruction text. The instruction text is displayed until the user presses one of the response buttons, in the behavioral version, or the trigger signal is received from the MRI, in the scanner version. The instruction text for the behavioral version is:
```
The task is about to begin.
Get ready!
```
In the scanner version it is:
```
Calibrating scanner.
Please hold VERY still.
```

Trials are repeated 40 times, in the behavioral version, or 20 times, in the scanner version.

### Trial structure

1. Display a white fixation cross on a black background for ~1s in the behavioral version or for ~5s in the scanner version. The cross is 48 pixels square.
2. Display a cue of white text on black background, with a colored border for 2s. The cue is either the word `LOOK` or the word `REGULATE`. The border is colored green (RGB color in hexadecimal notation 0x00cd00) when the word `LOOK` is displayed, or is colored blue (0x0000ff) when the word `REGULATE` is displayed. The border starts at the outermost extent of the window and is 75 pixels wide.
3. Display the image stimulus for 5s, with the colored border described in step 2.
4. Display a rating scale, from 1 to 4, for 2.5s. The rating instructions, in white text on a black background, are
```
How much do you _desire to eat_ the
item shown in the last picture?
```
The rating scale has 1 labeled as `No Desire` and 4 labeled as `Strong Desire`.


Duration is 10.5s per trial, so 40 * 10.5 = 420s = 7 minutes for the behavioral version, or 14.5s per trial, so 20 * 14.5 = 290s = 4m50s for the scanner version.

## Configuration

The task is configured by a CSV file, `ROC_R<run_number><beh or scan>.csv`, i.e. `ROC_R1beh.csv` for the first run of the behavioral version or `ROC_R3scan.csv` for the third run of the scanner version. The CSV file must contain four columns: the duration in seconds the fixation cross is displayed (`jitter_duration`), the color of the border instructing look or regulate (`background_color`), the cue image to be displayed (`reappraise_or_look`), and the stimulus image to be displayed (`image_file`).

The location of the images is relative to the location of the `ROC.psyexp` task definition, and are currently stored in `Resources/`.

On the first run of each session, the image ratings from the ImageSelection task are used to determine which images to display for the craved and non-craved conditions. Then the required images are copied from `Stimuli` to `Resources`.

## Developer documentation

Developed with PsychoPy v2020.1.2
