const getSleepHours=day=>{
    switch(day){
      case 'monday':
      return 8;
      break;
          case 'tuesday':
      return 8;
      break;
          case 'wednesday':
      return 8;
      break;
          case 'thursday':
      return 4;
      break;
          case 'friday':
      return 10;
      break;
          case 'saturday':
      return 8;
      break;
          case 'sunday':
      return 1;
      break;
    }
  }
  
  // console.log(getSleepHours('friday'))
  
  const getActualSleepHours=()=>{
   return getSleepHours('sunday')+ getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday');
  }
  
  const getIdealSleepHours=(idealHours=7)=>{
    return idealHours *7;
  }
  // console.log(getActualSleepHours());
  // console.log(getIdealSleepHours());
  
  const calculateSleepDebt=()=>{
    const actualSleepHours=getActualSleepHours();
    const idealSleepHours=getIdealSleepHours(10);
    const sleep=actualSleepHours-idealSleepHours;
  
    if(actualSleepHours===idealSleepHours){
      console.log(`You have got perfect amount of sleep`);
    }else if(actualSleepHours>idealSleepHours){
      console.log(`You got more sleep than needed. You have slept ${sleep} hours extra`);
    }else{
      console.log(`You should get some rest. You have ${sleep} hours sleep debt`);
    }
  
  }
  calculateSleepDebt();