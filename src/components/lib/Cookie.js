class CCookie {

    constructor() {

        this._cities = this.checkCookie('cities');
        //console.log(this.cities);
        //this._cities = JSON.stringify(this.getDefaultCitiesArray());
        //this.setCookie('cities', this._cities);
        if (this._cities === false) {
            this._cities = JSON.stringify(this.getDefaultCitiesArray());
            this.setCookie('cities', this._cities);
        }        
    }

    getDefaultCitiesArray() {
        return [
                {id: 2643743,  name: 'London'},
                {id: 6455259,  name: 'Paris'},
                {id: 2759794,  name: 'Amsterdam'},
                {id: 2950159,  name: 'Berlin'},
                {id: 2618425,  name: 'Copenhagen'}
        ];
    }

    get cities() {

      return JSON.parse(this._cities);
    }
  
    set cities(value) {

      this._cities = JSON.stringify(value);
      this.setCookie('cities', this._cities);
    }

    getCookie(cname){

        let name = cname + "=";
        let ca = document.cookie.split(';');

        for(let i = 0; i < ca.length; i++) {

            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        
        return false;
    }

    setCookie(cname, cvalue, exdays = 100) {

        let d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    checkCookie(cookieName) {

        return this.getCookie(cookieName);
    }
  }


  export let Cookie = new CCookie();