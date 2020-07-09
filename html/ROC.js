/************ 
 * Roc Test *
 ************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([(- 1), (- 1), (- 1)]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'ROC';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '', 'run_number': ''};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(setupRoutineBegin());
flowScheduler.add(setupRoutineEachFrame());
flowScheduler.add(setupRoutineEnd());
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
  {name: 'rate.jpg', path: './resources/rate.jpg'},
  {name: 'look.jpg', path: './resources/look.jpg'},
  {name: 'reappraise.jpg', path: './resources/reappraise.jpg'},
  {name: 'ROC_R1beh.csv', path: './resources/ROC_R1beh.csv'},
  {name: 'ROC_R2beh.csv', path: './resources/ROC_R2beh.csv'},
  {name: 'neutral01.jpg', path: './resources/neutral01.jpg'},
  {name: 'neutral02.jpg', path: './resources/neutral02.jpg'},
  {name: 'neutral03.jpg', path: './resources/neutral03.jpg'},
  {name: 'neutral04.jpg', path: './resources/neutral04.jpg'},
  {name: 'neutral05.jpg', path: './resources/neutral05.jpg'},
  {name: 'neutral06.jpg', path: './resources/neutral06.jpg'},
  {name: 'neutral07.jpg', path: './resources/neutral07.jpg'},
  {name: 'neutral08.jpg', path: './resources/neutral08.jpg'},
  {name: 'neutral09.jpg', path: './resources/neutral09.jpg'},
  {name: 'neutral10.jpg', path: './resources/neutral10.jpg'},
  {name: 'neutral11.jpg', path: './resources/neutral11.jpg'},
  {name: 'neutral12.jpg', path: './resources/neutral12.jpg'},
  {name: 'neutral13.jpg', path: './resources/neutral13.jpg'},
  {name: 'neutral14.jpg', path: './resources/neutral14.jpg'},
  {name: 'neutral15.jpg', path: './resources/neutral15.jpg'},
  {name: 'neutral16.jpg', path: './resources/neutral16.jpg'},
  {name: 'neutral17.jpg', path: './resources/neutral17.jpg'},
  {name: 'neutral18.jpg', path: './resources/neutral18.jpg'},
  {name: 'neutral19.jpg', path: './resources/neutral19.jpg'},
  {name: 'neutral20.jpg', path: './resources/neutral20.jpg'}]
});


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.2';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var setupClock;
var window_width;
var window_height;
var participant;
var session;
var run_number;
var session_type;
var start_text_str;
var conditions_file;
var continueRoutine;
var instructionsClock;
var start_text;
var start_trigger;
var trialClock;
var fixation;
var background;
var black_background;
var reappraise_look;
var stimulus;
var rating_image;
var rating_response;
var endClock;
var end_text;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "setup"
  setupClock = new util.Clock();
  window_width = psychoJS.window.size[0];
  window_height = psychoJS.window.size[1];
  
  function is_mri_session(session) {
      return ((session === "1") || (session === "2"));
  }
  participant = expInfo["participant"];
  session = expInfo["session"];
  run_number = expInfo["run_number"];
  if (is_mri_session(session)) {
      session_type = "scan";
      start_text_str = "Calibrating scanner.\nPlease hold VERY still.";
  } else {
      session_type = "beh";
      start_text_str = "The task is about to begin.\nGet ready!";
  }
  conditions_file = ((("ROC_R" + run_number.toString()) + session_type) + ".csv");
  if ((run_number === "0")) {
      conditions_file = "ROC_practice.csv";
      continueRoutine = false;
  }

  psychoJS.downloadResources([
    {name: 'crave01.jpg', path: './resources/' + expInfo["participant"] + '/crave01.jpg'},
    {name: 'crave02.jpg', path: './resources/' + expInfo["participant"] + '/crave02.jpg'},
    {name: 'crave03.jpg', path: './resources/' + expInfo["participant"] + '/crave03.jpg'},
    {name: 'crave04.jpg', path: './resources/' + expInfo["participant"] + '/crave04.jpg'},
    {name: 'crave05.jpg', path: './resources/' + expInfo["participant"] + '/crave05.jpg'},
    {name: 'crave06.jpg', path: './resources/' + expInfo["participant"] + '/crave06.jpg'},
    {name: 'crave07.jpg', path: './resources/' + expInfo["participant"] + '/crave07.jpg'},
    {name: 'crave08.jpg', path: './resources/' + expInfo["participant"] + '/crave08.jpg'},
    {name: 'crave09.jpg', path: './resources/' + expInfo["participant"] + '/crave09.jpg'},
    {name: 'crave10.jpg', path: './resources/' + expInfo["participant"] + '/crave10.jpg'},
    {name: 'crave11.jpg', path: './resources/' + expInfo["participant"] + '/crave11.jpg'},
    {name: 'crave12.jpg', path: './resources/' + expInfo["participant"] + '/crave12.jpg'},
    {name: 'crave13.jpg', path: './resources/' + expInfo["participant"] + '/crave13.jpg'},
    {name: 'crave14.jpg', path: './resources/' + expInfo["participant"] + '/crave14.jpg'},
    {name: 'crave15.jpg', path: './resources/' + expInfo["participant"] + '/crave15.jpg'},
    {name: 'crave16.jpg', path: './resources/' + expInfo["participant"] + '/crave16.jpg'},
    {name: 'crave17.jpg', path: './resources/' + expInfo["participant"] + '/crave17.jpg'},
    {name: 'crave18.jpg', path: './resources/' + expInfo["participant"] + '/crave18.jpg'},
    {name: 'crave19.jpg', path: './resources/' + expInfo["participant"] + '/crave19.jpg'},
    {name: 'crave20.jpg', path: './resources/' + expInfo["participant"] + '/crave20.jpg'},
    {name: 'crave21.jpg', path: './resources/' + expInfo["participant"] + '/crave21.jpg'},
    {name: 'crave22.jpg', path: './resources/' + expInfo["participant"] + '/crave22.jpg'},
    {name: 'crave23.jpg', path: './resources/' + expInfo["participant"] + '/crave23.jpg'},
    {name: 'crave24.jpg', path: './resources/' + expInfo["participant"] + '/crave24.jpg'},
    {name: 'crave25.jpg', path: './resources/' + expInfo["participant"] + '/crave25.jpg'},
    {name: 'crave26.jpg', path: './resources/' + expInfo["participant"] + '/crave26.jpg'},
    {name: 'crave27.jpg', path: './resources/' + expInfo["participant"] + '/crave27.jpg'},
    {name: 'crave28.jpg', path: './resources/' + expInfo["participant"] + '/crave28.jpg'},
    {name: 'crave29.jpg', path: './resources/' + expInfo["participant"] + '/crave29.jpg'},
    {name: 'crave30.jpg', path: './resources/' + expInfo["participant"] + '/crave30.jpg'},
    {name: 'crave31.jpg', path: './resources/' + expInfo["participant"] + '/crave31.jpg'},
    {name: 'crave32.jpg', path: './resources/' + expInfo["participant"] + '/crave32.jpg'},
    {name: 'crave33.jpg', path: './resources/' + expInfo["participant"] + '/crave33.jpg'},
    {name: 'crave34.jpg', path: './resources/' + expInfo["participant"] + '/crave34.jpg'},
    {name: 'crave35.jpg', path: './resources/' + expInfo["participant"] + '/crave35.jpg'},
    {name: 'crave36.jpg', path: './resources/' + expInfo["participant"] + '/crave36.jpg'},
    {name: 'crave37.jpg', path: './resources/' + expInfo["participant"] + '/crave37.jpg'},
    {name: 'crave38.jpg', path: './resources/' + expInfo["participant"] + '/crave38.jpg'},
    {name: 'crave39.jpg', path: './resources/' + expInfo["participant"] + '/crave39.jpg'},
    {name: 'crave40.jpg', path: './resources/' + expInfo["participant"] + '/crave40.jpg'},
    {name: 'nocrave01.jpg', path: './resources/' + expInfo["participant"] + '/nocrave01.jpg'},
    {name: 'nocrave02.jpg', path: './resources/' + expInfo["participant"] + '/nocrave02.jpg'},
    {name: 'nocrave03.jpg', path: './resources/' + expInfo["participant"] + '/nocrave03.jpg'},
    {name: 'nocrave04.jpg', path: './resources/' + expInfo["participant"] + '/nocrave04.jpg'},
    {name: 'nocrave05.jpg', path: './resources/' + expInfo["participant"] + '/nocrave05.jpg'},
    {name: 'nocrave06.jpg', path: './resources/' + expInfo["participant"] + '/nocrave06.jpg'},
    {name: 'nocrave07.jpg', path: './resources/' + expInfo["participant"] + '/nocrave07.jpg'},
    {name: 'nocrave08.jpg', path: './resources/' + expInfo["participant"] + '/nocrave08.jpg'},
    {name: 'nocrave09.jpg', path: './resources/' + expInfo["participant"] + '/nocrave09.jpg'},
    {name: 'nocrave10.jpg', path: './resources/' + expInfo["participant"] + '/nocrave10.jpg'},
    {name: 'nocrave11.jpg', path: './resources/' + expInfo["participant"] + '/nocrave11.jpg'},
    {name: 'nocrave12.jpg', path: './resources/' + expInfo["participant"] + '/nocrave12.jpg'},
    {name: 'nocrave13.jpg', path: './resources/' + expInfo["participant"] + '/nocrave13.jpg'},
    {name: 'nocrave14.jpg', path: './resources/' + expInfo["participant"] + '/nocrave14.jpg'},
    {name: 'nocrave15.jpg', path: './resources/' + expInfo["participant"] + '/nocrave15.jpg'},
    {name: 'nocrave16.jpg', path: './resources/' + expInfo["participant"] + '/nocrave16.jpg'},
    {name: 'nocrave17.jpg', path: './resources/' + expInfo["participant"] + '/nocrave17.jpg'},
    {name: 'nocrave18.jpg', path: './resources/' + expInfo["participant"] + '/nocrave18.jpg'},
    {name: 'nocrave19.jpg', path: './resources/' + expInfo["participant"] + '/nocrave19.jpg'},
    {name: 'nocrave20.jpg', path: './resources/' + expInfo["participant"] + '/nocrave20.jpg'}]
  );
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  start_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'start_text',
    text: start_text_str,
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.075,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  start_trigger = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  fixation = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation', units : 'pix', 
    vertices: 'cross', size:[48, 48],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  background = new visual.Rect ({
    win: psychoJS.window, name: 'background', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  black_background = new visual.Rect ({
    win: psychoJS.window, name: 'black_background', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  reappraise_look = new visual.ImageStim({
    win : psychoJS.window,
    name : 'reappraise_look', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  stimulus = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimulus', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  rating_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rating_image', units : undefined, 
    image : 'rate.jpg', mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -5.0 
  });
  rating_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: 'The task is now complete.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.075,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var setupComponents;
function setupRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'setup'-------
    t = 0;
    setupClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    setupComponents = [];
    
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function setupRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'setup'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function setupRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'setup'-------
    for (const thisComponent of setupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _start_trigger_allKeys;
var instructionsComponents;
function instructionsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    start_trigger.keys = undefined;
    start_trigger.rt = undefined;
    _start_trigger_allKeys = [];
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(start_text);
    instructionsComponents.push(start_trigger);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function instructionsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *start_text* updates
    if (t >= 0.0 && start_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_text.tStart = t;  // (not accounting for frame time here)
      start_text.frameNStart = frameN;  // exact frame index
      
      start_text.setAutoDraw(true);
    }

    
    // *start_trigger* updates
    if (t >= 0.0 && start_trigger.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_trigger.tStart = t;  // (not accounting for frame time here)
      start_trigger.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { start_trigger.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { start_trigger.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { start_trigger.clearEvents(); });
    }

    if (start_trigger.status === PsychoJS.Status.STARTED) {
      let theseKeys = start_trigger.getKeys({keyList: [], waitRelease: false});
      _start_trigger_allKeys = _start_trigger_allKeys.concat(theseKeys);
      if (_start_trigger_allKeys.length > 0) {
        start_trigger.keys = _start_trigger_allKeys[_start_trigger_allKeys.length - 1].name;  // just the last key pressed
        start_trigger.rt = _start_trigger_allKeys[_start_trigger_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instructions'-------
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: conditions_file,
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trialRoutineBegin(snapshot));
    thisScheduler.add(trialRoutineEachFrame(snapshot));
    thisScheduler.add(trialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var _rating_response_allKeys;
var trialComponents;
function trialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    background.setSize([window_width, window_height]);
    background.setFillColor(new util.Color(background_color));
    black_background.setSize([(window_width - 150), (window_height - 150)]);
    reappraise_look.setImage(reappraise_or_look);
    stimulus.setImage(image_file);
    rating_response.keys = undefined;
    rating_response.rt = undefined;
    _rating_response_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(fixation);
    trialComponents.push(background);
    trialComponents.push(black_background);
    trialComponents.push(reappraise_look);
    trialComponents.push(stimulus);
    trialComponents.push(rating_image);
    trialComponents.push(rating_response);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function trialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }

    frameRemains = 0.0 + jitter_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    
    // *background* updates
    if (t >= jitter_duration && background.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background.tStart = t;  // (not accounting for frame time here)
      background.frameNStart = frameN;  // exact frame index
      
      background.setAutoDraw(true);
    }

    frameRemains = jitter_duration + 9.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (background.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      background.setAutoDraw(false);
    }
    
    // *black_background* updates
    if (t >= jitter_duration && black_background.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      black_background.tStart = t;  // (not accounting for frame time here)
      black_background.frameNStart = frameN;  // exact frame index
      
      black_background.setAutoDraw(true);
    }

    frameRemains = jitter_duration + 9.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (black_background.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      black_background.setAutoDraw(false);
    }
    
    // *reappraise_look* updates
    if (t >= jitter_duration && reappraise_look.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reappraise_look.tStart = t;  // (not accounting for frame time here)
      reappraise_look.frameNStart = frameN;  // exact frame index
      
      reappraise_look.setAutoDraw(true);
    }

    frameRemains = jitter_duration + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (reappraise_look.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      reappraise_look.setAutoDraw(false);
    }
    
    // *stimulus* updates
    if (t >= (jitter_duration + 2) && stimulus.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimulus.tStart = t;  // (not accounting for frame time here)
      stimulus.frameNStart = frameN;  // exact frame index
      
      stimulus.setAutoDraw(true);
    }

    frameRemains = (jitter_duration + 2) + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stimulus.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stimulus.setAutoDraw(false);
    }
    
    // *rating_image* updates
    if (t >= (jitter_duration + 7) && rating_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rating_image.tStart = t;  // (not accounting for frame time here)
      rating_image.frameNStart = frameN;  // exact frame index
      
      rating_image.setAutoDraw(true);
    }

    frameRemains = (jitter_duration + 7) + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rating_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rating_image.setAutoDraw(false);
    }
    
    // *rating_response* updates
    if (t >= (jitter_duration + 7) && rating_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rating_response.tStart = t;  // (not accounting for frame time here)
      rating_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { rating_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { rating_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { rating_response.clearEvents(); });
    }

    frameRemains = (jitter_duration + 7) + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rating_response.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rating_response.status = PsychoJS.Status.FINISHED;
  }

    if (rating_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = rating_response.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _rating_response_allKeys = _rating_response_allKeys.concat(theseKeys);
      if (_rating_response_allKeys.length > 0) {
        rating_response.keys = _rating_response_allKeys[_rating_response_allKeys.length - 1].name;  // just the last key pressed
        rating_response.rt = _rating_response_allKeys[_rating_response_allKeys.length - 1].rt;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rating_response.keys', rating_response.keys);
    if (typeof rating_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('rating_response.rt', rating_response.rt);
        }
    
    rating_response.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var endComponents;
function endRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'end'-------
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(end_text);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function endRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'end'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_text* updates
    if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_text.tStart = t;  // (not accounting for frame time here)
      end_text.frameNStart = frameN;  // exact frame index
      
      end_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (end_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      end_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'end'-------
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
