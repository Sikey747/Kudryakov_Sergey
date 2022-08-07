class Human {
  constructor(height,weight,name,yearBirth,gender,invalid) {
    this.height = height;
    this.weight = weight;
    this.name = name;
    this.yearBirth = yearBirth;
    this.gender = gender;
    this.invalid = invalid;
  }
    // возможность смены имени
    set nameChange(name){
      this.name= name;
    }
  // изменить инвалидность,
    changeInvalid(invalid) {
      this.invalid = invalid;
    }
  // получить все данные о человеке.
    get getInfo(){
    return {
      height: this.height,
      weight: this.weight,
      name: this.name,
      yearBirth: this.yearBirth.toLocaleDateString(),
      gender: this.gender,
      invalid: this.invalid,
    }
    }
  //приветствие
    greetings() {
      return "Привет меня зовут " + this.name;
    }
}

class FrontendDeveloper extends Human {
  constructor(height, weight, name, yearBirth, gender, invalid, carierStart, previousCompanies) {
    super(height, weight, name, yearBirth, gender, invalid);
    this.carierStart = carierStart;
    this.previousCompanies = previousCompanies;
  }

  greetingsDeveloper(name, carierStart) {
    return super.greetings() + " я Фронтенд разработчик. Работаю с " + this.carierStart.toLocaleDateString();
  }

  get getInfo(){
   return{
     ...super.getInfo,
     carierStart: this.carierStart.toLocaleDateString(),
     previousCompanies: this.previousCompanies,
   }
  }

  allMoneyTime() {
    let sum;
    sum = this.previousCompanies.reduce((acc, el) => {
      let otvet = ((Math.ceil((el.end - el.start) / 2629800000)) * el.salaryPerMonth);
      acc += otvet
      return acc;
    }, 0)
   return "Вы заработали за все время " + sum + " Usd"
  }

  checkCompany(nameCompany) {
   return this.previousCompanies.find(el => {
      if (el.companyName === nameCompany) {
        return el;
      }
    })
  }

  newCompanies(start1,end1,salaryPerMonth1,position1,companyName1){
    const start = new Date (start1);
    const end = new Date (end1);
    const salaryPerMonth = +salaryPerMonth1;
    const position = "" + position1;
    const companyName = "" + companyName1;
    const workplace = {start,end,salaryPerMonth,position,companyName};
   return this.previousCompanies.push(workplace);
  }
}

const superMaster = new FrontendDeveloper(
  181,
  91,
  "Сергей",
  new Date(1994,8,19),
  "male",
  false,
  new Date(2008,1,29),
  [
    {start: new Date(2008,1,29),end: new Date(2010,4,7),salaryPerMonth:500,position:"junior",companyName:"Gameloft"},
    {start: new Date(2013,1,2),end: new Date(2017,5,27),salaryPerMonth:1000,position:"senior",companyName:"IceRecords"},
    {start: new Date(2017,6,12),end: new Date(2017,9,7),salaryPerMonth:500,position:"junior",companyName:"Moyo"},
    {start: new Date(2017,10,5),end: new Date(),salaryPerMonth:5000,position:"middle",companyName:"Ukraine Presedent"}
  ]);

const companyInfo = superMaster.previousCompanies.find(el => {
  if (el.companyName === "IceRecords"){
    return el;
  }
})

console.log(superMaster.greetingsDeveloper())

console.log(superMaster.allMoneyTime());

superMaster.nameChange = "Жора";

console.log(superMaster.name);

superMaster.changeInvalid(true);

console.log(superMaster.invalid)

console.log(superMaster.getInfo);

console.log(superMaster.checkCompany("IceRecords"));

superMaster.newCompanies("2006.02.20","2007.08.12",50,"junior","Redmi");

console.log(superMaster.getInfo)

console.log(superMaster.allMoneyTime());

class Builder extends Human {
  constructor(height, weight, name, yearBirth, gender, invalid, locationBuildingObject, toolKit, workSpeed) {
    super(height, weight, name, yearBirth, gender, invalid);
    this.locationBuildingObject = locationBuildingObject;
    this.toolKit = toolKit;
    this.workSpeed = workSpeed;
  }

  buildhouse(squareMeters) {
    const timebuild = squareMeters * this.workSpeed;
    if (timebuild < 24) {
      return "Это займет " + timebuild + " часов";
    } else if (timebuild >= 24 && timebuild < 168) {
      return "Это займет " + (Math.trunc(timebuild/24)) + " Дней и " + timebuild%24 + " Часов";
    } else if (timebuild >= 168 && timebuild < 730) {
      return "Это займет " + (Math.trunc(timebuild/168)) + " Недель " + (Math.trunc((timebuild%168)/24)) +" Дней и " + timebuild%24 + " Часов";
    } else if (timebuild >= 730 && timebuild < 8766) {
      return "Это займет " + (Math.trunc(timebuild/730)) + " Месяца " + (Math.trunc((timebuild%730)/168)) + " Недель " + (Math.trunc((timebuild%168)/24)) +" Дней и " + timebuild%24 + " Часов";
    } else if (timebuild >= 8766)
      return "Это займет " + (Math.trunc(timebuild/8766)) + " Лет " + (Math.trunc((timebuild%8766)/730)) + " Месяца " + (Math.trunc((timebuild%730)/168)) + " Недель " + (Math.trunc((timebuild%168)/24)) +" Дней и " + timebuild%24 + " Часов";
  }
}

const nataha = new Builder(168,60,"Натаха",new Date(1996,7,23),"woman",true,"Poltava",["кирка","лопота","косметичка","айфон"],2);


console.log(nataha.buildhouse(100010));











