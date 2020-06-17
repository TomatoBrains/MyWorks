import $ from 'jquery';

let allProfileInfo = [
    {
      "_id": "5e9abd32b830663252a1a553",
      "index": 0,
      "guid": "cd2cd136-9664-4757-823e-412a0581626e",
      "isActive": false,
      "balance": "$1,405.94",
      "picture": "http://placehold.it/32x32",
      "age": 35,
      "eyeColor": "blue",
      "name": {
        "first": "Nolan",
        "last": "Dodson"
      },
      "company": "GENMOM",
      "email": "nolan.dodson@genmom.us",
      "phone": "+1 (809) 410-2587",
      "address": "594 Lyme Avenue, Sutton, Minnesota, 6751",
      "about": "Non nostrud exercitation cillum cupidatat officia consequat anim id excepteur non velit anim. Aliquip qui occaecat ad dolore non adipisicing nostrud culpa. Elit est non esse ipsum occaecat nulla cillum enim ex. Aliqua id tempor dolor aute ullamco consequat cupidatat incididunt duis labore officia adipisicing. Pariatur consequat ex reprehenderit irure aliqua consectetur.",
      "registered": "Thursday, July 16, 2015 1:23 PM",
      "friends": [
        {
          "id": 0,
          "name": "Liz Underwood"
        },
        {
          "id": 1,
          "name": "Jennie Lynn"
        },
        {
          "id": 2,
          "name": "Kristine Cochran"
        }
      ],
      "greeting": "Hello, Nolan! You have 10 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5e9abd3265bc71d749924ace",
      "index": 1,
      "guid": "bc7ea661-cebf-4cb6-b13c-70c511ce37f8",
      "isActive": true,
      "balance": "$1,378.85",
      "picture": "http://placehold.it/32x32",
      "age": 25,
      "eyeColor": "brown",
      "name": {
        "first": "Castillo",
        "last": "Berg"
      },
      "company": "QUILTIGEN",
      "email": "castillo.berg@quiltigen.net",
      "phone": "+1 (876) 564-2364",
      "address": "224 Kenilworth Place, Spelter, Arizona, 6558",
      "about": "Sit in duis deserunt reprehenderit eiusmod non minim dolor velit veniam. Duis ut irure esse id amet culpa aliquip amet incididunt ipsum excepteur sint aliquip. Dolore quis Lorem fugiat duis. Tempor commodo ex irure aliqua reprehenderit ipsum. Consequat ipsum nostrud dolor aliqua id nostrud deserunt magna adipisicing deserunt. Pariatur laboris enim occaecat culpa ullamco excepteur sunt ipsum dolore anim amet anim. Enim pariatur aliqua duis Lorem qui et commodo adipisicing.",
      "registered": "Sunday, December 20, 2015 4:36 AM",
      "friends": [
        {
          "id": 0,
          "name": "Oliver Price"
        },
        {
          "id": 1,
          "name": "Ramirez Justice"
        },
        {
          "id": 2,
          "name": "Brooks Wood"
        }
      ],
      "greeting": "Hello, Castillo! You have 8 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5e9abd32a899a5f7637128cf",
      "index": 2,
      "guid": "a673fa9b-283d-40a8-a9a7-67fd98b93f3b",
      "isActive": true,
      "balance": "$3,211.36",
      "picture": "http://placehold.it/32x32",
      "age": 40,
      "eyeColor": "green",
      "name": {
        "first": "Agnes",
        "last": "Beck"
      },
      "company": "PARLEYNET",
      "email": "agnes.beck@parleynet.co.uk",
      "phone": "+1 (856) 507-3029",
      "address": "237 Channel Avenue, Warsaw, Delaware, 903",
      "about": "Id excepteur voluptate commodo labore cupidatat et cupidatat ea velit nostrud. Ea nisi non laboris aliquip consequat commodo non anim officia deserunt occaecat labore occaecat. Pariatur nostrud ut culpa anim qui occaecat.",
      "registered": "Thursday, February 12, 2015 6:36 PM",
      "friends": [
        {
          "id": 0,
          "name": "Ford Sosa"
        },
        {
          "id": 1,
          "name": "Gabrielle Heath"
        },
        {
          "id": 2,
          "name": "Bryant Colon"
        }
      ],
      "greeting": "Hello, Agnes! You have 5 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5e9abd32e07ba54a8f034819",
      "index": 3,
      "guid": "fc5c988c-259b-45f4-8923-91ac986a632d",
      "isActive": false,
      "balance": "$2,524.56",
      "picture": "http://placehold.it/32x32",
      "age": 29,
      "eyeColor": "brown",
      "name": {
        "first": "Carver",
        "last": "Rutledge"
      },
      "company": "WEBIOTIC",
      "email": "carver.rutledge@webiotic.org",
      "phone": "+1 (968) 506-3048",
      "address": "239 Hunterfly Place, Lloyd, Federated States Of Micronesia, 6019",
      "about": "Laborum minim labore cillum deserunt officia cillum esse. Laboris eiusmod velit id non duis ullamco id cupidatat. Laborum velit mollit ad labore consectetur incididunt. In adipisicing exercitation velit in. Velit duis nostrud voluptate culpa commodo eiusmod Lorem anim.",
      "registered": "Tuesday, April 12, 2016 7:48 AM",
      "friends": [
        {
          "id": 0,
          "name": "Wolfe Mccoy"
        },
        {
          "id": 1,
          "name": "Holden Hull"
        },
        {
          "id": 2,
          "name": "Janine Durham"
        }
      ],
      "greeting": "Hello, Carver! You have 7 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5e9abd321b1d9075a80a2e88",
      "index": 4,
      "guid": "f446ff8f-aa63-4a61-ad7a-e02fd17435eb",
      "isActive": false,
      "balance": "$3,775.05",
      "picture": "http://placehold.it/32x32",
      "age": 38,
      "eyeColor": "brown",
      "name": {
        "first": "Ingram",
        "last": "Stevenson"
      },
      "company": "JETSILK",
      "email": "ingram.stevenson@jetsilk.ca",
      "phone": "+1 (921) 576-2744",
      "address": "223 Bath Avenue, Hoehne, Pennsylvania, 4351",
      "about": "Aliquip in aliqua commodo laboris. Eu ex ut incididunt duis voluptate sit adipisicing. Duis cillum aute ullamco consectetur. Laborum sit ad laboris exercitation.",
      "registered": "Thursday, January 16, 2014 9:01 AM",
      "friends": [
        {
          "id": 0,
          "name": "Daniel Bowman"
        },
        {
          "id": 1,
          "name": "Higgins Abbott"
        },
        {
          "id": 2,
          "name": "Willa Gardner"
        }
      ],
      "greeting": "Hello, Ingram! You have 8 unread messages.",
      "favoriteFruit": "apple"
    }
  ];
    





function ConstructorPerson(arr, personsList, personsFilters, personsModal){
    this.arr = arr;
    this.personsList = personsList;
    this.personsFilters = personsFilters;
    this.personsModal = personsModal;

    this.nameSearch = '';
    this.eyeCheckbox = '';
    this.fruitRadioBtn = '';
    this.rangeBalance = '';
    this.ageInputFrom = '';
    this.ageInputTo = '';

    this.init = function() {
        this.initPersonsList(this.arr);
        this.initPersonsFilters();
        this.initPersonsAddEventListener();
    }
    fetch('https://reqres.in/api/users/2').then(res => res.json()).then(result => {})
    this.initPersonsList = function(arr) {
        const self = this;
        this.personsList.html('');
        arr.map(function(elem, index){
            self.personsList.append(`
            <div class="list__profile">
                <div class="list__profile-img">
                    <img src="img/profile.jpg" alt="">
                </div>
                <div class="list__profile-descr">
                    <p>Name</p>  
                    <p>${elem.name.first} ${elem.name.last}</p>
                    <span class="modalBtn" data-id = '${index}'> Show more Info </span>
                </div>
            </div>`);
        })
    }
    this.initPersonsFilters = function() {
        let uniqEyeColor = [];
        let uniqFavorFruit = [];
        for(let i = 0; i < this.arr.length; i++) {
            uniqEyeColor.indexOf(this.arr[i].eyeColor) == -1 ? uniqEyeColor.push(this.arr[i].eyeColor) : null;
        }
        uniqEyeColor.map(function(elem){
            $('.filters__checkbox--eye').append(`
                <input class="eye--checkbox" type="checkbox" name="${elem}" value="${elem}">
                <label for="${elem}">${elem}</label>
                `)
        })
        for(let i = 0; i < this.arr.length; i++) {
            uniqFavorFruit.indexOf(this.arr[i].favoriteFruit) == -1 ? uniqFavorFruit.push(this.arr[i].favoriteFruit) : null;
        }
        uniqFavorFruit.map(function(elem){
            $('.filters__radio--fruit').append(`
                <input class="fruit--checkbox" type="radio" name="favorFruit" value ="${elem}">
                <label for="${elem}">${elem}</label>
                `)
        })
    }
    this.initPersonsAddEventListener = function() {
        const self = this;
        $('.modalBtn').on('click', function(){
            let click = event.target;
            $('.modalProfile').toggle('show');
            $('.modalBack-close').toggle('show');
            $('.modalProfile__info').html( `
            <p>Company</p>
            <p>${self.arr[click.dataset.id].company}</p>
            <p>email</p>
            <p>${self.arr[click.dataset.id].email}</p>  
            <p>adress</p>
            <p>${self.arr[click.dataset.id].address}</p>  
            <p>phone</p>
            <p>${self.arr[click.dataset.id].phone}</p>  
            <p>about</p>
            <p>${self.arr[click.dataset.id].about}</p>  
            <p>registered</p> 
            <p>${self.arr[click.dataset.id].registered}</p>  
            `);
        });
        $('.modalProfile-close').on('click', function(){
            $('.modalProfile').toggle('show');
            $('.modalBack-close').toggle('show');
        })
        $('.filters__submit').on('click', function(){
            self.filtering()
        })
        $('.name--search').on('change', function(e){
            self.nameSearch = e.target.value;
        })
        $('.eye--checkbox').on('change', function(e){
            self.eyeCheckbox = e.target.checked;
        });
        $('.ageFrom--input').on('change', function(e){
            self.ageInputFrom = e.target.value;
        });
        $('.ageTo--input').on('change', function(e){
            self.ageInputTo = e.target.value;
        });
        $('.filters__radio--fruit').on('change', function(e){
            self.fruitRadioBtn = e.target.value;
        });
        $('.balance--range').on('change', function(e){
            self.rangeBalance = e.target.value;
        });
    }
    this.filtering = function() {
        const self = this;
        let filter = this.arr.filter(function(item){
            return item.name.first.indexOf(self.nameSearch) > -1 
            && (self.eyeCheckbox === '' || self.eyeCheckbox == item.eyeColor)
            && (self.fruitRadioBtn === '' || self.fruitRadioBtn == item.favoriteFruit)
            //&& (self.rangeBalance === 0 || self.rangeBalance >= item.balance)
            && (self.ageInputFrom === '' || self.ageInputFrom <= item.age)
            && (self.ageInputTo === '' || self.ageInputTo >= item.age)
        })
        this.initPersonsList(filter)
        console.log(filter)
    }
}
let personsList = new ConstructorPerson(allProfileInfo, $('.list'), $('.filters'), $('.modalProfile'));
personsList.init();

